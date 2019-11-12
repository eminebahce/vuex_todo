<template>
    <div>
        <h3>Welcome My Todo App </h3>
        <div class="legend">
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"> = Incomplete</span>
            </span>
            <span>
                <span class="complete-box"> = Complete</span>
            </span>
        </div>
        <div class="todos">
            <div
                    class="todo"
                    v-for="(todo, index) in allTodos"
                    :key="index"
                    @dblclick="onDblClick(todo)"
                    :class="{'is-complete':todo.completed}"
            >
                {{todo.title}}
                <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Todos",
        methods: {
            deleteTodo(todoId) {
                return this.$store.dispatch('deleteTodo', todoId);
            },
            onDblClick(todo) {
                const updatedTodo = {
                    id: todo.id,
                    title: todo.title,
                    completed: !todo.completed
                }
                return this.$store.dispatch('updateTodo', updatedTodo)
            }
        },
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
    i {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #ffffff;
        cursor: pointer;
    }
    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }
    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }
    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }
    .is-complete {
        background: #35495e;
        color: #ffffff;
    }
    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }
</style>