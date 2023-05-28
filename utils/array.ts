export const getMultipleRandomItems = <T>(arr: T[], num: number) =>
  [...arr].sort(() => 0.5 - Math.random()).slice(0, num);
