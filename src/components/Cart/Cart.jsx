import { React, useState } from "react";

const Cart = (props) => {
  const { storedCart, setStoredCart } = props;

  const handleIncrement = (product) => {
    const updatedCart = storedCart.map((item) => {
      if (
        item.jewelry[0].jewelryId === product.jewelry[0].jewelryId &&
        item.gemstones[0].gemstoneId === product.gemstones[0].gemstoneId &&
        item.shapes[0].gemstoneShapeId === product.shapes[0].gemstoneShapeId
      ) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setStoredCart(updatedCart);
  };

  const handleDecrement = (product) => {
    const updatedCart = storedCart.map((item) => {
      if (
        item.jewelry[0].jewelryId === product.jewelry[0].jewelryId &&
        item.gemstones[0].gemstoneId === product.gemstones[0].gemstoneId &&
        item.shapes[0].gemstoneShapeId === product.shapes[0].gemstoneShapeId
      ) {
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setStoredCart(updatedCart);
  };

  const deleteFromCart = (item) => {
    const updatedCart = storedCart.filter((cartItem) => cartItem != item);
    setStoredCart(updatedCart);
  };

  const total = storedCart
    .reduce((acc, product) => {
      return (
        acc +
        ((product.jewelry[0]?.jewelryPrice || 0) +
          (product.shapes[0]?.gemstoneShapPrice || 0)) *
          product.quantity
      );
    }, 0)
    .toFixed(2);
  return (
    <section>
      <div className="relative h-auto overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right dark:text-gray-900">
          <thead className="text-xs text-gray-950 uppercase bg-gray-100 dark:bg-gray-100 dark:text-gray-950">
            <tr>
              <th scope="col" className="px-4 py-3 sm:px-16">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Product
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Qty
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Price
              </th>
              <th scope="col" className="px-4 py-3 sm:px-6">
                Action
              </th>
            </tr>
          </thead>
          {storedCart.map((product, index) => (
            <tbody key={index}>
              <tr className="bg-slate-300 border-b dark:bg-gray-50 dark:border-gray-100 hover:bg-gray-400 dark:hover:bg-gray-100">
                {" "}
                <td className="p-4">
                  <img
                    src={product.jewelry[0].jewelryImage}
                    className="w-16 h-auto md:w-32 max-w-full max-h-full"
                    alt="Apple Watch"
                  />
                </td>
                <td className="px-4 py-4 font-semibold text-gray-700 dark:text-black sm:px-6">
                  {product.jewelry[0].jewelryType}
                  <p>{product.jewelry[0].jewelryName} with</p>
                  <p>{product.gemstones[0].gemstoneType} Gemstone</p>
                  <p>{product.shapes[0].shapeName}</p>
                </td>
                <td className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <button
                      className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-600 bg-slate-400 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-400 dark:text-gray-100 dark:border-gray-300 dark:hover:bg-gray-400 dark:hover:border-gray-400 dark:focus:ring-gray-400"
                      type="button"
                      onClick={() => handleDecrement(product)}
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <p
                        type="number"
                        id="first_product"
                        className="bg-gray-50 w-14 border border-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {product.quantity}
                      </p>
                    </div>
                    <button
                      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-600 bg-slate-400 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-400 dark:text-gray-100 dark:border-gray-300 dark:hover:bg-gray-400 dark:hover:border-gray-400 dark:focus:ring-gray-400"
                      type="button"
                      onClick={() => handleIncrement(product)}
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-4 py-4 sm:px-6">
                  ${" "}
                  {(
                    ((product.jewelry[0]?.jewelryPrice || 0) +
                      (product.shapes[0]?.gemstoneShapPrice || 0)) *
                    product.quantity
                  ).toFixed(2)}{" "}
                </td>
                <td className="px-4 py-4 sm:px-6">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => deleteFromCart(product)}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="mt-10 p-3 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
              <h3 className="text-xl  font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between w-full">
                  <p className="text-base  leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base  leading-4 text-gray-600">${total}</p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="text-base  leading-4 text-gray-800">Shipping</p>
                  <p className="text-base  leading-4 text-gray-600">$8.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base  font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base  font-semibold leading-4 text-gray-600">
                  $ {total + 8.0}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
              <h3 className="text-xl  font-semibold leading-5 text-gray-800">
                Shipping
              </h3>
              <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-8 h-8">
                    <img
                      className="w-full h-full"
                      alt="logo"
                      src="https://i.ibb.co/L8KSdNQ/image-3.png"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center">
                    <p className="text-lg leading-6  font-semibold text-gray-800">
                      DPD Delivery
                      <br />
                      <span className="font-normal">Delivery with 24 Hours</span>
                    </p>
                  </div>
                </div>
                <p className="text-lg font-semibold leading-6  text-gray-800">
                  $8.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="hover:bg-indigo-700   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-[#6F64B1] text-base font-medium leading-4 text-white">
              Order
            </button>
          </div>
          <div className="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
            <h3 className="text-xl  font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                    alt="avatar"
                  />
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-base  font-semibold leading-4 text-left text-gray-800">
                      David Kent
                    </p>
                    <p className="text-sm  leading-5 text-gray-600">
                      10 Previous Orders
                    </p>
                  </div>
                </div>

                <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <img
                    className=""
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                    alt="email"
                  />
                  <img
                    className="hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                    alt="email"
                  />
                  <p className="cursor-pointer text-sm leading-5 ">
                    david89@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Billing Address
                    </p>
                    <p className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <button className="mt-6 md:mt-0   py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
