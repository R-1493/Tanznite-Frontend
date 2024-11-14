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
function ShapeItem(props) {
  const { product, fetchData, gemstoneList } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [productInfo, setProductInfo] = useState({
    shapeName: product.shapeName || "",
    gemstoneImage: product.gemstoneImage || "",
    gemstoneShapPrice: product.gemstoneShapPrice || null,
    gemstoneShapWeight: product.gemstoneShapWeight || "",
    gemstoneShapeInfo: product.gemstoneShapeInfo || "", // Default to empty string (optional)
    gemstoneId: product.gemstoneId || "",
  });

  // Handler for updating the form state
  function onChangeHandlerGemstoneShape(event) {
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
  }

  // Function to update product
  function updateProduct() {
    const token = localStorage.getItem("token");
    const url = `https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/GemstoneShape/${product.gemstoneShapeId}`;

    const updatedData = {};

    // Include only non-empty fields (optional GemstoneShapeInfo will be omitted if empty)
    Object.keys(productInfo).forEach((key) => {
      if (productInfo[key] !== "" && productInfo[key] !== null) {
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
      .catch((error) => {
        if (error.response) {
          alert(
            `Error: ${error.response.data.message || "Something went wrong!"}`
          );
        } else {
          console.log(error);
        }
      });
  }

  function deleteProductById() {
    const token = localStorage.getItem("token");
    const url = `https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/GemstoneShape/${product.gemstoneShapeId}`;
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
            <h2 className="text-lg font-semibold">Update Gemstone Shape</h2>

            <div className="py-2 sm:py-3 grid grid-cols-2 gap-4">
              <label className="text-base font-medium text-gray-900">
                Gemstone Shape Name
              </label>
              <TextField
                id="shapeName"
                name="shapeName"
                type="text"
                placeholder="Enter the shape name"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
              <label className="text-base font-medium text-gray-900">
                Gemstone Shape Weight
              </label>
              <TextField
                id="gemstoneShapWeight"
                name="gemstoneShapWeight"
                type="text"
                placeholder="Enter the shape weight"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
            </div>

            <div className="py-2 sm:py-3 grid grid-cols-2 gap-4">
              <label className="text-base font-medium text-gray-900">
                Gemstone Shape Image URL
              </label>
              <TextField
                id="gemstoneImage"
                name="gemstoneImage"
                type="url"
                placeholder="Enter a URL"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
              <label className="text-base font-medium text-gray-900">
                Gemstone Shape Price
              </label>
              <TextField
                id="gemstoneShapPrice"
                name="gemstoneShapPrice"
                type="number"
                placeholder="Enter the Shape Price"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
            </div>

            <div className="py-2 sm:py-3 grid grid-cols-1">
              <label className="text-base font-medium text-gray-900">
                Gemstone Shape Description
              </label>
              <TextField
                id="gemstoneShapeInfo"
                name="gemstoneShapeInfo"
                type="text"
                placeholder="Enter a Description"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
            </div>

            <div className="py-2 sm:py-3 grid grid-cols-1 gap-4">
              <label>Gemstone</label>
              <FormControl fullWidth>
                <InputLabel id="gemstoneId">Gemstone ID</InputLabel>
                <Select
                  labelId="gemstoneId"
                  name="gemstoneId"
                  value={productInfo.gemstoneId}
                  label="Gemstone ID"
                  onChange={onChangeHandlerGemstoneShape}
                >
                  {gemstoneList.gemstones.map((gemstone) => (
                    <MenuItem
                      key={gemstone.gemstoneId}
                      value={gemstone.gemstoneId}
                    >
                      {gemstone.gemstoneType}
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
            alt={product.shapeName}
            src={product.gemstoneImage}
            className="w-16 h-16 md:w-24 md:h-24 object-cover border border-gray-300 rounded-md"
          />
          <div className="ml-4 flex flex-col">
            <div className="leading-snug text-sm text-gray-900 font-bold">
              {product?.shapeName}
            </div>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto py-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Color: </p>
            <span className="font-medium md:font-bold">
              {" "}
              {product?.gemstoneShapWeight}mm
            </span>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold flex items-center">
            <p className="inline md:hidden mr-1">Description: </p>
            <span className="font-medium md:font-bold">
              {product?.gemstoneShapeInfo.length > 20
                ? `${product.gemstoneShapeInfo.slice(0, 20)}...`
                : product.gemstoneShapeInfo}
            </span>
          </div>
        </div>
        <div className="ml-2 flex flex-col w-full md:w-auto   pb-3">
          <div className="leading-snug text-sm text-gray-900 font-bold ">
            <p className="inline md:hidden mr-1">Price :</p>{" "}
            <span className="font-medium md:font-bold">
              ${product?.gemstoneShapPrice}
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

export default ShapeItem;
