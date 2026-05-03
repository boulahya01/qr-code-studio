/**
 * PHASE 3: Sidebar Component
 * 
 * Scrollable container for all control panels.
 * 
 * TODO in Phase 3:
 * - [ ] Create scrollable flex-col container
 * - [ ] Add max-height and overflow-y
 * - [ ] Style with border-right
 * - [ ] Pass children (control panels) through
 */

export default function Sidebar({ children }) {
  return (
    <aside className="border-r border-[rgba(255,255,255,0.07)] px-4 py-5 flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-65px)]">
      {children}
    </aside>
  )
}
