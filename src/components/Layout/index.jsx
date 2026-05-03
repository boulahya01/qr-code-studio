/**
 * PHASE 3: Layout Component (Wrapper)
 * 
 * Main layout container (Header + Main with Sidebar + Canvas area).
 * 
 * TODO in Phase 3:
 * - [ ] Render Header
 * - [ ] Create main grid layout (sidebar | canvas)
 * - [ ] Handle fullscreen layout
 */

import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#0C0C0F] text-[#E8E8F0]">
      <Header />
      <main className="grid grid-cols-[300px_1fr] gap-0 flex-1 relative z-1">
        <Sidebar>{children}</Sidebar>
        {/* Canvas area will be rendered in the right column */}
      </main>
    </div>
  )
}
