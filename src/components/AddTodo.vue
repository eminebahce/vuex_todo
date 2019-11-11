<template>
    <div>
        <h3>Add Todo</h3>
        <div class="add">
            <form @submit="AddTodo">
                <input type="text" v-model.lazy="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data(){
            return {
                title: ''
            }
        },
        methods: {
            AddTodo(event) {
                event.preventDefault();
                if(this.title !== '') {
                    return this.$store.dispatch('createTodo', {
                        title: this.title,
                        completed: false
                    })
                }
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }
    input[type="text"] {
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }
    input[type="submit"] {
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px solid #41b883;
        cursor: pointer;
    }
</style>