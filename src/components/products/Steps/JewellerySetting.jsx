import React, { useState } from "react";

function JewellerySetting(props) {
  const { selectedProduct, jewelry, handleNext } = props;

  const handleProductSelect = (product) => {
    handleNext("jewelry", product);
  };
  console.log("selectedProduct", selectedProduct);
  return (
    <div className="flex flex-wrap justify-start">
      {jewelry && jewelry.length > 0 ? (
        jewelry.map((product) => (
          <div
            key={product.jewelryId}
            className={`p-4 lg:w-1/3 max-w-md cursor-pointer ${
              selectedProduct &&
              selectedProduct.jewelry[0]?.jewelryId === product.jewelryId
                ? "border-b-4 border-[#584BA5]"
                : ""
            }`}
            onClick={() => handleProductSelect(product)}
          >
            <div className="h-auto bg-white overflow-hidden">
              <div className="relative flex items-center justify-center h-full">
                <img
                  alt={product.jewelryName}
                  className="object-fill object-center h-full w-full"
                  src={product.jewelryImage}
                  style={{ zIndex: 1 }}
                />
                {selectedProduct?.shapes[0]?.gemstoneImage && (
                  <img
                    alt={selectedProduct?.shapes[0]?.gemstoneType}
                    src={selectedProduct.shapes[0].gemstoneImage}
                    className="absolute object-cover h-full w-full"
                    style={{ zIndex: 2 }}
                  />
                )}
              </div>
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {product.jewelryName}
            </h2>
            <div className="flex justify-between">
              <p className="text-base leading-relaxed">
                ${product.jewelryPrice}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No gemstones to display</p>
      )}
    </div>
  );
}

export default JewellerySetting;
