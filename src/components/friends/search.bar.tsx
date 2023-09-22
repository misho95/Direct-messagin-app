import searchIcon from "../../assets/images/bx_search.png";

const SearchBar = () => {
  return (
    <div className="bg-white w-full h-h79 rounded-lg relative border-2 border-neutral-300">
      <button className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
        <img src={searchIcon} />
      </button>
      <input
        type="text"
        className="bg-transparent w-full h-full text-2xl pl-14 p-3 focus:outline-none absolute top-0"
        placeholder="search"
      />
    </div>
  );
};

export default SearchBar;
