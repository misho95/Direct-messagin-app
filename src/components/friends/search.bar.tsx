import searchIcon from "../../assets/images/bx_search.png";

const SearchBar = () => {
  return (
    <div className="bg-white w-full h-12 sm:h-h79 rounded-lg relative border-2 border-neutral-300">
      <button className="absolute w-8 h-8 sm:w-fit sm:h-fit left-2 top-1/2 -translate-y-1/2 z-10">
        <img src={searchIcon} />
      </button>
      <input
        type="text"
        className="bg-transparent w-full h-full text-xl sm:text-2xl pl-14 p-3 focus:outline-none absolute top-0"
        placeholder="search"
      />
    </div>
  );
};

export default SearchBar;
