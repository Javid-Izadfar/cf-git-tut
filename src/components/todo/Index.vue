<template>
    <div>
        <h2>{{ title }}</h2>
        <ul>
            <TodoItem v-for="item in items"
                    :key="item.id"
                    class="todo-item"
                    @delete="$emit('delete', item.id)">
                {{ item.text }}
            </TodoItem>
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/todo/Item.vue';

export default {
    components: {
      TodoItem,
    },
    props: {
        title: {
            type: String,
            default: 'Unnamed Todo list'
        },
        items: {
            type: Array,
            default: []
        },
    },
}
</script>