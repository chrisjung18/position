import { defineStore } from 'pinia';

export const useUiStore = defineStore('uiStore', {
  state: () => ({
    isLoading: false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setLoading(value){
      this.isLoading = value
    }
  },
});
