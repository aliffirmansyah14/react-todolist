import { useDispatch } from "react-redux";
import {
   Todo as TTodo,
   completedTodo,
   deleteTodo,
   editTodo,
} from "../store/slice/todo-sllice";
import { AppDispatch } from "../store/store";
import { MdDelete, MdEdit, MdSave } from "react-icons/md";
import { useRef, useState } from "react";
import Button from "./button";
import { clsx } from "clsx";

const Todo = ({ todo }: { todo: TTodo }) => {
   const [isEdited, setEdited] = useState<boolean>(false);
   const [text, setText] = useState<string>(todo.text);
   const dispatch = useDispatch<AppDispatch>();
   const inputRef = useRef<HTMLInputElement>(null);

   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const type = e.target.value;
      if (type.trim() !== "") {
         setText(type);
         return;
      }
   };

   const handleEdit = (id: string) => {
      if (text && text.trim() !== "") {
         dispatch(editTodo({ id, text }));
         return;
      }
      setText(todo.text);
      return;
   };

   const handleDelete = (id: string) => {
      dispatch(deleteTodo({ id }));
   };

   return (
      <div className="flex justify-between px-4 py-3 gap-5 bg-indigo-500 rounded">
         <div className="flex items-center gap-2 flex-grow">
            <input
               type="checkbox"
               name={`${todo}-id}`}
               className="size-4"
               checked={todo.isCompleted}
               onChange={() => dispatch(completedTodo({ id: todo.id }))}
            />
            <input
               type="text"
               className={clsx(
                  "flex-grow bg-transparent text-sm text-nowrap text-white px-2 py-1 focus:outline-none",
                  {
                     "line-through": todo.isCompleted,
                  }
               )}
               defaultValue={text}
               disabled={!isEdited}
               onChange={e => handleOnChange(e)}
               ref={inputRef}
            />
         </div>
         <div>
            {isEdited ? (
               <Button
                  icon={MdSave}
                  onClick={() => {
                     setEdited(false);
                     handleEdit(todo.id);
                  }}
               />
            ) : (
               <Button
                  icon={MdEdit}
                  onClick={() => {
                     setEdited(true);
                     inputRef.current?.focus();
                  }}
               />
            )}

            <Button
               icon={MdDelete}
               onClick={() => {
                  handleDelete(todo.id);
               }}
            />
         </div>
      </div>
   );
};

export default Todo;
