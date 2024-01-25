export default function darkenColor(hexColor, factor) {
  // Remove the '#' character if present
  hexColor = hexColor.replace('#', '');

  // Parse the hexadecimal color string to RGB
  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the darkened RGB values, ensuring they stay within the valid range
  r = Math.max(0, r - factor);
  g = Math.max(0, g - factor);
  b = Math.max(0, b - factor);

  // Convert the darkened RGB values back to hexadecimal
  const darkenedHex = `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;

  return darkenedHex;
}
