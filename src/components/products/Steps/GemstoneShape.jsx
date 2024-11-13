import React, { useState, useEffect } from "react";
// step 1

function GemstoneShape(props) {
  const { selectedProduct, gemstonesShape, handleNext } = props;

  const handleProductSelect = (product) => {
    handleNext("shapes", product);
  };
  return (
    <div className="flex flex-wrap justify-start">
      {gemstonesShape && gemstonesShape.length > 0 ? (
        gemstonesShape.map((product) => (
          <div
            key={product.gemstoneShapeId}
            className={`p-4 lg:w-1/3 max-w-md cursor-pointer ${
              selectedProduct &&
              selectedProduct.shapes[0]?.gemstoneShapeId ===
                product.gemstoneShapeId
                ? "border-b-4 border-[#584BA5] transition-all duration-200"
                : "border-b-4 border-transparent"
            }`}
            onClick={() => handleProductSelect(product)}
          >
            {" "}
            <div className="h-auto overflow-hidden bg-white">
              <img
                alt={product.gemstoneShapWeight}
                className="object-fill object-center h-full w-full"
                src={product.gemstoneImage}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {product.shapeName}{" "}
              <span>{product.gemstoneShapWeight}carats</span>
            </h2>
            <p className="text-base leading-relaxed">
              ${product.gemstoneShapPrice}
            </p>
          </div>
        ))
      ) : (
        <p>No gemstones to display</p>
      )}
    </div>
  );
}

export default GemstoneShape;
