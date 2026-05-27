<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-px-md flex flex-center justify-between">
      <span class="text-white text-bold">{{ userStore.currentUser?.email }}</span>
      <q-btn dense flat icon="eva-log-out" @click.stop="logout" />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { supabase } from 'src/boot/supabase'
import { useUserStore } from 'src/stores/userStore'
import { useRedirect } from 'src/composables/useRedirect';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const router = useRouter()
const { redirect } = useRedirect()

watch(
  () => userStore.isConnected,
  (connected) => {
    if (
      !connected &&
      router.currentRoute.value.meta?.requireAuth === true
    ) {
      router.replace({ name: 'login' })
    }
  },
  { immediate: true }
)

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

<style lang="scss" scoped>
.q-page-container{

}
</style>
