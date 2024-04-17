import { useCallback, useRef, useState } from "react";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import Button from "./button";
import { Todo, addTodos } from "../store/slice/todo-sllice";

const AddTodo = () => {
   const [isAdd, setIsAdd] = useState<boolean | null>(null);
   const dispatch = useDispatch<AppDispatch>();
   const inputRef = useRef<HTMLInputElement>(null);

   const handleOnClick = () => {
      if (isAdd) return;
      setIsAdd(true);
   };
   const handleAddTodo = useCallback(() => {
      const text = inputRef.current?.value;

      if (text && text.trim() !== "") {
         const todo: Todo = {
            id: crypto.randomUUID().toString(),
            text,
            isCompleted: false,
         };
         dispatch(addTodos(todo));
         inputRef.current.value = "";
         setIsAdd(false);

         return;
      } else if (text && text?.trim() === "") {
         inputRef.current.focus();
         return;
      }
   }, []);

   return (
      <div
         className="flex justify-between px-4 py-3 gap-5 mt-2 bg-indigo-700 rounded cursor-pointer "
         onClick={handleOnClick}
      >
         <div className="flex items-center gap-2 flex-grow">
            {isAdd ? (
               <div className="flex w-full justify-between items-center">
                  <input
                     type="text"
                     className="flex-grow bg-transparent text-sm text-nowrap text-white px-2 py-1 focus:outline-none"
                     ref={inputRef}
                     autoFocus
                  />
                  <Button icon={MdAdd} onClick={handleAddTodo} />
               </div>
            ) : (
               <>
                  <div className="p-1">
                     <MdAdd className="size-6 text-white " />
                  </div>
                  <p className="text-lg font-medium text-white">Add Task</p>
               </>
            )}
         </div>
      </div>
   );
};

export default AddTodo;
