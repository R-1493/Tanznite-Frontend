import { React, useState } from "react";
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
import { VscDebugRestart } from "react-icons/vsc";

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
    handleNext,
    setSelectedProduct,
  } = props;
  const [showReset, setShowReset] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

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

  console.log(selectedProduct);
  const totalSteps = steps ? steps.length : 4;

  const handleComplete = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setShowReset(true);
    setIsComplete(true);
  };
  const handleReset = () => {
    setSelectedProduct({
      gemstones: [],
      shapes: [],
      jewelry: [],
    });
    setActiveStep(-1);
    setShowReset(false);
    setIsComplete(false);
  };

  const determineArrowColor = () => {
    if (activeStep === 0 && selectedProduct.gemstones.length <= 0) {
      return "text-gray-300";
    }
    if (activeStep === 1 && selectedProduct.shapes.length <= 0) {
      return "text-gray-300";
    }
    if (activeStep === 2 && selectedProduct.jewelry.length <= 0) {
      return "text-gray-300";
    }
    return "text-gray-500";
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
                      {activeStep === 0 &&
                        (selectedProduct.gemstones[0] ? (
                          <img
                            className="object-fill object-center h-full w-full"
                            src={selectedProduct.gemstones[0].gemstoneImage}
                          />
                        ) : (
                          <h5 className="flex relative text-center mt-0 mb-5">
                            Please select a Gemstones
                          </h5>
                        ))}
                      {activeStep === 1 &&
                        (selectedProduct.shapes[0] ? (
                          <img
                            className="object-fill object-center h-full w-full"
                            src={selectedProduct.shapes[0].gemstoneImage}
                          />
                        ) : (
                          <h5 className="flex relative text-center mt-0 mb-5">
                            Please select a shape
                          </h5>
                        ))}
                      {activeStep === 2 &&
                        (selectedProduct.jewelry[0] ? (
                          <img
                            className="object-fill object-center h-full w-full"
                            src={selectedProduct.jewelry[0].jewelryImage}
                          />
                        ) : (
                          <p>Please select a shape</p>
                        ))}
                    </div>
                  </div>
                </li>
              )}
            </ul>
            <div className="flex pt-11">
              <div className="relative flex items-center justify-around bottom-6 lg:bottom-14 z-40 lg:h-12 h-12 w-full gap-1 rounded-full bg-neutral-100/50 backdrop-blur-md">
                <>
                  {activeStep === 0 ? (
                    <button
                      className="w-1/4 justify-items-center"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      <TiArrowBackOutline className="text-gray-300" />
                    </button>
                  ) : (
                    <button onClick={handleBack}>
                      <TiArrowBackOutline className="text-gray-500" />
                    </button>
                  )}

                  {isComplete ? (
                    <>
                      <button className="w-1/4 justify-items-center">
                        <GoHeart className="text-gray-500" />
                      </button>
                      <button className="w-1/4 justify-items-center">
                        <SlBag className="text-gray-500" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="w-1/4 justify-items-center">
                        <GoHeart className="text-gray-300" />
                      </button>
                      <button className="w-1/4 justify-items-center">
                        <SlBag className="text-gray-300" />
                      </button>
                    </>
                  )}

                  <button
                    className="w-1/4 justify-items-center"
                    onClick={handleNext}
                  >
                    {!isComplete &&
                    activeStep === totalSteps - 2 &&
                    selectedProduct.jewelry[0] ? (
                      <MdOutlineDownloadDone
                        className=" text-green-400"
                        onClick={handleComplete}
                      />
                    ) : (
                      !showReset && (
                        <TiArrowForwardOutline
                          className={determineArrowColor()}
                        />
                      )
                    )}
                    {isComplete && showReset && (
                      <VscDebugRestart
                        onClick={handleReset}
                        className="text-blue-500"
                      />
                    )}
                  </button>
                </>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SidBar;
