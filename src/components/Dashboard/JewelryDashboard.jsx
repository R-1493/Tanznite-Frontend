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
import chooseGemstone from "../../images/Icon/gem-stone-blue.svg";
import JewelryItem from "./JewelryItem";

function JewelryDashboard(props) {
  const [productResponse, setProductResponse] = useState({
    jewelry: [],
    totalCount: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [productInfo, setProductInfo] = useState({
    jewelryName: "",
    jewelryType: "",
    jewelryPrice: null,
    jewelryImage: "",
    description: "",
  });

  function fetchData() {
    let url =
      "https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/Jewelry?Limit=100&Offset=0&MinPrice=0&MaxPrice=100000";
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

  function onChangeHandlerJewelry(event) {
    console.log(event, "event");
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  function createJewelry() {
    const token = localStorage.getItem("token");
    const url = "https://sda-3-online-backend-teamwork-x5ff.onrender.com/api/v1/Jewelry";
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
          fetchData();
          setIsOpen(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsOpen(false);
      });
  }
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-gray-700 ">
          <h1> Jewelry DashBoard </h1>
          <p className="text-sm font-thin">
            jewelry total:{productResponse.totalCount}
          </p>
        </span>
        <div className="flex gap-6">
          <Button
            variant="outlined"
            color="gray"
            onClick={() => setIsOpen(true)}
            className="flex items-center px-6 py-2 mx-auto tracking-wide capitalize transition-colors duration-300 transform bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <span className="mr-1 text-black">+</span>
            <img
              src={chooseGemstone}
              className="h-5 w-5"
              alt="Choose Gemstone"
            />
          </Button>
        </div>
      </div>
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
              onClick={createJewelry}
              className="mt-3 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500"
            >
              Save
            </button>
          </div>
        </div>
      )}

      <div>
        {productResponse.jewelry.length > 0 ? (
          productResponse.jewelry.map((product) => (
            <JewelryItem
              key={product.jewelryId}
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

export default JewelryDashboard;
