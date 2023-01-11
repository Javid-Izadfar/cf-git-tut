<template>
  <div>
    <router-link :to="{
      name: 'home',
      query: {
        name: 'foo',
        value: 'bar'
      }
    }">go Home</router-link>
    <h1>This is an about page</h1>
    <div>
      <button @click="increment"
              class="bg-green-500 px-2 py-1 rounded-md hover:bg-green-700">increment</button>
    </div>
  </div>
</template>

<script>
import { mapStores, mapActions } from 'pinia';
import { useCounterStore } from '@/stores/counter'

export default {
  computed: {
    ...mapStores(useCounterStore)
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
}
</script>

<style>
</style>
