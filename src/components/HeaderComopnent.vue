<template>
  <q-header elevated class="q-px-md flex flex-center justify-between">
    <span class="text-white text-bold">{{ userStore.currentUser?.email }}</span>
    <q-btn dense flat icon="eva-log-out" @click.stop="logout" />
  </q-header>
</template>

<script setup>
import { useUserStore } from 'src/stores/userStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const router = useRouter()

const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error.message)
    return
  }

  userStore.clearUser?.() // if you have it
  router.push({ name: 'login' })
}
</script>
