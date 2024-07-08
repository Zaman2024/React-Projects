import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {id: nanoid(), text: 'Hellow World'},
    {id: nanoid(), text: 'Welcome to React'}
  ],
  toggleForm: true,
  updateTodo: {},
};

export const TodoSlice = createSlice ({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid (),
        text: action.payload
      }
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter (todo => {
        return todo.id !== action.payload;
      });
    },

    clearTodo: (state) => {
      state.todos = [];
    },

    toggleInputForm : (state, action) =>{
      state.toggleForm = !state.toggleForm;
      state.updateTodo = {...state.updateTodo, ...action.payload}
    },

    todoUpdated : (state, action) =>{
      state.todos = state.todos.map((todo) => todo.id === action.payload.id)
    }

  },
});

export const {addTodo, removeTodo, clearTodo, toggleInputForm, todoUpdated} = TodoSlice.actions;
export const todoReducer = TodoSlice.reducer;

