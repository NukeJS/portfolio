export const getMultipleRandomItems = <T>(arr: T[], num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())

  return shuffled.slice(0, num)
}
