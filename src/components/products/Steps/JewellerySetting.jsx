import React from "react";
// step 3

function JewellerySetting(props) {
  const {
    setIsOpen2,
    setSelectedProduct,
    selectedProduct,
    jewelry,
    handleNext,
  } = props;

  const handleProductSelect = (product) => {
    handleNext("jewelry", product);
  };
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
            <div className="h-auto overflow-hidden">
              <img
                alt={product.jewelryName}
                className="object-fill object-center h-full w-full"
                src={product.jewelryImage}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {product.jewelryName}
            </h2>
            <p className="text-base leading-relaxed">${product.jewelryPrice}</p>
          </div>
        ))
      ) : (
        <p>No gemstones to display</p>
      )}
    </div>
  );
}

export default JewellerySetting;
