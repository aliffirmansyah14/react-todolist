import Header from "./components/header";
import TodoList from "./components/todo-list";
import AddTodo from "./components/add-todo";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/use-debounce";

export default function App() {
   const [_, setSearchParams] = useSearchParams();
   const [query, setQuery] = useState<string>("");
   const debounceSearch = useDebounce(query, 500);
   const handleSearch = (value: string) => {
      setQuery(value.toLowerCase());
   };
   useEffect(() => {
      if (debounceSearch === "") {
         setSearchParams({});
         return;
      }
      setSearchParams({ q: debounceSearch });
   }, [debounceSearch]);

   return (
      <div className="min-h-[100dvh] bg-black">
         <Header handleSearch={handleSearch} />
         <main className="max-w-6xl mx-auto px-4 pt-8 relative">
            <section className="relative">
               <TodoList search={debounceSearch} />
            </section>
            <AddTodo />
         </main>
      </div>
   );
}
