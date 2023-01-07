<template>
    <div>
        <input type="text" v-model="todoText">
        <button @click="addToList">Add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: ''
        }
    },
    methods: {
        addToList() {
            this.$emit('add', this.todoText);
            this.todoText = ''
        }
    }
}
</script>