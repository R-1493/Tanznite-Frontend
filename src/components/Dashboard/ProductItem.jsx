import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

function ProductItem(props) {
  const { product, fetchData } = props;
  function deleteProductById() {
    const token = localStorage.getItem("token");
    // send request to backend
    const url = `http://localhost:5125/api/v1/Gemstone/${product.gemstoneId}`;
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          alert("a product is deleted successfully!");
          fetchData();
        }
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="max-w-full mx-auto ">
      <div className="p-3 flex flex-col md:flex-row  items-center justify-between border-t cursor-pointer  hover:bg-gray-200">
        <div className="flex items-center w-full md:w-auto">
          <img
            alt={product.gemstoneType}
            src={product.gemstoneImage}
            className="w-16 h-16 md:w-24 md:h-24 object-cover border border-gray-300 rounded-md"
          />
          <div className="ml-2 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">
              {product?.gemstoneType}
            </div>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto py-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Color: </p>
            <span className="font-medium md:font-bold">
              {" "}
              {product?.gemstoneColor}
            </span>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Clarity: </p>
            <span className="font-medium md:font-bold">
              {product?.gemstoneClarity}
            </span>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto   pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold ">
            <p className="inline md:hidden mr-1">Price :</p>{" "}
            <span className="font-medium md:font-bold">
              ${product?.gemstonePrice}
            </span>
          </div>
        </div>
        <button
          onClick={deleteProductById}
          className="mt-2 md:mt-0 h-8 px-3 text-md font-bold text-red-400 border border-red-400 rounded-full hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
