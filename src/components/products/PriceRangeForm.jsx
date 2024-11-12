import React from "react";
import TextField from "@mui/material/TextField";
function PriceRangeForm(props) {
  const { setMinPrice, setMaxPrice, minPrice, maxPrice } = props;

  function onChangeHandler(event) {
    const value = Number(event.target.value);
    setMaxPrice(value);
    setMinPrice(0);
  }

  return (
    <div className="flex flex-col w-[90%] justify-around ml-5 mr-3 ">
      <label
        htmlFor="price-range"
        className="block text-gray-700 font-bold mb-2"
      >
        Price Range
      </label>
      <input
        type="range"
        id="price-range"
        className="w-full  accent-[#6F64B1]"
        min="0"
        max="100000"
        value={maxPrice}
        onChange={onChangeHandler}
      />

      <div className="flex justify-between text-gray-500">
        <span id="minPrice">${minPrice}</span>
        <span id="maxPrice">${maxPrice}</span>
      </div>
    </div>
  );
}
export default PriceRangeForm;
