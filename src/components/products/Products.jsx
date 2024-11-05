import { React, useState, useEffect } from "react";
import SidBar from "./SidBar/SidBar";
import GemstoneCategory from "./Steps/GemstoneCategory";
import GemstoneShape from "./Steps/GemstoneShape";
import JewellerySetting from "./Steps/JewellerySetting";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import ProductPagination from "./ProductPagination";

function Products(props) {
  const {
    isOpen1,
    setIsOpen1,
    isOpen2,
    setIsOpen2,
    selectedProduct,
    setSelectedProduct,
    selectedBy,
    setSelectedBy,
    setActiveStep,
    activeStep,
    skipped,
    setSkipped,
    storedWishList,
    setStoredWishList,
    storedCart,
    setStoredCart,
  } = props;

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const limit = 4;
  const offset = (page - 1) * limit;
  const urls = [
    "http://localhost:5125/api/v1/Gemstone",
    "http://localhost:5125/api/v1/GemstoneShape",
    "http://localhost:5125/api/v1/Jewelry",
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urls[activeStep], {
          params: {
            Limit: limit,
            Offset: offset,
            MinPrice: 0,
            MaxPrice: 10000,
          },
        });
        setData(response.data);
        console.log(response.data);
        setTotalCount(response.data.totalCount);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [activeStep, offset]);

  console.log(data);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress>
          <span className="visually-hidden">Loading...</span>
        </CircularProgress>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  let filteredShapes = [];
  const handleNextStep = () => {
    if (activeStep === 0 && selectedProduct.gemstones.length <= 0) return;
    if (activeStep === 1 && selectedProduct.shapes.length <= 0) return;
    if (activeStep === 2 && selectedProduct.jewelry.length <= 0) return;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    let newSkipped = skipped;
    setSkipped(newSkipped);
  };
  const handleNext = (category, product) => {
    let selectedProducts;

    switch (category) {
      case "gemstones":
        selectedProducts = [...selectedProduct.gemstones];
        break;
      case "shapes":
        selectedProducts = [...selectedProduct.shapes];
        break;
      case "jewelry":
        selectedProducts = [...selectedProduct.jewelry];
        break;
    }

    selectedProducts[0] = product;

    setSelectedProduct({
      ...selectedProduct,
      [category]: selectedProducts,
    });

    setIsOpen2(true);
  };
  const selectedGemstone = selectedProduct.gemstones[0]?.gemstoneId;
  console.log(selectedGemstone);

  const displayStep = (step) => {
    if (step === 1) {
      filteredShapes =
        data?.gemstonesShape?.filter(
          (shape) => shape.gemstoneId === selectedGemstone
        ) || [];
    }
    switch (step) {
      case 0:
        return (
          <div>
            <GemstoneCategory
              setIsOpen2={setIsOpen2}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              gemstones={data.gemstones}
              handleNext={handleNext}
            />
            <div className="w-full flex justify-center mt-4">
              <ProductPagination
                totalCount={totalCount}
                page={page}
                HandleChange={handleChange}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <GemstoneShape
              setIsOpen2={setIsOpen2}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              gemstonesShape={filteredShapes}
              handleNext={handleNext}
            />
            <div className="w-full flex justify-center mt-4">
              <ProductPagination
                totalCount={totalCount}
                page={page}
                HandleChange={handleChange}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <JewellerySetting
              setIsOpen2={setIsOpen2}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              jewelry={data.jewelry}
              handleNext={handleNext}
            />
            <div className="w-full flex justify-center mt-4">
              <ProductPagination
                totalCount={totalCount}
                page={page}
                HandleChange={handleChange}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="border-gray-800 bg-[#D4D4D4] body-font pb-20 pt-3 justify-center">
      <div className="container px-5 py-0 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 lg:pt-5 lg:p-0 sm:p-0 lg:w-1/4 w-[50%] sm:w-1/4">
            <SidBar
              isOpen1={isOpen1}
              setIsOpen1={setIsOpen1}
              isOpen2={isOpen2}
              setIsOpen2={setIsOpen2}
              selectedProduct={selectedProduct}
              setSelectedBy={setSelectedBy}
              selectedBy={selectedBy}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              skipped={skipped}
              setSkipped={setSkipped}
              handleNext={handleNextStep}
              setSelectedProduct={setSelectedProduct}
              storedWishList={storedWishList}
              setStoredWishList={setStoredWishList}
              storedCart={storedCart}
              setStoredCart={setStoredCart}
            />
          </div>
          <div className="pl-3 pr-3 w-[50%] sm:w-3/4 lg:w-3/4 justify-center ml-auto mr-auto">
            {displayStep(activeStep)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
