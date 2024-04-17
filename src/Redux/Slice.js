import { createSlice } from '@reduxjs/toolkit';
const inicialState = {
  count: 0,
  todos: [],
};
export const todoSlice = createSlice({
  name: 'todo',
  inicialState,
  redusers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
