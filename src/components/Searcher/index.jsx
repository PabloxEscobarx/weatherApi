import { useState } from "react";
import s from "./styles.module.css";
import searchIcon from "./img/icon.jpeg";

export const Searcher = ({ options, setCurrentCity }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = ({ target }) => {
    const text = target.value;
    setInputText(text);
    filterOptions(text);
    setShowDropdown(!!text);
  };

  const filterOptions = (text) => {
    const filtered = options.filter(({ name }) =>
      name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleSelect = (option) => {
    setInputText(option);
    setShowDropdown(false);
  };

  const currentCityFind = () => {
    const city = options.find(
      ({ name }) => name.toLowerCase() === inputText.toLowerCase()
    );
    setCurrentCity(city);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter a city near you"
          className={s.input}
        />
        <button className={s.searchButton} onClick={currentCityFind}>
          Search
        </button>
      </div>
      <div className={s.bottom}>
        {showDropdown && (
          <ul className={s.dropdownList}>
            {filteredOptions.map(({ name }, i) => (
              <li key={i} onClick={() => handleSelect(name)}>
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
