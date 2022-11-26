import "./SearchInput.scss";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="search">
      <input type={"text"} placeholder="Buscar películas" />
      <button type={"button"}>
        <FiSearch className="icon" size={24} />
      </button>
    </div>
  );
};

export default SearchInput;
