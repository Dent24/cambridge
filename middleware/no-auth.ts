export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()

  if (userStore.isLogin && (to.path == '/login' || to.path == '/register')) {
    return navigateTo('/home')
  }
})