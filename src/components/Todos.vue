<template>
    <div>
        <h3>Welcome My Todo App </h3>
        <div class="todos">
            <div class="todo" v-for="(todo, index) in allTodos" :key="index">
                {{todo.title}}
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Todos",
        computed: {
            ...mapState({
                allTodos: state => state.todos.todos
            })
        },
        created() {
            this.$store.dispatch('getTodos');
        }
    }
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .todo {
        border: 1px solid #cccccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }
</style>