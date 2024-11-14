import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

function ProductItem(props) {
  const { product, fetchData, categoryList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [productInfo, setProductInfo] = useState({
    gemstoneType: "",
    gemstoneColor: "",
    GemstoneImage: "",
    gemstoneClarity: "",
    gemstonePrice: null,
    gemstoneDescription: "",
    categoryId: "",
  });
  function onChangeHandlerGemstone(event) {
    console.log(event, "event");
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
  }
  function updateProduct() {
    const token = localStorage.getItem("token");
    const url = `https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/Gemstone/${product.gemstoneId}`;
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
    const url = `https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/Gemstone/${product.gemstoneId}`;
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
            <h2 className="text-lg font-semibold">Create new gemstone</h2>

            <div className="py-2 sm:py-3 grid grid-cols-2 gap-4">
              <label className="text-base font-medium text-gray-900">
                Gemstone Type
              </label>
              <label className="text-base font-medium text-gray-900">
                Gemstone Color
              </label>
              <TextField
                id="gemstoneType"
                name="gemstoneType"
                type="text"
                placeholder="Enter the Type"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstone}
              />
              <TextField
                id="gemstoneColor"
                name="gemstoneColor"
                type="text"
                placeholder="Enter the color"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstone}
              />
            </div>

            <div className="py-2 sm:py-3 grid grid-cols-2 gap-4">
              <label className="text-base font-medium text-gray-900">
                Gemstone Image URL
              </label>
              <label className="text-base font-medium text-gray-900">
                Gemstone Price
              </label>
              <TextField
                id="GemstoneImage"
                name="GemstoneImage"
                type="URL"
                placeholder="Enter a URL"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstone}
              />
              <TextField
                id="gemstonePrice"
                name="gemstonePrice"
                type="number"
                placeholder="Enter the price"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstone}
              />
            </div>
            <div className="py-2 sm:py-3 grid grid-cols-1 ">
              <label className="text-base font-medium text-gray-900">
                Gemstone Description
              </label>

              <TextField
                id="gemstoneDescription"
                name="gemstoneDescription"
                type="text"
                placeholder="Enter a Description"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstone}
              />
            </div>

            <div className="py-2 sm:py-3 grid grid-cols-2 gap-4">
              <label className="text-base font-medium text-gray-900">
                Gemstone Clarity
              </label>
              <label>Gemstone Category</label>
              <TextField
                id="gemstoneClarity"
                name="gemstoneClarity"
                type="text"
                placeholder="Enter clarity"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstone}
              />{" "}
              <FormControl fullWidth>
                <InputLabel id="categoryId">Category id</InputLabel>
                <Select
                  labelId="categoryId"
                  name="categoryId"
                  value={productInfo.categoryId}
                  label="Category Id"
                  onChange={onChangeHandlerGemstone}
                >
                  {categoryList.map((category) => (
                    <MenuItem
                      key={category.categoryId}
                      value={category.categoryId}
                    >
                      {category.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
            alt={product.gemstoneType}
            src={product.gemstoneImage}
            className="w-16 h-16 md:w-24 md:h-24 object-cover border border-gray-300 rounded-md"
          />
          <div className="ml-4 flex flex-col">
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
        </div>{" "}
        <div className="ml-2 flex flex-col w-full md:w-auto pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Description: </p>
            <span className="font-medium md:font-bold">
              {product?.gemstoneDescription.length > 20
                ? `${product.gemstoneDescription.slice(0, 20)}...`
                : product.gemstoneDescription}
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

export default ProductItem;
