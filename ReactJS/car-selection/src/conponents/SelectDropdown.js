import React from "react";

const SelectDropdown = ({ label, options, selectedValue, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={selectedValue} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
