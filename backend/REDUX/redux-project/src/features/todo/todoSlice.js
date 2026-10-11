import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,   
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export default todoSlice.reducer;