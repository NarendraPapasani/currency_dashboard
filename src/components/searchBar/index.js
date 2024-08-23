import { IoIosSearch } from "react-icons/io";
import { RiNotificationLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center bg-[#FCFCFD] border-2 p-4">
      <h1 className="text-[18px] font-semibold">Dashboard</h1>
      <div className="flex justify-center items-center">
        <div className="search-cont flex justify-center items-center border-2 rounded-md">
          <IoIosSearch className="w-6 h-6 ml-2" />
          <input
            type="text"
            placeholder="Search..."
            className="p-3 outline-none"
          />
        </div>
        <RiNotificationLine className="w-6 h-6 ml-5" />
      </div>
    </div>
  );
};
export default SearchBar;
