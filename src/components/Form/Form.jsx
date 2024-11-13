import React from "react";
import { IoIosSearch } from "react-icons/io";

function Form(props) {
  const { setUserInput } = props;

  function onChangeHandler(event) {
    setUserInput(event.target.value);
  }
  return (
    <div className="flex w-[90%] flex-col  justify-around mr-5">
      <label
        className=" bg-white h-10 pr-14 flex flex-row  border py-1 px-1 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <div className="flex items-center justify-center ">
          <IoIosSearch className="h-6 w-6 ml-3 text-purple-600" />
        </div>
        <input
          id="search-bar"
          className="px-6 w-full rounded-md flex-1 outline-none bg-white"
          onChange={onChangeHandler}
        />
      </label>
    </div>
  );
}

export default Form;
