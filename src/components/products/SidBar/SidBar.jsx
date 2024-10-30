import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FaCircle } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import { TiArrowForwardOutline } from "react-icons/ti";
import { GoHeart } from "react-icons/go";
import { SlBag } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

function SidBar(props) {
  const {
    isOpen1,
    setIsOpen1,
    isOpen2,
    setIsOpen2,
    selectedProduct,
    selectedBy,
  } = props;

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleCategorySelect = (category) => {
    setSelectedBy([category]);
  };
  return (
    <div className="sticky top-0 z-30">
      <div className="relative flex flex-col columns-1 px-6 py-1 rounded-2xl border bg-white mb-3 pt-4">
        {" "}
        <button
          type="button"
          className="flex w-full items-start pb-3 justify-between"
          aria-expanded={isOpen1}
          aria-haspopup="true"
          onClick={toggleDropdown1}
        >
          <h3 className="text-base outline-none ">Filter By Category</h3>
          <SlArrowDown />
        </button>
        {isOpen1 && (
          <div className="mt-0 w-full z-40">
            <ul className="py-2 divide-y divide-slate-700 ">
              <li className="py-2">
                <label className="items-start">
                  <Checkbox
                    checked={selectedBy.includes("1")}
                    onChange={() => handleCategorySelect("1")}
                    icon={<FaCircle className="text-[#D9D9D9]" />}
                    checkedIcon={<FaCircle style={{ color: "#584BA5" }} />}
                  />
                  <span className="">Tanzanite</span>
                </label>
              </li>
              <li className="py-2">
                <label className="items-start">
                  <Checkbox
                    checked={selectedBy.includes("Diamond")}
                    onChange={() => handleCategorySelect("Diamond")}
                    icon={<FaCircle className="text-[#D9D9D9]" />}
                    checkedIcon={<FaCircle style={{ color: "#584BA5" }} />}
                  />
                  <span className="">Diamond</span>
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="relative flex flex-col columns-1 px-1 sm:px-1 lg:px-6 py-1 rounded-2xl border bg-white mb-3 pt-4">
        <button
          type="button"
          className="flex mb-2 w-full items-end justify-end"
          aria-expanded={isOpen2}
          aria-haspopup="true"
          onClick={toggleDropdown2}
        >
          {" "}
          <SlArrowDown className="text-end" />
        </button>
        {isOpen2 && (
          <div className="relative min-h-32  z-20">
            <ul className="px-4">
              {selectedProduct && (
                <li>
                  <div className="h-auto overflow-hidden relative">
                    <div>
                      <img
                        alt="content"
                        className="object-fill object-center h-full w-full"
                        src={selectedProduct.images[0]}
                      />
                    </div>
                  </div>
                </li>
              )}
            </ul>
            <div className="flex pt-11">
              <div className="relative  flex items-center justify-around bottom-6 lg:bottom-14  z-40 lg:h-[%40] h-12  w-full gap-1 rounded-full bg-neutral-100/50 backdrop-blur-md ">
                <TiArrowBackOutline className="w-1/4 text-gray-500" />{" "}
                <GoHeart className="w-1/4 text-gray-500" />
                <SlBag className="w-1/4 text-gray-500" />
                <TiArrowForwardOutline className="w-1/4 text-gray-500" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SidBar;
