import { useRouter } from 'vue-router'

export function useRedirect() {
  const router = useRouter()

  const redirect = (name, params = {}, force = false) => {
    const currentName = router.currentRoute.value.name

    if (force || currentName !== name) {
      return router.push({ name, params }).catch((e) => {
        console.log("Redirect catch: ", e)
      })
    }
  }

  return {
    redirect
  }
}