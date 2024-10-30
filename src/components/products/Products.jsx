import React from "react";
import SidBar from "./SidBar/SidBar";
import GemstoneCategory from "./Steps/GemstoneCategory";

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
    products,
  } = props;
  return (
    <section className="border-gray-800 bg-[#D4D4D4] body-font py-20 justify-center">
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
            />
          </div>
          <div className="pl-3 pr-3 w-[50%] sm:w-3/4 lg:w-3/4 justify-center ml-auto mr-auto">
            <GemstoneCategory
              products={products}
              setIsOpen2={setIsOpen2}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
