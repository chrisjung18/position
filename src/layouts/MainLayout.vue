<template>
  <q-layout view="lHh Lpr lFf">
    <Header />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useUserStore } from 'src/stores/userStore'
import { useRouter } from 'vue-router';
import Header from 'src/components/HeaderComopnent.vue';

const userStore = useUserStore()
const router = useRouter()

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

</script>

<style lang="scss" scoped>
.q-page-container{

}
</style>
