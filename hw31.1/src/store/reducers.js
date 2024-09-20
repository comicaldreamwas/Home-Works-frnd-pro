import {
   ADD_TODO,
   DELETE_TODO,
   MARK_COMPLETE,
   EDIT_TODO,
   CLEAR_TODOS,
   SET_TODOS,
 } from './actions';
 
 const initialState = {
   todos: [],
 };
 
 export const rootReducer = (state = initialState, action) => {
   switch (action.type) {
     case SET_TODOS:
       return {
         ...state,
         todos: action.todos,
       };
     case ADD_TODO:
       return {
         ...state,
         todos: [...state.todos, { id: Date.now(), task: action.task, completed: false }],
       };
     case DELETE_TODO:
       return {
         ...state,
         todos: state.todos.filter((todo) => todo.id !== action.id),
       };
     case MARK_COMPLETE:
       return {
         ...state,
         todos: state.todos.map((todo) =>
           todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
         ),
       };
     case EDIT_TODO:
       return {
         ...state,
         todos: state.todos.map((todo) =>
           todo.id === action.id ? { ...todo, task: action.task } : todo
         ),
       };
     case CLEAR_TODOS:
       return {
         ...state,
         todos: [],
       };
     default:
       return state;
   }
 };
 