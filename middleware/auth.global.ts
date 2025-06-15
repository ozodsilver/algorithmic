export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token')
  const isAuthRoute = to.path.startsWith('/auth/')

  if (!token.value && !isAuthRoute) {
    return navigateTo('/auth/sign-in', { replace: true })
  }

})