import React, { useState, useEffect } from "react";
import chooseGemstone from "../../images/Icon/gem-stone-blue.svg";
import axios from "axios";
import {
  Button,
  Popover,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import ProductItem from "./ProductItem";

function ProductDashBoard(props) {
  const [productResponse, setProductResponse] = useState({
    gemstones: [],
    totalCount: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const [productInfo, setProductInfo] = useState({
    gemstoneType: "",
    gemstoneColor: "",
    GemstoneImage: "",
    gemstoneClarity: "",
    gemstonePrice: 0,
    gemstoneDescription: "",
    categoryId: "",
  });

  const [CategoryInfo, setCategoryInfo] = useState({
    categoryName: "",
  });

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function fetchData() {
    let url =
      "http://localhost:5125/api/v1/Gemstone?Limit=100&Offset=0&MinPrice=0&MaxPrice=10000";
    axios
      .get(url)
      .then((response) => {
        setProductResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchCategory() {
    let url = "http://localhost:5125/api/v1/Categories";
    axios
      .get(url)
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  function onChangeHandlerGemstone(event) {
    console.log(event, "event");
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
  }

  function onChangeHandlerCategory(event) {
    console.log(event, "event");
    setCategoryInfo({
      ...CategoryInfo,
      [event.target.name]: event.target.value,
    });
  }

  function createGemstone() {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5125/api/v1/Gemstone";
    axios
      .post(url, productInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Product is created successfully ");
          setIsOpen2(false);
          fetchData();
        }
      })
      .catch((error) => {
        console.log(error);
        setIsOpen2(false);
      });
  }
  console.log(productInfo);
  function createCategory() {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5125/api/v1/Categories";

    if (!CategoryInfo.categoryName.trim()) {
      alert("Category name cannot be empty or whitespace.");
      return;
    }

    if (/^\d+$/.test(CategoryInfo.categoryName)) {
      alert("Category name should be a string.");
      return;
    }

    axios
      .post(url, CategoryInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Category is created successfully");
          setIsOpen2(false);
          fetchData();
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data.includes(
            "A category with this name already exists."
          )
        ) {
          alert("A category with this name already exists.");
          setIsOpen2(false);
        } else {
          alert("An unexpected error occurred.");
          setIsOpen2(false);
        }
      });
  }
  return (
    <div>
      <div class="flex items-center justify-between mb-4">
        <span class="text-lg font-bold text-gray-700 ">
          <h1> Gemstone DashBoard </h1>
        </span>
        <div className="flex gap-6">
          <Button
            aria-describedby={id}
            variant="outlined"
            color="gray"
            onClick={() => setIsOpen1(true)}
            className="flex items-center px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <span className="mr-1 text-black">+</span>
            <img
              src={chooseGemstone}
              className="h-5 w-5"
              alt="Choose Gemstone"
            />
          </Button>
          <Button
            aria-describedby={id}
            variant="outlined"
            color="gray"
            onClick={() => setIsOpen2(true)}
            className="flex items-center px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <span className="mr-1 text-black">+</span>
            <p className="text-[#6F64B1]">Category</p>
          </Button>
        </div>
      </div>
      {isOpen1 && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setIsOpen1(false)}
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
              onClick={() => setIsOpen1(false)}
              className="mt-3 ml-4 mr-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
            >
              Close
            </button>
            <button
              onClick={createGemstone}
              className="mt-3 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {isOpen2 && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setIsOpen2(false)}
        >
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold">Create new gemstone</h2>

            <div className="py-2 sm:py-3 grid grid-cols-1 gap-4">
              <label className="text-base font-medium text-gray-900">
                Category Name{" "}
              </label>

              <TextField
                id="categoryName"
                name="categoryName"
                type="text"
                placeholder="Enter the category name"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerCategory}
              />
            </div>

            <button
              onClick={() => setIsOpen2(false)}
              className="mt-3 ml-4 mr-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500"
            >
              Close
            </button>
            <button
              onClick={createCategory}
              className="mt-3 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500"
            >
              Save
            </button>
          </div>
        </div>
      )}

      <div>
        {productResponse.gemstones.length > 0 ? (
          productResponse.gemstones.map((product) => (
            <ProductItem
              key={product.gemstoneId}
              product={product}
              fetchData={fetchData}
            />
          ))
        ) : (
          <p>No gemstones available.</p>
        )}
      </div>
    </div>
  );
}

export default ProductDashBoard;
