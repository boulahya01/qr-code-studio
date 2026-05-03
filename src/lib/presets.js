/**
 * PHASE 1: Presets & Constants Data
 *
 * All theme, shape, and template data extracted from original HTML script.
 * This module contains pure data structures only - no logic.
 *
 * TODO in Phase 1:
 * - [x] Extract PRESETS array (10 themes with bg, fg, accent colors)
 * - [x] Extract DOTS array (5 dot shapes with draw functions)
 * - [x] Extract EYES array (4 eye styles with draw functions)
 * - [x] Extract TEMPLATES array (8 quick-fill templates)
 * - [ ] Add helper: getPresetByID(id)
 * - [ ] Add helper: getDotByID(id)
 * - [ ] Add helper: getEyeByID(id)
 * - [ ] Add helper: getTemplateByLabel(label)
 */

export const PRESETS = [
  { id: 'default', name: 'Studio', bg: '#0C0C0F', fg: '#7B61FF', ac: '#00E5FF' },
  { id: 'corp', name: 'Corporate', bg: '#FFFFFF', fg: '#1B3A6B', ac: '#2563EB' },
  { id: 'minimal', name: 'Minimal', bg: '#FFFFFF', fg: '#111111', ac: '#555' },
  { id: 'premium', name: 'Premium', bg: '#0F0F14', fg: '#C9A84C', ac: '#F0D080' },
  { id: 'cyber', name: 'Cyberpunk', bg: '#0a0a0f', fg: '#FFE600', ac: '#00FFFF' },
  { id: 'matrix', name: 'Matrix', bg: '#000', fg: '#00FF41', ac: '#003B00' },
  { id: 'neon', name: 'Neon', bg: '#0d0022', fg: '#FF00FF', ac: '#FF71CE' },
  { id: 'forest', name: 'Forest', bg: '#FFFFFF', fg: '#1A3A0F', ac: '#4D8C2A' },
  { id: 'fire', name: 'Fire', bg: '#0f0000', fg: '#FF6B00', ac: '#FF2200' },
  { id: 'ice', name: 'Ice', bg: '#010d18', fg: '#A8FFFD', ac: '#00B4D8' },
]

export const DOTS = [
  {
    id: 'sq',
    name: 'Square',
    draw: (c, x, y, s) => c.fillRect(x, y, s, s)
  },
  {
    id: 'rnd',
    name: 'Rounded',
    draw: (c, x, y, s) => {
      c.beginPath()
      c.roundRect(x, y, s, s, s * 0.32)
      c.fill()
    }
  },
  {
    id: 'dot',
    name: 'Circle',
    draw: (c, x, y, s) => {
      c.beginPath()
      c.arc(x + s / 2, y + s / 2, s * 0.46, 0, Math.PI * 2)
      c.fill()
    }
  },
  {
    id: 'dia',
    name: 'Diamond',
    draw: (c, x, y, s) => {
      c.beginPath()
      c.moveTo(x + s / 2, y)
      c.lineTo(x + s, y + s / 2)
      c.lineTo(x + s / 2, y + s)
      c.lineTo(x, y + s / 2)
      c.closePath()
      c.fill()
    }
  },
  {
    id: 'crs',
    name: 'Cross',
    draw: (c, x, y, s) => {
      const t = s * 0.27
      c.fillRect(x + t, y, s - 2 * t, s)
      c.fillRect(x, y + t, s, s - 2 * t)
    }
  },
]

export const EYES = [
  {
    id: 'sq',
    name: 'Square',
    draw: (c, ex, ey, d) => {
      const o = d / 2
      c.strokeRect(ex + o, ey + o, 6 * d, 6 * d)
      c.fillRect(ex + 2 * d + d * 0.1, ey + 2 * d + d * 0.1, 3 * d - d * 0.2, 3 * d - d * 0.2)
    }
  },
  {
    id: 'rnd',
    name: 'Rounded',
    draw: (c, ex, ey, d) => {
      const r = d * 1.1
      c.beginPath()
      c.roundRect(ex + d / 2, ey + d / 2, 6 * d, 6 * d, r)
      c.stroke()
      c.beginPath()
      c.roundRect(ex + 2 * d + d * 0.15, ey + 2 * d + d * 0.15, 3 * d - d * 0.3, 3 * d - d * 0.3, r * 0.55)
      c.fill()
    }
  },
  {
    id: 'circ',
    name: 'Circle',
    draw: (c, ex, ey, d) => {
      c.beginPath()
      c.arc(ex + 3.5 * d, ey + 3.5 * d, 3 * d, 0, Math.PI * 2)
      c.stroke()
      c.beginPath()
      c.arc(ex + 3.5 * d, ey + 3.5 * d, d * 1.5, 0, Math.PI * 2)
      c.fill()
    }
  },
  {
    id: 'leaf',
    name: 'Leaf',
    draw: (c, ex, ey, d) => {
      c.beginPath()
      c.roundRect(ex + d / 2, ey + d / 2, 6 * d, 6 * d, [0, d * 1.4, d * 1.4, d * 1.4])
      c.stroke()
      c.beginPath()
      c.arc(ex + 3.5 * d, ey + 3.5 * d, d * 1.5, 0, Math.PI * 2)
      c.fill()
    }
  },
]

export const TEMPLATES = [
  { label: 'URL', value: 'https://' },
  { label: 'Email', value: 'mailto:you@firm.com?subject=Invoice%20Payment' },
  { label: 'Phone', value: 'tel:+1234567890' },
  { label: 'WiFi', value: 'WIFI:T:WPA;S:OfficeName;P:Password;;' },
  { label: 'SMS', value: 'sms:+1234567890?body=Hello' },
  { label: 'vCard', value: 'BEGIN:VCARD\nVERSION:3.0\nFN:Your Name CPA\nORG:Your Firm\nTEL:+1234567890\nEMAIL:you@firm.com\nURL:https://yourfirm.com\nEND:VCARD' },
  { label: 'PayPal', value: 'https://paypal.me/yourhandle' },
  { label: 'Location', value: 'geo:40.712776,-74.005974' },
]

// Helper functions
export function getPresetByID(id) {
  return PRESETS.find(p => p.id === id) || PRESETS[0]
}

export function getDotByID(id) {
  return DOTS.find(d => d.id === id) || DOTS[0]
}

export function getEyeByID(id) {
  return EYES.find(e => e.id === id) || EYES[0]
}

export function getTemplateByLabel(label) {
  return TEMPLATES.find(t => t.label === label)
}
  { id: 'minimal', name: 'Minimal', bg: '#FFFFFF', fg: '#111111', ac: '#555' },
  { id: 'premium', name: 'Premium', bg: '#0F0F14', fg: '#C9A84C', ac: '#F0D080' },
  { id: 'cyber', name: 'Cyberpunk', bg: '#0a0a0f', fg: '#FFE600', ac: '#00FFFF' },
  { id: 'matrix', name: 'Matrix', bg: '#000', fg: '#00FF41', ac: '#003B00' },
  { id: 'neon', name: 'Neon', bg: '#0d0022', fg: '#FF00FF', ac: '#FF71CE' },
  { id: 'forest', name: 'Forest', bg: '#FFFFFF', fg: '#1A3A0F', ac: '#4D8C2A' },
  { id: 'fire', name: 'Fire', bg: '#0f0000', fg: '#FF6B00', ac: '#FF2200' },
  { id: 'ice', name: 'Ice', bg: '#010d18', fg: '#A8FFFD', ac: '#00B4D8' },
]

export const DOTS = [
  { id: 'sq', name: 'Square', draw: (c, x, y, s) => c.fillRect(x, y, s, s) },
  { id: 'rnd', name: 'Rounded', draw: (c, x, y, s) => { c.beginPath(); c.roundRect(x, y, s, s, s * 0.32); c.fill() } },
  { id: 'dot', name: 'Circle', draw: (c, x, y, s) => { c.beginPath(); c.arc(x + s / 2, y + s / 2, s * 0.46, 0, Math.PI * 2); c.fill() } },
  { id: 'dia', name: 'Diamond', draw: (c, x, y, s) => { c.beginPath(); c.moveTo(x + s / 2, y); c.lineTo(x + s, y + s / 2); c.lineTo(x + s / 2, y + s); c.lineTo(x, y + s / 2); c.closePath(); c.fill() } },
  { id: 'crs', name: 'Cross', draw: (c, x, y, s) => { const t = s * 0.27; c.fillRect(x + t, y, s - 2 * t, s); c.fillRect(x, y + t, s, s - 2 * t) } },
]

export const EYES = [
  { id: 'sq', name: 'Square', draw: (c, ex, ey, d) => { const o = d / 2; c.strokeRect(ex + o, ey + o, 6 * d, 6 * d); c.fillRect(ex + 2 * d + d * 0.1, ey + 2 * d + d * 0.1, 3 * d - d * 0.2, 3 * d - d * 0.2) } },
  { id: 'rnd', name: 'Rounded', draw: (c, ex, ey, d) => { const r = d * 1.1; c.beginPath(); c.roundRect(ex + d / 2, ey + d / 2, 6 * d, 6 * d, r); c.stroke(); c.beginPath(); c.roundRect(ex + 2 * d + d * 0.15, ey + 2 * d + d * 0.15, 3 * d - d * 0.3, 3 * d - d * 0.3, r * 0.55); c.fill() } },
  { id: 'circ', name: 'Circle', draw: (c, ex, ey, d) => { c.beginPath(); c.arc(ex + 3.5 * d, ey + 3.5 * d, 3 * d, 0, Math.PI * 2); c.stroke(); c.beginPath(); c.arc(ex + 3.5 * d, ey + 3.5 * d, d * 1.5, 0, Math.PI * 2); c.fill() } },
  { id: 'leaf', name: 'Leaf', draw: (c, ex, ey, d) => { c.beginPath(); c.roundRect(ex + d / 2, ey + d / 2, 6 * d, 6 * d, [0, d * 1.4, d * 1.4, d * 1.4]); c.stroke(); c.beginPath(); c.arc(ex + 3.5 * d, ey + 3.5 * d, d * 1.5, 0, Math.PI * 2); c.fill() } },
]

export const TEMPLATES = [
  { label: 'URL', value: 'https://' },
  { label: 'Email', value: 'mailto:you@firm.com?subject=Invoice%20Payment' },
  { label: 'Phone', value: 'tel:+1234567890' },
  { label: 'WiFi', value: 'WIFI:T:WPA;S:OfficeName;P:Password;;' },
  { label: 'SMS', value: 'sms:+1234567890?body=Hello' },
  { label: 'vCard', value: 'BEGIN:VCARD\nVERSION:3.0\nFN:Your Name CPA\nORG:Your Firm\nTEL:+1234567890\nEMAIL:you@firm.com\nURL:https://yourfirm.com\nEND:VCARD' },
  { label: 'PayPal', value: 'https://paypal.me/yourhandle' },
  { label: 'Location', value: 'geo:40.712776,-74.005974' },
]

export function getPresetByID(id) {
  return PRESETS.find(p => p.id === id) || PRESETS[0]
}

export function getDotByID(id) {
  return DOTS.find(d => d.id === id) || DOTS[0]
}

export function getEyeByID(id) {
  return EYES.find(e => e.id === id) || EYES[0]
}

export function getTemplateByLabel(label) {
  return TEMPLATES.find(t => t.label === label) || null
}
