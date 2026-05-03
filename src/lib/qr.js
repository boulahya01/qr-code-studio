/**
 * PHASE 1: QR Generation & Export Logic
 * 
 * Extracts all QR generation, rendering, and export logic from the original HTML script.
 * Functions are pure (no React/DOM, only canvas operations) and reusable.
 */

// Import QR library (npm package instead of CDN)
import QRCode from 'qrcode-generator'

/**
 * Generate QR code object from text content
 * @param {string} text - Content to encode
 * @param {Object} options - QR generation options
 * @returns {Object} QR code object with moduleCount and isDark method
 */
export function generateQR(text, options = {}) {
  if (!text || !text.trim()) {
    throw new Error('Enter some content.')
  }

  const errorCorrection = options.errorCorrection || 'M'
  let qr

  try {
    qr = QRCode(0, errorCorrection)
    qr.addData(text)
    qr.make()
  } catch (e) {
    // Fallback to L (Low) error correction if content too long
    try {
      qr = QRCode(0, 'L')
      qr.addData(text)
      qr.make()
    } catch (e2) {
      throw new Error('Content too long.')
    }
  }

  return qr
}

/**
 * Check if position is a corner eye (not to be filled with dot pattern)
 */
export function isEyePosition(row, col, n) {
  return (row < 8 && col < 8) || (row < 8 && col >= n - 8) || (row >= n - 8 && col < 8)
}

/**
 * Render QR code to canvas with all effects
 * @param {HTMLCanvasElement} canvas - Target canvas
 * @param {Object} qr - QR code object from generateQR()
 * @param {Object} state - App state with colors, effects, logo, etc.
 */
export function renderCanvas(canvas, qr, state = {}) {
  if (!canvas || !qr) return

  const {
    fg = '#7B61FF',
    bg = '#0C0C0F',
    accentColor = '#00E5FF',
    transparentBg = false,
    gradientDots = false,
    glow = false,
    showFrame = false,
    frameText = 'SCAN ME',
    framePosition = 'bottom',
    logoImage = null,
    logoSize = 25,
    whitePadding = true,
    dotShape = null,
    eyeStyle = null,
    exportSize = 320,
  } = state

  const n = qr.getModuleCount()
  const mg = 3 // margin
  const tot = n + mg * 2
  const base = exportSize
  const fh = showFrame ? Math.round(base * 0.1) : 0
  const cW = base
  const cH = base + fh
  const d = base / tot

  canvas.width = cW
  canvas.height = cH

  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, cW, cH)

  const qT = showFrame && framePosition === 'top' ? fh : 0

  // Background
  if (!transparentBg) {
    ctx.fillStyle = bg
    ctx.fillRect(0, qT, cW, base)
  }

  // Prepare fill (color or gradient)
  let fill = fg
  if (gradientDots) {
    const g = ctx.createLinearGradient(0, qT, cW, qT + base)
    g.addColorStop(0, fg)
    g.addColorStop(1, accentColor || fg)
    fill = g
  }

  // Apply glow effect
  if (glow) {
    ctx.shadowColor = fg
    ctx.shadowBlur = d * 0.9
  }

  ctx.fillStyle = fill

  // Draw QR dots
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (!qr.isDark(r, c) || isEyePosition(r, c, n)) continue
      const x = (c + mg) * d
      const y = qT + (r + mg) * d
      const p = d * 0.08

      // Use custom dot shape if provided
      if (dotShape && dotShape.draw) {
        dotShape.draw(ctx, x + p, y + p, d - p * 2)
      } else {
        ctx.fillRect(x + p, y + p, d - p * 2, d - p * 2)
      }
    }
  }

  // Draw corner eyes
  ctx.shadowBlur = 0
  ctx.lineWidth = d
  const eyePositions = [[0, 0], [0, n - 7], [n - 7, 0]]
  eyePositions.forEach(([er, ec]) => {
    ctx.strokeStyle = fg
    ctx.fillStyle = fg
    const ex = (ec + mg) * d
    const ey = qT + (er + mg) * d

    if (eyeStyle && eyeStyle.draw) {
      eyeStyle.draw(ctx, ex, ey, d)
    } else {
      // Default square eyes
      const o = d / 2
      ctx.strokeRect(ex + o, ey + o, 6 * d, 6 * d)
      ctx.fillRect(ex + 2 * d + d * 0.1, ey + 2 * d + d * 0.1, 3 * d - d * 0.2, 3 * d - d * 0.2)
    }
  })

  // Draw frame/label
  if (showFrame && frameText) {
    const fy = framePosition === 'bottom' ? base : 0
    ctx.shadowBlur = 0
    ctx.fillStyle = fg
    ctx.fillRect(0, fy, cW, fh)

    const fs = Math.round(fh * 0.42)
    ctx.font = `700 ${fs}px 'Syne', sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = transparentBg ? '#fff' : bg
    ctx.fillText(frameText.toUpperCase(), cW / 2, fy + fh / 2)
  }

  // Draw logo
  if (logoImage) {
    const logoPct = logoSize / 100
    const ls = base * logoPct
    const lx = (cW - ls) / 2
    const ly = qT + (base - ls) / 2
    ctx.shadowBlur = 0

    if (whitePadding) {
      const pd = ls * 0.18
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.roundRect(lx - pd, ly - pd, ls + pd * 2, ls + pd * 2, (ls + pd * 2) * 0.15)
      ctx.fill()
    }

    ctx.drawImage(logoImage, lx, ly, ls, ls)
  }
}

/**
 * Export canvas as PNG download
 */
export async function exportPNG(canvas, filename = 'qrcode.png') {
  if (!canvas) return

  const a = document.createElement('a')
  a.download = filename
  a.href = canvas.toDataURL('image/png')
  a.click()
}

/**
 * Export QR code as SVG string/download
 */
export async function exportSVG(qr, colors = { fg: '#000', bg: '#fff' }, filename = 'qrcode.svg') {
  if (!qr) return

  const fg = colors.fg || '#000'
  const bg = colors.bg || '#fff'
  const isTr = colors.transparent || false

  const n = qr.getModuleCount()
  const mg = 3
  const d = 12
  const tot = n + mg * 2
  const sz = tot * d

  let paths = ''
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (!qr.isDark(r, c)) continue
      const x = (c + mg) * d + d * 0.08
      const y = (r + mg) * d + d * 0.08
      const s = d * 0.84
      const rad = (s * 0.32).toFixed(1)
      paths += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${s.toFixed(1)}" height="${s.toFixed(1)}" rx="${rad}"/>`
    }
  }

  const bgEl = isTr ? '' : `<rect width="${sz}" height="${sz}" fill="${bg}"/>`
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}">${bgEl}<g fill="${fg}">${paths}</g></svg>`

  const blob = new Blob([svg], { type: 'image/svg+xml' })
  const a = document.createElement('a')
  a.download = filename
  a.href = URL.createObjectURL(blob)
  a.click()

  return svg
}

/**
 * Copy canvas image to system clipboard
 */
export async function copyToClipboard(canvas) {
  if (!canvas) return false

  try {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'))
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
    return true
  } catch (error) {
    console.error('Clipboard copy failed:', error)
    return false
  }
}
