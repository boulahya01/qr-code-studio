/**
 * PHASE 1: Utility Functions
 * 
 * Helper functions for validation and data transformation.
 * 
 * TODO in Phase 1:
 * - [ ] Implement isValidColor(hex) - validate hex color
 * - [ ] Implement isImageFile(file) - check if file is image
 * - [ ] Implement canvasToBlob(canvas) - canvas to Blob
 * - [ ] Add any other helpers as needed
 */

export function isValidColor(hex) {
  if (!hex || typeof hex !== 'string') return false
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return hexRegex.test(hex)
}

export function isImageFile(file) {
  if (!file) return false
  const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp']
  return validTypes.includes(file.type)
}

export async function canvasToBlob(canvas, type = 'image/png') {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, type)
  })
}

export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}
