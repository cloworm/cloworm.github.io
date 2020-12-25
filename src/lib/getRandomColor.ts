export default function getRandomColor(): string {
  const red = (Math.round(Math.random() * 127) + 127).toString(16)
  const green = (Math.round(Math.random() * 127) + 127).toString(16)
  const blue = (Math.round(Math.random() * 127) + 127).toString(16)
  return '#' + red + green + blue
}
