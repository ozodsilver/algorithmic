export function useAuth() {
  const token = useCookie('token')
  const refreshToken = useCookie('refreshToken')

  const logout = () => {
    token.value = null
    refreshToken.value = null
    window.location.href = '/auth/sign-in'
  }

  return { logout }
}
