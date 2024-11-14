import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
function JewelryItem(props) {
  const { product, fetchData } = props;
  const [isOpen, setIsOpen] = useState(false);

  const [productInfo, setProductInfo] = useState({
    jewelryName: "",
    jewelryType: "",
    jewelryPrice: null,
    jewelryImage: "",
    description: "",
  });

  function onChangeHandlerJewelry(event) {
    console.log(event, "event");
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
  }
  function updateProduct() {
    const token = localStorage.getItem("token");
    const url = `https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/Jewelry/${product.jewelryId}`;
    const updatedData = {};
    Object.keys(productInfo).forEach((key) => {
      if (productInfo[key]) {
        updatedData[key] = productInfo[key];
      }
    });
    axios
      .patch(url, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Product updated successfully!");
          fetchData();
          setIsOpen(false);
        }
      })
      .catch((error) => console.log(error));
  }
  function deleteProductById() {
    const token = localStorage.getItem("token");
    const url = `https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/Jewelry/${product.jewelryId}`;
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
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold">Create new Jewelry</h2>

            <div className="py-2 sm:py-3 grid grid-cols-2 gap-4">
              <label className="text-base font-medium text-gray-900">
                Jewelry Name
              </label>
              <label className="text-base font-medium text-gray-900">
                Jewelry Type
              </label>
              <TextField
                id="jewelryName"
                name="jewelryName"
                type="text"
                placeholder="Enter the jewelry name"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerJewelry}
              />
              <TextField
                id="jewelryType"
                name="jewelryType"
                type="text"
                placeholder="Enter the jewelry type"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerJewelry}
              />
            </div>

            <div className="py-2 sm:py-3 grid grid-cols-2 gap-4">
              <label className="text-base font-medium text-gray-900">
                Jewelry Image URL
              </label>
              <label className="text-base font-medium text-gray-900">
                Jewelry Price
              </label>
              <TextField
                id="jewelryImage"
                name="jewelryImage"
                type="URL"
                placeholder="Enter a URL"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerJewelry}
              />
              <TextField
                id="jewelryPrice"
                name="jewelryPrice"
                type="number"
                placeholder="Enter the price"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerJewelry}
              />
            </div>
            <div className="py-2 sm:py-3 grid grid-cols-1 ">
              <label className="text-base font-medium text-gray-900">
                Jewelry Description
              </label>

              <TextField
                id="description"
                name="description"
                type="text"
                placeholder="Enter a Description"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerJewelry}
              />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-3 ml-4 mr-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
            >
              Close
            </button>
            <button
              onClick={updateProduct}
              className="mt-3 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500"
            >
              Save
            </button>
          </div>
        </div>
      )}

      <div className="p-3 flex flex-col md:flex-row  items-center justify-between border-t cursor-pointer  hover:bg-gray-200">
        <div className="flex items-center w-full md:w-auto">
          <img
            alt={product.jewelryName}
            src={product.jewelryImage}
            className="w-16 h-16 md:w-24 md:h-24 object-cover border border-gray-300 rounded-md"
          />
          <div className="ml-4 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">
              {product?.jewelryName}
            </div>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Type: </p>
            <span className="font-medium md:font-bold">
              {product?.jewelryType}
            </span>
          </div>
        </div>{" "}
        <div className="ml-2 flex flex-col w-full md:w-auto pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Description: </p>
            <span className="font-medium md:font-bold">
              {product?.description.length > 20
                ? `${product.description.slice(0, 20)}...`
                : product.description}
            </span>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto   pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold ">
            <p className="inline md:hidden mr-1">Price :</p>{" "}
            <span className="font-medium md:font-bold">
              ${product?.jewelryPrice}
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          {" "}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-2 md:mt-0 h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100"
          >
            edit
          </button>
          <button
            onClick={deleteProductById}
            className="mt-2 md:mt-0 h-8 px-3 text-md font-bold text-red-400 border border-red-400 rounded-full hover:bg-red-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default JewelryItem;
