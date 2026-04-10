export const getIconUrl = (iconName: string) => {
  return new URL(`./imgs/icons/${iconName}.png`, import.meta.url).href
}
