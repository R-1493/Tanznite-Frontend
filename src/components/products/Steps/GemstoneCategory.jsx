import React from "react";
function GemstoneCategory(props) {
  const { setIsOpen2, setSelectedProduct, selectedProduct, gemstones } = props;

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsOpen2(true);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {gemstones && gemstones.length > 0 ? (
        gemstones.map((product) => (
          <div
            key={product.gemstoneId}
            className={`p-4 lg:w-1/3 max-w-md cursor-pointer ${
              selectedProduct && selectedProduct.id === product.gemstoneId
                ? "border-b-4 border-[#584BA5]"
                : ""
            }`}
            onClick={() => handleProductSelect(product)}
          >
            <div className="h-auto overflow-hidden">
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
