
<template>
  <div>
    in home
    <button @click="getFood" class="bg-red-400 px-2 py-1 rounded-sm hover:bg-red-600">
      Get Food
    </button>
    <br>
    is loading: {{ loading }}
    <br>
    <div v-if="food">
      {{ food.strMeal }}
      <img :src="food.strMealThumb" alt="" width="500">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      food: null
    }
  },
  methods: {
    getFood() {
      this.loading = true;
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.text())
        .then(res => JSON.parse(res))
        .then(res => {
          this.loading = false;
          this.food = res.meals[0]
        })

      // Create (post)
      // Read (get)
      // U pdate
      // D elete

      // axios.post()
      // fetch('url', {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authentication': 'Bearer ${token}'
      //   },
      //   method: 'GET'
      // })

      // axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      //   .then(res => {
      //     this.food = res.data.meals[0]
      //   }).catch((err) => {
      //     console.log(err)
      //   }).finally(() => {
      //     this.loading = false;
      //   })
    }
  }
}
</script>