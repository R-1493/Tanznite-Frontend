import React from "react";
// step 0
function GemstoneCategory(props) {
  const {
    setIsOpen2,
    setSelectedProduct,
    selectedProduct,
    gemstones,
    handleNext,
  } = props;
  console.log(selectedProduct.gemstones[0]);
  const handleProductSelect = (product) => {
    handleNext("gemstones", product);
  };
  return (
    <div className="flex flex-wrap justify-start">
      {gemstones && gemstones.length > 0 ? (
        gemstones.map((product) => (
          <div
            key={product.gemstoneId}
            className={`p-4 lg:w-[50%] sm:w-[50%] max-w-md cursor-pointer ${
              selectedProduct &&
              selectedProduct.gemstones[0]?.gemstoneId == product.gemstoneId
                ? "border-b-4 border-[#584BA5] transition-all duration-200"
                : "border-b-4 border-transparent"
            }`}
            onClick={() => handleProductSelect(product)}
          >
            <div className="h-auto  overflow-hidden">
              <img
                alt={product.gemstoneType}
                className="object-fill object-center h-full w-full"
                src={product.gemstoneImage}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              {product.gemstoneType}
            </h2>
            <p className="text-base leading-relaxed">
              ${product.gemstonePrice}
            </p>
          </div>
        ))
      ) : (
        <p>No gemstones to display</p>
      )}
    </div>
  );
}

export default GemstoneCategory;
