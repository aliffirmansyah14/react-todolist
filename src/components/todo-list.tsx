import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Todo from "./todo";
import { useEffect } from "react";
import useLocalStorage from "../hooks/use-localStorage";

const TodoList = ({ search }: { search: string }) => {
   const todos = useSelector((state: RootState) => state.todos.todos);
   const filteredTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(search)
   );
   useEffect(() => {
      const { setItem } = useLocalStorage("todo-apps");
      setItem(todos);
   }, [todos]);

   return (
      <div className="space-y-3 animate-show-up h-[65dvh] overflow-y-auto scrollbar-thin scrollbar-track-transparent  scrollbar-thumb-gray-700 scrollbar-corner-transparent">
         {filteredTodos.map(todo => (
            <Todo key={todo.id} todo={todo} />
         ))}
      </div>
   );
};

export default TodoList;
