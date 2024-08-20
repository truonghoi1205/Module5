import { useState } from "react";
import SelectDropdown from "./SelectDropdown";

function SelectCar() {
  const carList = ["Mercedes", "Ferrari", "Lamboghini", "Toyota"];
  const colorList = ["white", "black", "red", "blue"];

  let [selectedCar, setSelectedCar] = useState(carList[0]);
  let [selectedColor, setSelectedColor] = useState(colorList[0]);

  return (
    <div>
      <div>
        <SelectDropdown
          label="Select a Color:"
          options={colorList}
          selectedValue={selectedColor}
          onChange={setSelectedColor}
        />
      </div>
      <div>
        <SelectDropdown
          label="Select a Car:"
          options={carList}
          selectedValue={selectedCar}
          onChange={setSelectedCar}
        />
      </div>
      <p>
        You selection a {selectedColor} - {selectedCar}
      </p>
    </div>
  );
}

export default SelectCar;
