import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    //allTodos: state => state.todos
};

const actions = {
    getTodos({commit}) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => commit('loadTodos', response.data))
            .catch(error =>
                /*eslint-disable*/
                console.log(error)
            )
    },
    createTodo({commit}, {title, completed}) {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed
        })
            .then(response => commit('newTodo', response.data))
            .catch(error =>
                /*eslint-disable*/
                console.log(error)
            )
    },
    deleteTodo({commit}, todoId) {
        axios.delete( `https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => commit('deleteTodo', todoId))
            .catch(error =>
                /*eslint-disable*/
                console.log(error)
            )
    },
    filterTodos({commit}, filterNumber) {
        axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${filterNumber}`)
            .then(response => commit('filterTodos', response.data))
            .catch(error =>
                /*eslint-disable*/
                console.log(error)
            )
    },
    updateTodo({commit}, updatedTodo) {
        axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)
            .then(response => commit('updatedTodo', response.data))
            .catch(error =>
                /*eslint-disable*/
                console.log(error)
            )
    }
};

const mutations = {
    loadTodos(state, responseTodos) {
        state.todos = responseTodos;
    },
    newTodo(state, responseNewTodo) {
        state.todos.unshift(responseNewTodo);
    },
    deleteTodo(state, todoId) {
        state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    filterTodos(state, filteredTodos) {
        state.todos = filteredTodos
    },
    updatedTodo(state, updatedTodo) {
        const index = state.todos.findIndex(todo => todo.id == updatedTodo.id);
        if(index !== -1) {
            state.todos.splice(index, 1, updatedTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
