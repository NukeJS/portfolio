export function calcYears(date1: Date, date2: Date): number {
  let diff = (date2.getTime() - date1.getTime()) / 1000;
  diff = diff / (60 * 60 * 24);
  return Math.abs(Math.round(diff / 365.25));
}
