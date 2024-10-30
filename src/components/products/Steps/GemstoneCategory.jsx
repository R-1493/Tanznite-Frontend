import React from "react";

function GemstoneCategory(props) {
  const { products, setIsOpen2, setSelectedProduct, selectedProduct } = props;

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsOpen2(true);
  };

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className={`p-4 lg:w-1/3 max-w-md cursor-pointer ${
            selectedProduct && selectedProduct.id === product.id
              ? "border-b-4 border-[#584BA5]"
              : ""
          }`}
          onClick={() => handleProductSelect(product)}
        >
          <div className="h-auto overflow-hidden">
            <img
              alt={product.name}
              className="object-fill object-center h-full w-full"
              src={product.images[0]}
            />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            {product.title}
          </h2>
          <p className="text-base leading-relaxed">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default GemstoneCategory;
