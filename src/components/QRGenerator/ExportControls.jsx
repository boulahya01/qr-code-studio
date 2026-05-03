/**
 * PHASE 3: ExportControls Component
 * 
 * Export buttons (PNG/SVG/Copy) + size slider.
 * 
 * TODO in Phase 3:
 * - [ ] PNG export button → exportPNG()
 * - [ ] SVG export button → exportSVG()
 * - [ ] Copy button → copyToClipboard()
 * - [ ] Size slider (200-600px)
 * - [ ] Feedback messages on export
 * - [ ] Styled button grid
 */

import { useRef, useState } from 'react'
import { useQRStore } from '@/store/qrStore'
import { exportPNG, exportSVG, copyToClipboard } from '@/lib/qr'

export default function ExportControls() {
  const { exportSize, setExportSize } = useQRStore()
  const copyBtnRef = useRef(null)
  const [copyStatus, setCopyStatus] = useState('⎘ Copy')

  const handlePNGExport = async () => {
    const canvas = document.getElementById('qrc')
    if (!canvas) return
    await exportPNG(canvas, 'qrcode.png')
  }

  const handleSVGExport = async () => {
    await exportSVG({}, { fg: '#000', bg: '#fff' })
  }

  const handleCopyClick = async () => {
    const canvas = document.getElementById('qrc')
    if (!canvas) return
    try {
      await copyToClipboard(canvas)
      setCopyStatus('✓ Copied')
      setTimeout(() => setCopyStatus('⎘ Copy'), 2200)
    } catch (err) {
      setCopyStatus('✗ Failed')
      setTimeout(() => setCopyStatus('⎘ Copy'), 2200)
    }
  }

  return (
    <>
      {/* Size Slider */}
      <div className="w-full max-w-[420px] mb-3">
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="200"
            max="600"
            step="40"
            value={exportSize}
            onChange={(e) => setExportSize(parseInt(e.target.value))}
            className="flex-1 cursor-pointer"
          />
          <div className="font-mono text-xs text-[#666680] min-w-[48px] text-right">
            {exportSize}px
          </div>
        </div>
      </div>

      {/* Export Buttons */}
      <div className="grid grid-cols-3 gap-2 w-full max-w-[420px] mb-3">
        <button
          onClick={handlePNGExport}
          className="font-black text-xs py-[11px] px-0 rounded-[6px] cursor-pointer border border-transparent bg-gradient-to-br from-[#7B61FF] to-[#9B7EFF] text-white transition-all hover:shadow-lg hover:from-[#6B4FE8] hover:to-[#7B61FF] hover:-translate-y-0.5"
        >
          ⬇ PNG
        </button>
        <button
          onClick={handleSVGExport}
          className="font-bold text-xs py-[11px] px-0 rounded-[6px] cursor-pointer border border-[rgba(255,255,255,0.13)] bg-[#1A1A24] text-[#E8E8F0] transition-all hover:bg-[#7B61FF] hover:border-[#7B61FF] hover:text-white hover:-translate-y-0.5"
        >
          ⬇ SVG
        </button>
        <button
          ref={copyBtnRef}
          onClick={handleCopyClick}
          className="font-bold text-xs py-[11px] px-0 rounded-[6px] cursor-pointer border border-[rgba(255,255,255,0.13)] bg-[#1A1A24] text-[#E8E8F0] transition-all hover:bg-[#7B61FF] hover:border-[#7B61FF] hover:text-white hover:-translate-y-0.5"
        >
          {copyStatus}
        </button>
      </div>

      {/* Info Text */}
      <p className="font-mono text-xs text-[#666680] text-center">
        SVG = vector, scalable to any print size
      </p>
    </>
  )
}
