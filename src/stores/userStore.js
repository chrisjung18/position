import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { supabase } from "boot/supabase.js";

export const useUserStore = defineStore('user-store', () => {
  // State
  const currentUser = ref(null)

  const isAuthModal = ref(false)

  // Getters
  const isConnected = computed(() => {
    return currentUser.value?.id ? true : false
  })

  // Actions
  const setCurrentUser = user => {
    currentUser.value = user
  }
  const setConnected = value => {
    isConnected.value = value
  }
  const setAuthModal = value => {
    isAuthModal.value = value
  }

  const clearUser = value => {
    currentUser.value = null
    window.localStorage.clear();
  }

  return {
    // State
    currentUser,
    isConnected,
    isAuthModal,

    // Getters

    // Actions
    setCurrentUser,
    setConnected,
    setAuthModal,
    clearUser
  }
})
