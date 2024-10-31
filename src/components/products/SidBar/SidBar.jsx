import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FaCircle } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import { TiArrowForwardOutline } from "react-icons/ti";
import { GoHeart } from "react-icons/go";
import { SlBag } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { MdOutlineDownloadDone } from "react-icons/md";

function SidBar(props) {
  const {
    isOpen1,
    setIsOpen1,
    isOpen2,
    setIsOpen2,
    selectedProduct,
    selectedBy,
    setSelectedBy,
    setActiveStep,
    activeStep,
    steps,
    skipped,
    setSkipped,
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

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const totalSteps = steps ? steps.length : 3;

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
              <div className="relative flex items-center justify-around bottom-6 lg:bottom-14 z-40 lg:h-12 h-12 w-full gap-1 rounded-full bg-neutral-100/50 backdrop-blur-md">
                {activeStep === totalSteps ? (
                  <Box
                    sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                    className="pb-3"
                  >
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                ) : (
                  <>
                    <button
                      className="w-1/4 justify-items-center"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      <TiArrowBackOutline className="text-gray-500" />
                    </button>
                    <button className="w-1/4 justify-items-center">
                      <GoHeart className="text-gray-500" />
                    </button>
                    <button className="w-1/4 justify-items-center">
                      <SlBag className="text-gray-500" />
                    </button>
                    <button
                      className="w-1/4 justify-items-center"
                      onClick={handleNext}
                    >
                      {activeStep === totalSteps - 1 ? (
                        <MdOutlineDownloadDone className=" text-green-400" />
                      ) : (
                        <TiArrowForwardOutline className=" text-gray-500" />
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SidBar;
