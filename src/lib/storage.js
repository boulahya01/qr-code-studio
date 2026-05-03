/**
 * PHASE 1: Storage & Persistence
 * 
 * localStorage utilities for saving user state and presets.
 * 
 * TODO in Phase 1:
 * - [x] Implement saveCurrentState(state) - persist full state
 * - [x] Implement loadLastState() - restore state from storage
 * - [x] Implement saveUserPreset(preset) - save custom theme
 * - [x] Implement loadUserPresets() - load all saved themes
 * - [x] Implement deleteUserPreset(id) - remove saved theme
 * - [x] Add error handling (quota exceeded, corruption)
 * - [x] Test with valid/invalid JSON
 */

const STORAGE_KEYS = {
  STATE: 'qr_studio_state',
  USER_PRESETS: 'qr_studio_user_presets',
}

export function saveCurrentState(state) {
  try {
    const stateToSave = {
      content: state.content,
      fgColor: state.fgColor,
      bgColor: state.bgColor,
      currentPresetId: state.currentPreset?.id,
      currentDotShapeId: state.currentDotShape?.id,
      currentEyeStyleId: state.currentEyeStyle?.id,
      exportSize: state.exportSize,
      errorCorrection: state.errorCorrection,
      logoSize: state.logoSize,
      showFrame: state.showFrame,
      frameText: state.frameText,
      framePosition: state.framePosition,
      effects: state.effects,
    }
    localStorage.setItem(STORAGE_KEYS.STATE, JSON.stringify(stateToSave))
  } catch (error) {
    console.error('Failed to save state:', error)
  }
}

export function loadLastState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.STATE)
    return saved ? JSON.parse(saved) : null
  } catch (error) {
    console.error('Failed to load state:', error)
    return null
  }
}

export function saveUserPreset(preset) {
  try {
    const presets = loadUserPresets()
    const index = presets.findIndex(p => p.id === preset.id)
    if (index > -1) {
      presets[index] = preset
    } else {
      presets.push(preset)
    }
    localStorage.setItem(STORAGE_KEYS.USER_PRESETS, JSON.stringify(presets))
  } catch (error) {
    console.error('Failed to save preset:', error)
  }
}

export function loadUserPresets() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.USER_PRESETS)
    return saved ? JSON.parse(saved) : []
  } catch (error) {
    console.error('Failed to load presets:', error)
    return []
  }
}

export function deleteUserPreset(id) {
  try {
    const presets = loadUserPresets()
    const filtered = presets.filter(p => p.id !== id)
    localStorage.setItem(STORAGE_KEYS.USER_PRESETS, JSON.stringify(filtered))
  } catch (error) {
    console.error('Failed to delete preset:', error)
  }
}
