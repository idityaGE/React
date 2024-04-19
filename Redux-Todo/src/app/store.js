import { configureStore } from "@reduxjs/toolkit";
//first we need to import the configureStore function from the @reduxjs/toolkit package
import todoReducer from "../features/Todo/todoSlice";
//we need to import the todoReducer from the todoSlice file so that we can use it to create the Redux store in our application.



const store = configureStore({
    reducer: todoReducer
})
//we need to create the Redux store using the configureStore function and pass in the todo

export default store