<template>
  <q-layout class="auth_layout">

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.auth_layout{
  background-color: var(--q-dark-page);
  background-image: radial-gradient(
    circle at 85% 15%,
    color-mix(in srgb, var(--q-primary) 35%, transparent) 0%,
    var(--q-dark-page) 70%
  );
}
</style>
