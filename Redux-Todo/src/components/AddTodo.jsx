import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";




function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();// Get dispatch function from useDispatch hook

    const addTodoHandler = (e) => {
        e.preventDefault();
        // Prevent form submission
        dispatch(addTodo({
            id: nanoid(),
            title: input,
            completed: false
        }))// Dispatch action to add todo
        setInput("");
        // Clear input field
    }

    // console.log(input)

    return (
        <form
            onSubmit={addTodoHandler}
            className="flex">
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default AddTodo;


