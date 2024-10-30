// App.jsx
import { React, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [products, setProducts] = useState([]);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBy, setSelectedBy] = useState([]);

  let url = "https://api.escuelajs.co/api/v1/products";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress>
          <span className="visually-hidden">Loading...</span>
        </CircularProgress>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
              products={products}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
