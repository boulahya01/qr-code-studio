/**
 * PHASE 3: QRGenerator Main Component
 * 
 * Assembles all panels into the generator interface.
 * Left sidebar with controls, right canvas area.
 * 
 * TODO in Phase 3:
 * - [ ] Render all panel components in sidebar
 * - [ ] Create canvas area layout (right column)
 * - [ ] Combine all pieces
 */

import ContentInput from './ContentInput'
import ThemePanel from './ThemePanel'
import ShapePanel from './ShapePanel'
import LogoPanel from './LogoPanel'
import FramePanel from './FramePanel'
import QRCanvas from './QRCanvas'
import ExportControls from './ExportControls'

export default function QRGenerator() {
  return (
    <div className="contents">
      {/* Sidebar */}
      <>
        <ContentInput />
        <ThemePanel />
        <ShapePanel />
        <LogoPanel />
        <FramePanel />
      </>

      {/* Canvas Area */}
      <div className="flex flex-col items-center justify-center px-10 py-8 gap-6 bg-[#0C0C0F]">
        <QRCanvas />
        <ExportControls />
      </div>
    </div>
  )
}
