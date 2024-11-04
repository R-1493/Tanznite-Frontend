import React from "react";

function JewellerySetting(props) {
  const { setIsOpen2, setSelectedProduct, selectedProduct, jewelry } = props;

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsOpen2(true);
  };
  return (
    <div className="flex flex-wrap justify-center">
      {jewelry && jewelry.length > 0 ? (
        jewelry.map((product) => (
          <div
            key={product.gemstoneId}
            className={`p-4 lg:w-1/3 max-w-md cursor-pointer ${
              selectedProduct && selectedProduct.id === product.jewelryId
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
