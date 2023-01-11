<template>
  <div>
    <h1>Hi</h1>
    count: {{ javidStore.count }}
    <router-link to="/about">go to about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useCounterStore } from '@/stores/counter'

export default {
  computed: {
    ...mapStores(useCounterStore)
  },
}
</script>

<style>

</style>