import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, time: number) => {
   const [debounceValue, setDebounceValue] = useState<T>(value);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setDebounceValue(value);
      }, time);
      return () => clearTimeout(timeout);
   }, [value, time]);

   return debounceValue;
};
