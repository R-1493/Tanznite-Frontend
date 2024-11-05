import { React, useState } from "react";

const Cart = (props) => {
  const { storedCart, setStoredCart } = props;

  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };
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
                Qty
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
            <tr className="bg-slate-300 border-b dark:bg-gray-50 dark:border-gray-100 hover:bg-gray-400 dark:hover:bg-gray-100">
              <td className="p-4">
                <img
                  src=""
                  className="w-16 md:w-32 max-w-full max-h-full"
                  alt="Apple Watch"
                />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-700 dark:text-black">
                Apple Watch
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <button
                    className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-600 bg-slate-400 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-400 dark:text-gray-100 dark:border-gray-300 dark:hover:bg-gray-400 dark:hover:border-gray-400 dark:focus:ring-gray-400"
                    type="button"
                    onClick={handleDecrement}
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
                    <input
                      type="number"
                      id="first_product"
                      className="bg-gray-50 w-14 border border-gray-100 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-600 bg-slate-400 border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-400 dark:text-gray-100 dark:border-gray-300 dark:hover:bg-gray-400 dark:hover:border-gray-400 dark:focus:ring-gray-400"
                    type="button"
                    onClick={handleIncrement}
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
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-black">
                $599
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;
