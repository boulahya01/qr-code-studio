/**
 * PHASE 3: ShapePanel Component
 * 
 * Dot shape + eye style button grids.
 * 
 * TODO in Phase 3:
 * - [ ] Render 5 dot shape buttons
 * - [ ] Render 4 eye style buttons
 * - [ ] Show mini canvas preview for each shape
 * - [ ] Highlight current selection
 * - [ ] Handle shape selection
 * - [ ] Styling with Tailwind
 */

import { useQRStore } from '@/store/qrStore'
import { DOTS, EYES } from '@/lib/presets'

export default function ShapePanel() {
  const { currentDotShape, currentEyeStyle, setDotShape, setEyeStyle } = useQRStore()

  const renderDotPreview = (dot) => {
    // TODO: Create canvas preview for dot shapes
    return (
      <canvas
        width={32}
        height={32}
        ref={(canvas) => {
          if (canvas && dot.draw) {
            const ctx = canvas.getContext('2d')
            ctx.fillStyle = '#888'
            dot.draw(ctx, 2, 2, 11)
            dot.draw(ctx, 17, 2, 11)
            dot.draw(ctx, 2, 17, 11)
            dot.draw(ctx, 17, 17, 11)
          }
        }}
        className="w-full h-auto"
      />
    )
  }

  return (
    <>
      {/* Dot Shapes */}
      <div className="bg-[#1A1A24] border border-[rgba(255,255,255,0.07)] rounded-[10px] p-[14px]">
        <p className="font-mono text-xs tracking-widest text-[#666680] mb-[10px] flex items-center gap-[6px]">
          <span className="w-[3px] h-[10px] bg-[#7B61FF] rounded-sm flex-shrink-0"></span>
          DOT SHAPE
        </p>
        <div className="flex gap-[6px] flex-wrap">
          {DOTS.map((dot) => (
            <button
              key={dot.id}
              onClick={() => setDotShape(dot)}
              className={`w-11 h-11 flex items-center justify-center bg-[#13131A] border rounded-[6px] cursor-pointer transition-all ${
                currentDotShape.id === dot.id
                  ? 'border-[#7B61FF] bg-[rgba(123,97,255,0.15)] shadow-md'
                  : 'border-[rgba(255,255,255,0.07)] hover:border-[#7B61FF]'
              }`}
              title={dot.name}
            >
              {renderDotPreview(dot)}
            </button>
          ))}
        </div>
      </div>

      {/* Eye Styles */}
      <div className="bg-[#1A1A24] border border-[rgba(255,255,255,0.07)] rounded-[10px] p-[14px]">
        <p className="font-mono text-xs tracking-widest text-[#666680] mb-[10px] flex items-center gap-[6px]">
          <span className="w-[3px] h-[10px] bg-[#7B61FF] rounded-sm flex-shrink-0"></span>
          CORNER EYES
        </p>
        <div className="flex gap-[6px] flex-wrap">
          {EYES.map((eye, idx) => {
            const labels = ['□ Square', '▢ Round', '○ Circle', '◑ Leaf']
            return (
              <button
                key={eye.id}
                onClick={() => setEyeStyle(eye)}
                className={`px-[10px] py-[7px] text-xs font-semibold bg-[#13131A] border rounded-[6px] cursor-pointer transition-all ${
                  currentEyeStyle.id === eye.id
                    ? 'border-[#7B61FF] bg-[rgba(123,97,255,0.15)]'
                    : 'border-[rgba(255,255,255,0.07)] hover:border-[#7B61FF]'
                }`}
              >
                {labels[idx].split(' ')[0]}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
