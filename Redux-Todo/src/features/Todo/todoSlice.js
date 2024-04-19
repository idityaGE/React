import { createSlice, nanoid } from "@reduxjs/toolkit";
//first we need to import the configureStore function from the @reduxjs/toolkit package
//nanoid is a small, secure, URL-friendly unique string ID generator for JavaScript

const initialState = {
    todos: [{
        id: nanoid(),
        title: "sample todo 1",
        completed: false
    }]
}
//initialState is an object that contains the initial state of the application or data that we want to store in the Redux store. In this case, we have a todos array that contains a single todo object with an id, title, and completed property.

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.unshift(action.payload)
        },
        remTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title }
                }
                return todo
            })
        },
        toggleCompleted: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        }
    }
})
//todoSlice is a slice that contains the name of the slice, the initial state, and a set of reducers. The reducers are functions that take the current state and an action, and return a new state. In this case, we have two reducers: addTodo and toggleComplete.
//state is the current state of the slice, and action is an object that contains a type and a payload. The type is a string that describes the action, and the payload is the data that is used to update the state.

export const { addTodo, remTodo, updateTodo, toggleCompleted } = todoSlice.actions
//we need to export the action creators so that we can use them individually to dispatch actions in our components.

export default todoSlice.reducer
//we need to export the reducer so that we can use it to create the Redux store in our application.