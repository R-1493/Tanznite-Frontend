import { React, useState, useEffect } from "react";
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
import { FaRegHeart } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import axios from "axios";
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
    storedWishList,
    setStoredWishList,
    storedCart,
    setStoredCart,
    data,
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

  const addToFav = (product) => {
    if (isInWishlist(product)) {
      setStoredWishList(
        storedWishList.filter((wishlistItem) => {
          const isSameJewelry =
            wishlistItem.jewelry[0].jewelryId === product.jewelry[0].jewelryId;
          const isSameGemstone =
            wishlistItem.gemstones[0].gemstoneId ===
            product.gemstones[0].gemstoneId;
          const isSameShape =
            wishlistItem.shapes[0].gemstoneShapeId ===
            product.shapes[0].gemstoneShapeId;

          return !(isSameJewelry && isSameGemstone && isSameShape);
        })
      );
    } else {
      setStoredWishList([...storedWishList, product]);
    }
  };
  const isInWishlist = (product) => {
    return storedWishList.some((wishlistItem) => {
      const isSameJewelry =
        wishlistItem.jewelry[0].jewelryId === product.jewelry[0].jewelryId;
      const isSameGemstone =
        wishlistItem.gemstones[0].gemstoneId ===
        product.gemstones[0].gemstoneId;
      const isSameShape =
        wishlistItem.shapes[0].gemstoneShapeId ===
        product.shapes[0].gemstoneShapeId;

      return isSameJewelry && isSameGemstone && isSameShape;
    });
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
  const addToCart = (product) => {
    const existingProductIndex = storedCart.findIndex((cartItem) => {
      const isSameJewelry =
        cartItem.jewelry[0].jewelryId === product.jewelry[0].jewelryId;
      const isSameGemstone =
        cartItem.gemstones[0].gemstoneId === product.gemstones[0].gemstoneId;
      const isSameShape =
        cartItem.shapes[0].gemstoneShapeId ===
        product.shapes[0].gemstoneShapeId;

      return isSameJewelry && isSameGemstone && isSameShape;
    });

    if (existingProductIndex > -1) {
      const updatedCart = [...storedCart];
      updatedCart[existingProductIndex].quantity += 1;
      setStoredCart(updatedCart);
    } else {
      setStoredCart([...storedCart, { ...product, quantity: 1 }]);
    }
  };
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  function fetchData() {
    let url = "http://localhost:5125/api/v1/Categories";
    axios
      .get(url)
      .then((res) => {
        setCategories(res.data);
      })
      .catch(error);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sticky top-0 z-30">
      <div className="relative flex flex-col columns-1 px-6 py-1 rounded-2xl border bg-white mb-3 pt-4">
        {activeStep === 0 && (
          <div>
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
                  {categories && categories.length > 0 ? (
                    categories.map((category, index) => (
                      <li key={category.categoryId} className="py-2">
                        <label className="items-start">
                          <Checkbox
                            checked={
                              selectedBy.includes(category.categoryId) ||
                              (index === 0 && selectedBy.length === 0)
                            }
                            onChange={() => {
                              handleCategorySelect(category.categoryId);
                              if (index === 0 && selectedBy.length === 0) {
                                setSelectedBy([category.categoryId]);
                              }
                            }}
                            icon={<FaCircle className="text-[#D9D9D9]" />}
                            checkedIcon={
                              <FaCircle style={{ color: "#584BA5" }} />
                            }
                          />
                          <span className="">{category.categoryName}</span>
                        </label>
                      </li>
                    ))
                  ) : (
                    <p>There are no categories available.</p>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}
        {activeStep === 1 && (
          <div>
            {" "}
            <button
              type="button"
              className="flex w-full items-start pb-3 justify-between"
              aria-expanded={isOpen1}
              aria-haspopup="true"
              onClick={toggleDropdown1}
            >
              <h3 className="text-base outline-none ">Filter By Shape</h3>
              <SlArrowDown />
            </button>
            {isOpen1 && (
              <div className="mt-0 w-full z-40">
                <ul className="py-2 divide-y divide-slate-700 ">
                  {data?.gemstonesShape && data?.gemstonesShape.length > 0 ? (
                    Array.from(
                      new Set(data.gemstonesShape.map((item) => item.shapeName))
                    ).map((shapeName, index) => {
                      const shapeData = data.gemstonesShape.find(
                        (item) => item.shapeName === shapeName
                      );
                      return (
                        <li key={shapeData.gemstoneShapeId} className="py-2">
                          <label className="items-start">
                            <Checkbox
                              checked={
                                selectedBy.includes(shapeName) ||
                                (index === 0 && selectedBy.length === 0)
                              }
                              onChange={() => {
                                handleCategorySelect(shapeName);
                                if (index === 0 && selectedBy.length === 0) {
                                  setSelectedBy[shapeName];
                                }
                              }}
                              icon={<FaCircle className="text-[#D9D9D9]" />}
                              checkedIcon={
                                <FaCircle style={{ color: "#584BA5" }} />
                              }
                            />
                            <span>{shapeName}</span>
                          </label>
                        </li>
                      );
                    })
                  ) : (
                    <p>There are no gemstone shapes available.</p>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}{" "}
        {activeStep === 2 && (
          <div>
            {" "}
            <button
              type="button"
              className="flex w-full items-start pb-3 justify-between"
              aria-expanded={isOpen1}
              aria-haspopup="true"
              onClick={toggleDropdown1}
            >
              <h3 className="text-base outline-none ">Filter By Jewelry</h3>
              <SlArrowDown />
            </button>
            {isOpen1 && (
              <div className="mt-0 w-full z-40">
                <ul className="py-2 divide-y divide-slate-700 ">
                  {data?.jewelry && data?.jewelry.length > 0 ? (
                    Array.from(
                      new Set(data.jewelry.map((item) => item.jewelryName))
                    ).map((jewelryName, index) => {
                      const jewelryData = data.jewelry.find(
                        (item) => item.jewelryName === jewelryName
                      );
                      return (
                        <li key={jewelryData.jewelryId} className="py-2">
                          <label className="items-start">
                            <Checkbox
                              checked={
                                selectedBy.includes(jewelryName) ||
                                (index === 0 && selectedBy.length === 0)
                              }
                              onChange={() => {
                                handleCategorySelect(jewelryName);
                                if (index === 0 && selectedBy.length === 0) {
                                  setSelectedBy[jewelryName];
                                }
                              }}
                              icon={<FaCircle className="text-[#D9D9D9]" />}
                              checkedIcon={
                                <FaCircle style={{ color: "#584BA5" }} />
                              }
                            />
                            <span>{jewelryName}</span>
                          </label>
                        </li>
                      );
                    })
                  ) : (
                    <p>There are no gemstone shapes available.</p>
                  )}
                </ul>
              </div>
            )}
          </div>
        )}{" "}
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
                          <h5 className="flex relative text-center mt-0 mb-5">
                            Please select a jewelry
                          </h5>
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
                    <button
                      onClick={handleBack}
                      className="w-1/4 justify-items-center"
                    >
                      <TiArrowBackOutline className="text-gray-500" />
                    </button>
                  )}
                  {isComplete ? (
                    <>
                      <button
                        onClick={() => addToFav(selectedProduct)}
                        className="w-1/4 justify-items-center"
                      >
                        {isInWishlist(selectedProduct) ? (
                          <IoHeart style={{ color: "red" }} />
                        ) : (
                          <FaRegHeart style={{ color: "#666666" }} />
                        )}
                      </button>
                      <button
                        onClick={() => addToCart(selectedProduct)}
                        className="w-1/4 justify-items-center"
                      >
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
                      <button className="w-1/4 justify-items-center">
                        <MdOutlineDownloadDone
                          className=" text-green-400 mt-2 h-4 w-4"
                          onClick={handleComplete}
                        />{" "}
                      </button>
                    ) : (
                      !showReset && (
                        <button className="w-1/4 justify-items-center">
                          <TiArrowForwardOutline
                            className={determineArrowColor()}
                          />{" "}
                        </button>
                      )
                    )}
                    {isComplete && showReset && (
                      <button
                        className="w-1/4 justify-items-center"
                        onClick={handleReset}
                      >
                        <VscDebugRestart className=" text-blue-500 mt-2 h-4 w-4" />
                      </button>
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
