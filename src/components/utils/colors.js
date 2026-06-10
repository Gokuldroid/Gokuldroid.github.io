const COLORS = ["purple", "orange", "green", "blue", "grey"]

export function getColor(text) {
  let asciiVal = 0
  for (const c of text) {
    asciiVal += c.charCodeAt(0)
  }
  return COLORS[asciiVal % COLORS.length]
}

export function getColorForIndex(index) {
  return COLORS[index % COLORS.length]
}

// Tailwind/CSS chip class for a category at a given rotation index.
// `active` fills the chip with its accent color.
export function getChipClass(index, active = false) {
  return `chip chip-${getColorForIndex(index)}${active ? " is-active" : ""}`
}
