<template>
  <div>
    <h1>Hi, Welcome to my todo list</h1>
    <TodoForm @add="addItemToList"/>
    <TodoList class="todo"
          title="My Todo List"
          :items="todos"
          @delete="deleteItemFromList"/>
  </div>
</template>

<script>
  import TodoForm from '@/components/todo/Form.vue';
  import TodoList from '@/components/todo/Index.vue';

  export default {
    components: {
      TodoForm,
      TodoList,
    },
    data() {
      return {
        todos: []
      }
    },
    methods: {
      addItemToList(text) {
        this.todos.push({
          id: Math.floor(Math.random() * 10000),
          text: text,
        })
      },
      deleteItemFromList(id) {
        const index = this.todos.findIndex(item => item.id === id)
        this.todos.splice(index, 1)
      },
    }
  }
</script>

<style>

</style>