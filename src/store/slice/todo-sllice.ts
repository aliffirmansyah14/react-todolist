import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/use-localStorage";
const { getItem } = useLocalStorage("todo-apps");

export type Todo = {
   id: string;
   text: string;
   isCompleted: boolean;
};
interface Todos {
   todos: Todo[];
}

const initialState: Todos = {
   todos: getItem() as Todo[],
};

const todoSlice = createSlice({
   name: "todos",
   initialState,
   reducers: {
      addTodos: (state, action: PayloadAction<Todo>) => {
         state.todos.push(action.payload);
      },
      deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
         const newTodos = state.todos.filter(
            (todo: Todo) => todo.id !== action.payload.id
         );
         state.todos = newTodos;
      },
      editTodo: (
         state,
         action: PayloadAction<{ id: string; text: string }>
      ) => {
         const existingTodo = state.todos.find(
            todo => todo.id === action.payload.id
         );
         if (existingTodo) {
            existingTodo.text = action.payload.text;
         }
      },
      completedTodo: (state, action: PayloadAction<{ id: string }>) => {
         const newTodos = state.todos.map(todo => {
            if (todo.id === action.payload.id) {
               return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
               };
            }
            return todo;
         });
         state.todos = newTodos;
      },
   },
});

export const { addTodos, deleteTodo, completedTodo, editTodo } =
   todoSlice.actions;

export default todoSlice.reducer;
