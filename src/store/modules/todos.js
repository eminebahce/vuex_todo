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
            .then(response => {
                // /*eslint-disable*/
                // console.log(response.data)
                commit('loadTodos', response.data)
            })
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
    }
};

const mutations = {
    loadTodos(state, responseTodos) {
        state.todos = responseTodos;
    },
    newTodo(state, responseNewTodo) {
        state.todos.unshift(responseNewTodo);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
