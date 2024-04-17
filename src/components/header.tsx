import Search from "./search";

const Header = ({
   handleSearch,
}: {
   handleSearch: (value: string) => void;
}) => {
   return (
      <header className="max-w-6xl  mx-auto px-4 pt-10 flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center">
         <h1 className="text-white text-3xl font-medium">Todo List</h1>
         <Search onChange={handleSearch} />
      </header>
   );
};

export default Header;
