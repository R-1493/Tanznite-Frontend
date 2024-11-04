// App.jsx
import { React, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

function App() {
  const steps = ["Gemstone Category", "Gemstone Shape", "Jeweller Setting"];

  const [currentStep, setCurrentStep] = useState(1);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBy, setSelectedBy] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  // const [gemstones, setGemstones] = useState({ gemstones: [], totalCount: 0 });
  // const [gemstonesShape, setGemstonesShape] = useState({
  //   gemstonesShape: [],
  //   totalCount: 0,
  // });
  // const [jewelry, setJewelry] = useState({
  //   jewelry: [],
  //   totalCount: 0,
  // });
  // const [page, setPage] = useState(1);

  // const HandleChange = (event, value) => {
  //   setPage(value);
  // };
  // let limit = 4;
  // let offset = [page - 1] * limit;

  // const gemstoneUrl = `http://localhost:5125/api/v1/Gemstone?Limit=${limit}&Offset=${offset}&MinPrice=0&MaxPrice=10000`;
  // // const gemstonesShapeUrl = `http://localhost:5125/api/v1/GemstoneShape?Limit=${limit}&Offset=${offset}&MinPrice=0&MaxPrice=10000`;
  // // const JewelryUrl = `http://localhost:5125/api/v1/Jewelry?Limit=${limit}&Offset=${offset}&MinPrice=0&MaxPrice=10000`;

  // // const gemstoneUrl = "http://localhost:5125/api/v1/Gemstone";
  // // const gemstonesShapeUrl = "http://localhost:5125/api/v1/GemstoneShape";
  // // const JewelryUrl = "http://localhost:5125/api/v1/Jewelry";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(gemstoneUrl);
  //       console.log(response);
  //       console.log(response.data);
  //       setGemstones(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError("Failed to fetch data");
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [offset]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(JewelryUrl);
  //       console.log(response);
  //       console.log(response.data);
  //       setJewelry(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError("Failed to fetch data");
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [offset]);

  // console.log(gemstones);
  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <CircularProgress>
  //         <span className="visually-hidden">Loading...</span>
  //       </CircularProgress>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout someProp="value" />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/ShopPage",
          element: (
            <ShopPage
              isOpen1={isOpen1}
              setIsOpen1={setIsOpen1}
              isOpen2={isOpen2}
              setIsOpen2={setIsOpen2}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              selectedBy={selectedBy}
              setSelectedBy={setSelectedBy}
              // gemstones={gemstones.gemstones}
              // jewelry={jewelry.jewelry}
              // gemstonesShape={gemstonesShape.gemstonesShape}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              steps={steps}
              skipped={skipped}
              setSkipped={setSkipped}
              // gemstonesTotalCount={gemstones.totalCount}
              // gemstonesShapeTotalCount={gemstonesShape.totalCount}
              // jewelryTotalCount={jewelry.totalCount}
              // page={page}
              // HandleChange={HandleChange}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
