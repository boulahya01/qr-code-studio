/**
 * PHASE 3: FramePanel Component
 * 
 * Frame enable/disable, text input, position select.
 * 
 * TODO in Phase 3:
 * - [ ] Frame toggle
 * - [ ] Text input (appears when frame enabled)
 * - [ ] Position select (top/bottom)
 * - [ ] Conditional rendering based on showFrame
 */

import { useQRStore } from '@/store/qrStore'

export default function FramePanel() {
  const { showFrame, frameText, framePosition, toggleFrame, setFrameText, setFramePosition } = useQRStore()

  return (
    <div className="bg-[#1A1A24] border border-[rgba(255,255,255,0.07)] rounded-[10px] p-[14px]">
      <p className="font-mono text-xs tracking-widest text-[#666680] mb-[10px] flex items-center gap-[6px]">
        <span className="w-[3px] h-[10px] bg-[#7B61FF] rounded-sm flex-shrink-0"></span>
        FRAME &amp; LABEL
      </p>

      {/* Toggle */}
      <label className="flex items-center justify-between py-[7px] text-xs font-medium text-[#E8E8F0] cursor-pointer mb-[8px]">
        <span>Enable frame</span>
        <input
          type="checkbox"
          checked={showFrame}
          onChange={toggleFrame}
          className="w-[36px] h-5 cursor-pointer"
        />
      </label>

      {/* Conditional Options */}
      {showFrame && (
        <div className="flex flex-col gap-[6px]">
          <input
            type="text"
            value={frameText}
            onChange={(e) => setFrameText(e.target.value)}
            placeholder="Frame text"
            className="w-full px-3 py-2 text-xs font-mono bg-[#13131A] border border-[rgba(255,255,255,0.13)] rounded-[6px] text-[#E8E8F0] focus:border-[#7B61FF] outline-none transition-colors"
          />
          <select
            value={framePosition}
            onChange={(e) => setFramePosition(e.target.value)}
            className="w-full px-3 py-2 text-xs font-mono bg-[#13131A] border border-[rgba(255,255,255,0.13)] rounded-[6px] text-[#E8E8F0] cursor-pointer focus:border-[#7B61FF] outline-none transition-colors"
          >
            <option value="bottom">Label — Bottom</option>
            <option value="top">Label — Top</option>
          </select>
        </div>
      )}
    </div>
  )
}
