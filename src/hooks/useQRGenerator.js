/**
 * PHASE 2: Custom Hook for QR Generation
 * 
 * Encapsulates QR generation logic and memoization.
 * 
 * TODO in Phase 2:
 * - [ ] Implement useQRGenerator hook
 * - [ ] Connect to generateQR() from lib/qr.js
 * - [ ] Add useMemo to prevent unnecessary regeneration
 * - [ ] Handle errors properly
 * - [ ] Return { qrData, error, loading }
 */

import { useMemo } from 'react'
import { useQRStore } from '@/store/qrStore'

export function useQRGenerator() {
  const state = useQRStore()

  const { qrData, error } = useMemo(() => {
    try {
      if (!state.content.trim()) {
        return { qrData: null, error: 'Enter some content.' }
      }

      // TODO: Call generateQR() from lib/qr.js
      // For now, placeholder
      console.log('Generating QR with:', state)
      return { qrData: null, error: null }
    } catch (err) {
      return { qrData: null, error: err.message }
    }
  }, [
    state.content,
    state.fgColor,
    state.bgColor,
    state.currentDotShape,
    state.currentEyeStyle,
    state.exportSize,
    state.errorCorrection,
    state.logoImage,
    state.logoSize,
    state.showFrame,
    state.frameText,
    state.framePosition,
    state.effects,
  ])

  return { qrData, error }
}
