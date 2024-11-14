import React, { useState } from "react";

function ProductDetail(props) {
  const { selectedProduct } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute z-50">
      <button onClick={() => setIsOpen(true)} className="text-[#6F64B1]">
        read more
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-end justify-center min-h-[80%] px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="container">
                <div className="lg:w-3/4 lg:h-3/4 w-3/4 h-3/4 mx-auto flex flex-wrap">
                  <div className="lg:w-1/2 lg:h-1/2 h-3/4 w-3/4 lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                    <h1 className="text-gray-900 text-2xl title-font font-medium mb-4 flex items-center">
                      <span>{selectedProduct.gemstones[0]?.gemstoneType}</span>
                      <span className="ml-2">
                        with {selectedProduct.jewelry[0]?.jewelryType}
                      </span>
                      <span className="ml-2">
                        {" "}
                        {selectedProduct.jewelry[0]?.jewelryName}
                      </span>
                    </h1>
                    <div className="flex mb-4">
                      <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                        Description
                      </a>
                    </div>
                    <p className="leading-relaxed mb-4">
                      <span>
                        {" "}
                        {selectedProduct.shapes[0]?.gemstoneShapeInfo}
                      </span>
                      <span>
                        {" "}
                        with {selectedProduct.jewelry[0]?.description}
                      </span>
                    </p>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Color</span>
                      <span className="ml-auto  text-gray-900">
                        {selectedProduct.gemstones[0]?.gemstoneColor}
                      </span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500 ">Gemstone Clarity </span>{" "}
                      <span className="ml-auto text-gray-900">
                        {selectedProduct.gemstones[0]?.gemstoneClarity}
                      </span>
                    </div>
                    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                      <span className="text-gray-500">Gemstone Wight</span>
                      <span className="ml-auto text-gray-900">
                        {selectedProduct.shapes[0]?.gemstoneShapWeight}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        ${" "}
                        {(
                          (selectedProduct.jewelry[0]?.jewelryPrice || 0) +
                          (selectedProduct.shapes[0]?.gemstoneShapPrice || 0)
                        ).toFixed(2)}{" "}
                      </span>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                      >
                        Close
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap w-1/2">
                    <div className="md:p-2 p-1 w-1/2">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block"
                        src={selectedProduct.gemstones[0]?.gemstoneImage}
                      />
                    </div>
                    <div className="md:p-2 p-1 w-1/2 ">
                      <img
                        alt="gallery"
                        className="w-full object-cover h-full object-center block bg-white"
                        src={selectedProduct.shapes[0]?.gemstoneImage}
                      />
                    </div>
                    <div className="md:p-2 p-1 w-[70%">
                      <div className="h-auto bg-white overflow-hidden">
                        <div className="relative flex items-center justify-center h-full">
                          <img
                            alt={selectedProduct.jewelry[0].jewelryName}
                            className="object-fill object-center h-full w-full"
                            src={selectedProduct.jewelry[0].jewelryImage}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
