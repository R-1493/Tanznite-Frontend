import React, { useState } from "react";
// step 3

function JewellerySetting(props) {
  const { activeStep, selectedProduct, jewelry, handleNext } = props;

  const handleProductSelect = (product) => {
    handleNext("jewelry", product);
  };
  const [isOpen, setIsOpen] = useState(false);
  console.log("selectedProduct", selectedProduct);
  return (
    <div class="flex flex-wrap justify-start">
      {jewelry && jewelry.length > 0 ? (
        jewelry.map((product) => (
          <div
            key={product.jewelryId}
            class={`p-4 lg:w-1/3 max-w-md cursor-pointer ${
              selectedProduct &&
              selectedProduct.jewelry[0]?.jewelryId === product.jewelryId
                ? "border-b-4 border-[#584BA5]"
                : ""
            }`}
            onClick={() => handleProductSelect(product)}
          >
            <div class="h-auto overflow-hidden">
              <img
                alt={product.jewelryName}
                class="object-fill object-center h-full w-full"
                src={product.jewelryImage}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              {product.jewelryName}
            </h2>
            <div class="flex justify-between">
              <p class="text-base leading-relaxed">${product.jewelryPrice}</p>
              <button onClick={() => setIsOpen(true)} class="text-[#6F64B1]">
                read more
              </button>
            </div>
            {isOpen && (
              <div
                class="fixed inset-0 flex items-center justify-center z-50"
                onClick={() => setIsOpen(false)}
              >
                <div
                  class="bg-gray-100 p-6 rounded-lg shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div class="flex items-end justify-center min-h-[80%] px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <div class="container">
                      <div class="lg:w-3/4 lg:h-3/4 w-3/4 h-3/4 mx-auto flex flex-wrap">
                        <div class="lg:w-1/2 lg:h-1/2 h-3/4 w-3/4 lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                          <h1 class="text-gray-900 text-2xl title-font font-medium mb-4 flex items-center">
                            <span>
                              {selectedProduct.gemstones[0]?.gemstoneType}
                            </span>
                            <span className="ml-2">
                              with {product.jewelryType}
                            </span>
                            <span className="ml-2"> {product.jewelryName}</span>
                          </h1>
                          <div class="flex mb-4">
                            <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                              Description
                            </a>
                          </div>
                          <p class="leading-relaxed mb-4">
                            <span>
                              {" "}
                              {selectedProduct.shapes[0].gemstoneShapeInfo}
                            </span>
                            <span> with {product.description}</span>
                          </p>
                          <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500">Color</span>
                            <span class="ml-auto  text-gray-900">
                              {selectedProduct.gemstones[0].gemstoneColor}
                            </span>
                          </div>
                          <div class="flex border-t border-gray-200 py-2">
                            <span class="text-gray-500 ">
                              Gemstone Clarity{" "}
                            </span>{" "}
                            <span class="ml-auto text-gray-900">
                              {selectedProduct.gemstones[0].gemstoneClarity}
                            </span>
                          </div>
                          <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span class="text-gray-500">Gemstone Wight</span>
                            <span class="ml-auto text-gray-900">
                              {selectedProduct.shapes[0].gemstoneShapWeight}
                            </span>
                          </div>
                          <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">
                              ${" "}
                              {(
                                (product.jewelryPrice || 0) +
                                (selectedProduct.shapes[0]?.gemstoneShapPrice ||
                                  0)
                              ).toFixed(2)}{" "}
                            </span>
                            <button
                              onClick={() => setIsOpen(false)}
                              class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                            >
                              Close
                            </button>
                          </div>
                        </div>

                        <div class="flex flex-wrap w-1/2">
                          <div class="md:p-2 p-1 w-1/2">
                            <img
                              alt="gallery"
                              class="w-full object-cover h-full object-center block"
                              src={selectedProduct.gemstones[0]?.gemstoneImage}
                            />
                          </div>
                          <div class="md:p-2 p-1 w-1/2">
                            <img
                              alt="gallery"
                              class="w-full object-cover h-full object-center block"
                              src={selectedProduct.shapes[0]?.gemstoneImage}
                            />
                          </div>
                          <div class="md:p-2 p-1 w-[70%">
                            <img
                              alt="gallery"
                              class="w-full object-cover h-full object-center block"
                              src={product.jewelryImage}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No gemstones to display</p>
      )}
    </div>
  );
}

export default JewellerySetting;
