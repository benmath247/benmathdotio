export default function calculateInverseColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  const luminance = 0.299 * r + 0.587 * g + 0.114 * b

  return luminance > 128 ? '#000000' : '#ffffff'
}
