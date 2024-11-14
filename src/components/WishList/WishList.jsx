import { React, useState } from "react";

const WishList = (props) => {
  const { storedWishList, setStoredWishList } = props;

  const deleteFromWishList = (item) => {
    const updatedWishList = storedWishList.filter(
      (wishItem) => wishItem !== item
    );
    setStoredWishList(updatedWishList);
  };

  if (storedWishList.length === 0) {
    return (
      <p className="mt-5 text-center justify-content-center">
        The wishlist is empty
      </p>
    );
  }
  return (
    <section>
      <div className="relative h-[100vh] overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right  dark:text-gray-900">
          <thead className="text-xs text-gray-950 uppercase bg-gray-100 dark:bg-gray-100 dark:text-gray-950">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {storedWishList.map((product, index) => (
              <tr
                key={index}
                className="bg-slate-300 border-b dark:bg-gray-50 dark:border-gray-100 hover:bg-gray-400 dark:hover:bg-gray-100"
              >
                <td className="p-4">
                 
                  <div className="relative flex items-center justify-center h-full ">
                    <img
                      alt={product.jewelry[0].jewelryName}
                      className="object-fill object-center w-16 md:w-32 max-w-full max-h-full"
                      src={product.jewelry[0].jewelryImage}
                      style={{ zIndex: 1 }}
                    />
                    {product?.shapes[0]?.gemstoneImage && (
                      <img
                        alt={product?.shapes[0]?.gemstoneType}
                        src={product.shapes[0].gemstoneImage}
                        className="absolute object-cover w-16 md:w-32 max-w-full max-h-full"
                        style={{ zIndex: 2 }}
                      />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-700 dark:text-black text-center">
                  {product.jewelry[0].jewelryType}
                  <p>{product.jewelry[0].jewelryName} with</p>
                  <p>{product.gemstones[0].gemstoneType} Gemstone</p>
                  <p>{product.shapes[0].shapeName}</p>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-black">
                  ${" "}
                  {(
                    (product.jewelry[0]?.jewelryPrice || 0) +
                    (product.shapes[0]?.gemstoneShapPrice || 0)
                  ).toFixed(2)}{" "}
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => deleteFromWishList(product)}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WishList;
