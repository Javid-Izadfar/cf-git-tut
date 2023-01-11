import { defineStore } from 'pinia'

export const useCounterStore = defineStore('javid', {
  state: () => {
    return { count: 235 }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})