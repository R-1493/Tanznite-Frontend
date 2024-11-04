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
    steps,
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

  const displayStep = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <GemstoneCategory
              setIsOpen2={setIsOpen2}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              gemstones={data.gemstones}
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
              gemstonesShape={data.gemstonesShape}
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
            />{" "}
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
