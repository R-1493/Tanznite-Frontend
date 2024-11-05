// App.jsx
import { React, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import Cart from "./pages/CartPage";
import WishList from "./pages/WishListPage";
import LocalStorage from "./components/LocalStorage/LocalStorage";
function App() {
  const steps = ["Gemstone Category", "Gemstone Shape", "Jeweller Setting"];

  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    gemstones: [],
    shapes: [],
    jewelry: [],
  });
  const [selectedBy, setSelectedBy] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [storedWishList, setStoredWishList] = LocalStorage("WishList", []);
  const [storedCart, setStoredCart] = useState();

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
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              steps={steps}
              skipped={skipped}
              setSkipped={setSkipped}
              storedWishList={storedWishList}
              setStoredWishList={setStoredWishList}
            />
          ),
        },
        {
          path: "/Cart",
          element: (
            <Cart storedCart={storedCart} setStoredCart={setStoredCart} />
          ),
        },
        {
          path: "/WishList",
          element: (
            <WishList
              storedWishList={storedWishList}
              setStoredWishList={setStoredWishList}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
