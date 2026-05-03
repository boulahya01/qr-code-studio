/**
 * PHASE 2: Zustand Store - Centralized State Management
 * 
 * Single source of truth for all app state.
 * All component state updates go through store actions.
 * 
 * TODO in Phase 2:
 * - [ ] Implement useQRStore hook with all state
 * - [ ] Implement all setter actions (setContent, setFgColor, etc.)
 * - [ ] Implement effect toggles (toggleEffect)
 * - [ ] Implement state persistence (saveState, loadState, reset)
 * - [ ] Connect loadLastState() from storage.js
 * - [ ] Test store updates trigger re-renders
 * - [ ] Test localStorage persistence
 */

import { create } from 'zustand'
import { PRESETS, DOTS, EYES } from '@/lib/presets'
import { saveCurrentState, loadLastState } from '@/lib/storage'

export const useQRStore = create((set, get) => ({
  // ============ STATE ============
  content: 'https://github.com/boulahya01/',
  fgColor: '#7B61FF',
  bgColor: '#0C0C0F',
  currentPreset: PRESETS[0],
  currentDotShape: DOTS[1],
  currentEyeStyle: EYES[0],
  exportSize: 320,
  errorCorrection: 'M',
  logoImage: null,
  logoSize: 25,
  showFrame: false,
  frameText: 'SCAN ME',
  framePosition: 'bottom',
  effects: {
    transparentBg: false,
    gradientDots: false,
    glow: false,
    whitePadding: true,
  },

  // ============ ACTIONS ============

  // Content
  setContent: (text) => set({ content: text }),

  // Colors
  setFgColor: (color) => set({ fgColor: color }),
  setBgColor: (color) => set({ bgColor: color }),

  // Presets
  setPreset: (preset) => set({
    currentPreset: preset,
    fgColor: preset.fg,
    bgColor: preset.bg,
  }),

  // Shapes
  setDotShape: (shape) => set({ currentDotShape: shape }),
  setEyeStyle: (eye) => set({ currentEyeStyle: eye }),

  // Logo
  setLogo: (image) => set({ logoImage: image }),
  clearLogo: () => set({ logoImage: null }),
  setLogoSize: (size) => set({ logoSize: size }),

  // Effects
  toggleEffect: (effectName) => set((state) => ({
    effects: { ...state.effects, [effectName]: !state.effects[effectName] }
  })),

  // Frame
  toggleFrame: () => set((state) => ({ showFrame: !state.showFrame })),
  setFrameText: (text) => set({ frameText: text }),
  setFramePosition: (pos) => set({ framePosition: pos }),

  // Export
  setErrorCorrection: (level) => set({ errorCorrection: level }),
  setExportSize: (px) => set({ exportSize: px }),

  // Persistence
  saveState: () => set((state) => {
    saveCurrentState(state)
    return state
  }),

  loadState: () => {
    const saved = loadLastState()
    if (saved) {
      set(saved)
    }
  },

  reset: () => set({
    content: 'https://claude.ai',
    fgColor: '#7B61FF',
    bgColor: '#0C0C0F',
    currentPreset: PRESETS[0],
    currentDotShape: DOTS[1],
    currentEyeStyle: EYES[0],
    exportSize: 320,
    errorCorrection: 'M',
    logoImage: null,
    logoSize: 25,
    showFrame: false,
    frameText: 'SCAN ME',
    framePosition: 'bottom',
    effects: {
      transparentBg: false,
      gradientDots: false,
      glow: false,
      whitePadding: true,
    },
  }),
}))
