/**
 * PHASE 3: Header Component
 * 
 * Top navigation bar with logo and badge.
 * 
 * TODO in Phase 3:
 * - [ ] Render logo icon + text
 * - [ ] Display version badge
 * - [ ] Style with Tailwind (sticky header, blur backdrop)
 * - [ ] No state needed (read-only display)
 */

export default function Header() {
  return (
    <header className="sticky top-0 z-100 flex items-center justify-between px-7 py-[18px] border-b border-[rgba(255,255,255,0.07)] bg-[rgba(12,12,15,0.9)] backdrop-blur-xl">
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center justify-center w-8 h-8 text-base font-bold bg-gradient-to-br from-[#7B61FF] to-[#00E5FF] rounded-lg">
          ⬛
        </div>
        <div className="text-lg font-black tracking-tighter">
          QR <span className="text-[#7B61FF]">Studio</span>
        </div>
      </div>
      <div className="font-mono text-xs px-2 py-[3px] bg-[rgba(123,97,255,0.15)] border border-[rgba(123,97,255,0.3)] rounded-full text-[#7B61FF] tracking-widest">
        PRO · v1.0
      </div>
    </header>
  )
}
