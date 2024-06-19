import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./dropDowns.scss";
import { addFilter } from "../../../redux/filters-slice";

export interface GenresInfo {
  name: string;
  slug?: string;
}

interface DropdownProps {
  options: GenresInfo[];
  labelName: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, labelName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(labelName);
  const dispatch = useDispatch();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    setIsOpen(false);
    dispatch(addFilter({ label: labelName, value: option.slug, valueName: option.name}));
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▲</span>
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`dropdown-list-item ${selectedOption === option.name ? "selected" : ""}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
