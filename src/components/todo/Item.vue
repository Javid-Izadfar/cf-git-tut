<template>
    <li>
        <input type="checkbox" :value="false" disabled>
        <slot/>
        <button @click="$emit('delete')">Delete</button>
    </li>
</template>
<script>
export default {
    
}
</script>