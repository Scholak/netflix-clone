export const generateTeaser = (text: string, limit: number = 200) => {
  return text.length > limit ? text.substring(0, limit) + '...' : text
}