import { BiSearch } from "react-icons/bi";

const Search = ({ onChange }: { onChange: (value: string) => void }) => {
   return (
      <div className="rounded bg-gray-800 relative w-1/8">
         <BiSearch className="size-5 absolute top-1/2 left-3 -translate-y-1/2 text-white" />
         <input
            type="text"
            placeholder="search here..."
            className="bg-transparent pl-10 pr-2 py-2 w-full text-white"
            onChange={e => onChange(e.target.value)}
            // defaultValue={query}
         />
      </div>
   );
};

export default Search;
