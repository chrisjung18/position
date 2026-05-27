import { supabase } from 'src/boot/supabase'
import { useUserStore } from 'stores/userStore'

export default async () => {
  const userStore = useUserStore()

  const { data } = await supabase.auth.getSession()

  if (data?.session?.user) {
    userStore.setCurrentUser(data.session.user)
  }

  supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
      userStore.setCurrentUser(session.user)
    } else {
      userStore.clearUser()
    }
  })

}
