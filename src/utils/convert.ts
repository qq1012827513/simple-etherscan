export function shortAddress(address: string, num: number) {
  const reg = new RegExp(`^(.{${num}}).*(.{${num}})`)
  return address ? address.replace(reg, '$1...$2') : address
}