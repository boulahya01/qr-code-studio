/**
 * PHASE 3: LogoPanel Component
 * 
 * Logo upload, size slider, white padding toggle.
 * 
 * TODO in Phase 3:
 * - [ ] Create upload area (drag-drop)
 * - [ ] Handle file selection
 * - [ ] Validate image files
 * - [ ] Load image into store
 * - [ ] Size slider (10-35%)
 * - [ ] White padding toggle
 * - [ ] Clear button
 */

import { useRef } from 'react'
import { useQRStore } from '@/store/qrStore'
import { isImageFile } from '@/lib/utils'

export default function LogoPanel() {
  const { logoImage, logoSize, effects, setLogo, clearLogo, setLogoSize, toggleEffect } = useQRStore()
  const fileInputRef = useRef(null)

  const handleFileSelect = (file) => {
    if (!isImageFile(file)) {
      alert('Please select a valid image file (PNG, JPG, GIF, WebP)')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        setLogo(img)
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="bg-[#1A1A24] border border-[rgba(255,255,255,0.07)] rounded-[10px] p-[14px]">
      <p className="font-mono text-xs tracking-widest text-[#666680] mb-[10px] flex items-center gap-[6px]">
        <span className="w-[3px] h-[10px] bg-[#7B61FF] rounded-sm flex-shrink-0"></span>
        CENTER LOGO
      </p>

      {/* Upload Area */}
      <div className="flex gap-[6px] mb-[10px]">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex-1 py-3 px-3 bg-[#13131A] border-2 border-dashed border-[rgba(255,255,255,0.13)] rounded-[6px] text-xs font-mono text-[#666680] cursor-pointer hover:border-[#7B61FF] hover:text-[#7B61FF] hover:bg-[rgba(123,97,255,0.05)] transition-all"
        >
          ↑ Upload logo
        </button>
        <button
          onClick={clearLogo}
          disabled={!logoImage}
          className="px-[10px] py-[5px] text-xs font-semibold bg-[#13131A] border border-[rgba(255,255,255,0.13)] rounded-[6px] text-[#666680] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#FF4D6D] hover:text-[#FF4D6D]"
        >
          Clear
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
          className="hidden"
        />
      </div>

      {/* Logo Name */}
      {logoImage && (
        <p className="font-mono text-xs text-[#06D6A0] mb-2 truncate">
          ✓ Logo loaded
        </p>
      )}

      {/* Size Slider */}
      <div className="mb-[6px]">
        <div className="font-mono text-xs text-[#666680] mb-[6px] flex justify-between">
          <span>Logo size</span>
          <span className="text-[#E8E8F0]">{logoSize}%</span>
        </div>
        <input
          type="range"
          min="10"
          max="35"
          value={logoSize}
          onChange={(e) => setLogoSize(parseInt(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>

      {/* White Padding Toggle */}
      <label className="flex items-center justify-between py-[7px] text-xs font-medium text-[#E8E8F0] cursor-pointer">
        <span>White padding</span>
        <input
          type="checkbox"
          checked={effects.whitePadding}
          onChange={() => toggleEffect('whitePadding')}
          className="w-[36px] h-5 cursor-pointer"
        />
      </label>
    </div>
  )
}
