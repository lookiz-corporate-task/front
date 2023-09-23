export const generateInstagramRedirectUri = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  return `${baseUrl}/api/redirect`;
}
