const useLocalStorage = (key: string) => {
   const getItem = () => {
      try {
         const value = window.localStorage.getItem(key);
         return value ? JSON.parse(value) : [];
      } catch (error) {
         console.log(error);
      }
   };
   const setItem = (value: unknown) => {
      try {
         window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
         console.log(error);
      }
   };
   return {
      getItem,
      setItem,
   };
};

export default useLocalStorage;
