export function isValidMonth(month: number) {
  return /^([1-9]|0[1-9]|1[012])$/gm.test(month.toString());
}
