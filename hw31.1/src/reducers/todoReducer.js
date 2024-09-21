// reducers/todoReducer.js

const initialState = {
   todos: [],
 };
 
 const todoReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'LOAD_TODOS_SUCCESS':
       return { ...state, todos: action.payload };
     case 'ADD_TODO_SUCCESS':
       return { ...state, todos: [...state.todos, action.payload] };
     case 'DELETE_TODO_SUCCESS':
       return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
     case 'TOGGLE_TODO_SUCCESS':
       return {
         ...state,
         todos: state.todos.map(todo =>
           todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
         ),
       };
     case 'EDIT_TODO_SUCCESS':
       return {
         ...state,
         todos: state.todos.map(todo =>
           todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
         ),
       };
     case 'CLEAR_TODOS_SUCCESS':
       return { ...state, todos: [] };
     default:
       return state;
   }
 };
 
 export default todoReducer;
 