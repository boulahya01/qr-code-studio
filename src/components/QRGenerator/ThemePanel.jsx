/**
 * PHASE 3: ThemePanel Component
 * 
 * Preset buttons + color pickers + effect toggles.
 * 
 * TODO in Phase 3:
 * - [ ] Render 10 preset buttons in grid
 * - [ ] Highlight current preset
 * - [ ] Color inputs for fg/bg colors
 * - [ ] Toggle switches for transparency, gradient, glow
 * - [ ] Handle preset selection
 * - [ ] Styling with Tailwind
 */

import { useQRStore } from '@/store/qrStore'
import { PRESETS } from '@/lib/presets'

export default function ThemePanel() {
  const { currentPreset, fgColor, bgColor, effects, setPreset, setFgColor, setBgColor, toggleEffect } = useQRStore()

  return (
    <div className="bg-[#1A1A24] border border-[rgba(255,255,255,0.07)] rounded-[10px] p-[14px]">
      <p className="font-mono text-xs tracking-widest text-[#666680] mb-[10px] flex items-center gap-[6px]">
        <span className="w-[3px] h-[10px] bg-[#7B61FF] rounded-sm flex-shrink-0"></span>
        THEME
      </p>

      {/* Preset Grid */}
      <div className="grid grid-cols-2 gap-[5px] mb-[10px]">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => setPreset(preset)}
            className={`text-xs font-semibold py-[7px] px-[10px] rounded-[6px] cursor-pointer border transition-all text-left ${
              currentPreset.id === preset.id
                ? 'border-[rgba(255,255,255,0.4)] shadow-md'
                : 'border-transparent'
            }`}
            style={{ backgroundColor: preset.bg, color: preset.fg }}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Color Pickers */}
      <div className="grid grid-cols-2 gap-2 mb-[10px]">
        <div>
          <label className="font-mono text-xs text-[#666680] text-transform uppercase tracking-widest block mb-1">
            Dot color
          </label>
          <input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="w-full h-[34px] border border-[rgba(255,255,255,0.13)] rounded-[6px] bg-[#13131A] cursor-pointer"
          />
        </div>
        <div>
          <label className="font-mono text-xs text-[#666680] text-transform uppercase tracking-widest block mb-1">
            Background
          </label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full h-[34px] border border-[rgba(255,255,255,0.13)] rounded-[6px] bg-[#13131A] cursor-pointer"
          />
        </div>
      </div>

      {/* Effect Toggles */}
      <div className="space-y-2">
        {['transparentBg', 'gradientDots', 'glow'].map((effect) => (
          <label key={effect} className="flex items-center justify-between py-[7px] px-0 text-xs font-medium text-[#E8E8F0] cursor-pointer">
            <span>
              {effect === 'transparentBg' && 'Transparent bg'}
              {effect === 'gradientDots' && 'Gradient dots'}
              {effect === 'glow' && 'Glow / bloom'}
            </span>
            <input
              type="checkbox"
              checked={effects[effect]}
              onChange={() => toggleEffect(effect)}
              className="w-[36px] h-5 cursor-pointer"
            />
          </label>
        ))}
      </div>
    </div>
  )
}
