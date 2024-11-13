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
import ShapeItem from "./ShapeItem";

function ShapeDashBoard(props) {
  const [productResponse, setProductResponse] = useState({
    gemstonesShape: [],
    totalCount: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [gemstoneList, setGemstoneList] = useState([]);

  const [productInfo, setProductInfo] = useState({
    shapeName: "",
    gemstoneImage: "",
    gemstoneShapPrice: null,
    gemstoneShapWeight: "",
    gemstoneShapeInfo: "",
    gemstoneId: "",
  });

  function fetchData() {
    let url =
      "http://localhost:5125/api/v1/GemstoneShape?Limit=100&Offset=0&MinPrice=0&MaxPrice=100000";
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
  console.log(gemstoneList);
  function fetchGemstone() {
    let url =
      "http://localhost:5125/api/v1/Gemstone?Limit=100&Offset=0&MinPrice=0&MaxPrice=100000";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setGemstoneList(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchGemstone();
  }, []);

  function onChangeHandlerGemstoneShape(event) {
    console.log(event, "event");
    setProductInfo({
      ...productInfo,
      [event.target.name]: event.target.value,
    });
  }
  function createGemstoneShape() {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5125/api/v1/GemstoneShape";
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
  console.log(productInfo);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-gray-700 ">
          <h1> Gemstone Shape DashBoard </h1>
          <p className="text-sm font-thin">
            Gemstone Shape total:{productResponse.totalCount}
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
            <h2 className="text-lg font-semibold">Create new gemstone</h2>

            <div className="py-2 sm:py-3 grid grid-cols-2 gap-4">
              <label className="text-base font-medium text-gray-900">
                Gemstone Shape Name
              </label>
              <label className="text-base font-medium text-gray-900">
                Gemstone Shap Weight{" "}
              </label>
              <TextField
                id="shapeName"
                name="shapeName"
                type="text"
                placeholder="Enter the shape name "
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
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
                Gemstone shape Image URL
              </label>
              <label className="text-base font-medium text-gray-900">
                Gemstone Shap Price
              </label>
              <TextField
                id="gemstoneImage"
                name="gemstoneImage"
                type="URL"
                placeholder="Enter a URL"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
              <TextField
                id="gemstoneShapPrice"
                name="gemstoneShapPrice"
                type="number"
                placeholder="Enter the Shap Price"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
            </div>
            <div className="py-2 sm:py-3 grid grid-cols-1 ">
              <label className="text-base font-medium text-gray-900">
                Gemstone Shape Description
              </label>
              <TextField
                id="gemstoneDescription"
                name="gemstoneDescription"
                type="text"
                placeholder="Enter a Description"
                className="block w-full mt-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                onChange={onChangeHandlerGemstoneShape}
              />
            </div>

            <div className="py-2 sm:py-3 grid grid-cols-1 gap-4">
              <label>Gemstone</label>

              <FormControl fullWidth>
                <InputLabel id="categoryId">gemstone id</InputLabel>
                <Select
                  labelId="gemstoneId"
                  name="gemstoneId"
                  value={productInfo.gemstoneId}
                  label="gemstone Id"
                  onChange={onChangeHandlerGemstoneShape}
                >
                  {gemstoneList.gemstones
                    .filter(
                      (value, index, self) =>
                        self.findIndex(
                          (t) => t.gemstoneType === value.gemstoneType
                        ) === index
                    ) 
                    .map((gemstone) => (
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
              onClick={createGemstoneShape}
              className="mt-3 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500"
            >
              Save
            </button>
          </div>
        </div>
      )}

      <div>
        {productResponse.gemstonesShape.length > 0 ? (
          productResponse.gemstonesShape.map((product) => (
            <ShapeItem
              key={product.gemstoneShapeId}
              product={product}
              gemstoneList={gemstoneList}
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

export default ShapeDashBoard;
