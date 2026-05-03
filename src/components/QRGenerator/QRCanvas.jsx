/**
 * PHASE 3: QRCanvas Component
 * 
 * Live canvas preview of generated QR code.
 * Reads all state from store, renders with effects.
 * 
 * TODO in Phase 3:
 * - [ ] Create canvas element
 * - [ ] useQRGenerator hook to get qrData
 * - [ ] Render QR with canvas API
 * - [ ] Apply effects (glow, gradient, transparency)
 * - [ ] Update when store state changes
 * - [ ] Display error messages
 */

import { useRef, useEffect } from 'react'
import { useQRStore } from '@/store/qrStore'
import { useQRGenerator } from '@/hooks/useQRGenerator'

export default function QRCanvas() {
  const canvasRef = useRef(null)
  const { exportSize } = useQRStore()
  const { qrData, error } = useQRGenerator()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !qrData) return

    // TODO: Render QR to canvas with all effects
    const ctx = canvas.getContext('2d')
    ctx?.fillStyle = '#7B61FF'
    ctx?.fillRect(0, 0, canvas.width, canvas.height)
  }, [qrData])

  return (
    <div className="flex flex-col items-center justify-center px-10 py-8 gap-6">
      <div className="relative inline-block">
        <div className="absolute -inset-5 bg-gradient-radial from-[rgba(123,97,255,0.15)] to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
        <canvas
          ref={canvasRef}
          width={exportSize}
          height={exportSize}
          className="block rounded-lg"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {error && (
        <p className="font-mono text-xs text-[#FF4D6D] text-center">
          {error}
        </p>
      )}
    </div>
  )
}
