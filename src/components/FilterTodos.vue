<template>
    <div>
        Filter Todos:
        <select @change="filterTodos($event.target.value)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "FilterTodos",
        methods: {
            filterTodos(filterNumber) {
                return this.$store.dispatch('filterTodos', filterNumber)
            }

        }
    }
</script>

<style scoped>
    select {
        margin-top: 20px;
        padding: 6px;
        border: 1px solid #41b883;
    }

</style>