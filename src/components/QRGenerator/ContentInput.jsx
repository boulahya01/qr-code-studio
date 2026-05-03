/**
 * PHASE 3: ContentInput Component
 * 
 * Textarea for entering QR content + template chip buttons.
 * 
 * TODO in Phase 3:
 * - [ ] Create textarea input bound to store.content
 * - [ ] Create chip buttons for each template
 * - [ ] Handle template clicks (insert template value)
 * - [ ] Styling with Tailwind
 */

import { useQRStore } from '@/store/qrStore'
import { TEMPLATES } from '@/lib/presets'

export default function ContentInput() {
  const { content, setContent } = useQRStore()

  const handleTemplateClick = (template) => {
    setContent(template.value)
  }

  return (
    <div className="bg-[#1A1A24] border border-[rgba(255,255,255,0.07)] rounded-[10px] p-[14px]">
      <p className="font-mono text-xs tracking-widest text-[#666680] mb-[10px] flex items-center gap-[6px]">
        <span className="w-[3px] h-[10px] bg-[#7B61FF] rounded-sm flex-shrink-0"></span>
        CONTENT
      </p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="URL, email, WiFi, vCard, text…"
        className="w-full p-[10px] text-xs font-mono bg-[#13131A] border border-[rgba(255,255,255,0.13)] rounded-[6px] text-[#E8E8F0] resize-vertical min-h-[72px] outline-none focus:border-[#7B61FF] transition-colors"
      />
      <div className="flex flex-wrap gap-1 mt-2">
        {TEMPLATES.map((template) => (
          <button
            key={template.label}
            onClick={() => handleTemplateClick(template)}
            className="font-mono text-xs px-2 py-[3px] bg-[#13131A] border border-[rgba(255,255,255,0.13)] rounded-full text-[#666680] cursor-pointer hover:border-[#7B61FF] hover:text-[#7B61FF] hover:bg-[rgba(123,97,255,0.08)] transition-all"
          >
            {template.label}
          </button>
        ))}
      </div>
    </div>
  )
}
