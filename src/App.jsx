// App.jsx
import { React, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";
import Cart from "./pages/CartPage";
import WishList from "./pages/WishListPage";
import LocalStorage from "./components/LocalStorage/LocalStorage";
import UserRegister from "./components/User/UserRegister";
import UserLogin from "./components/User/UserLogin";
import UserProfile from "./components/User/UserProfile";
import axios from "axios";
import ProtectedRoute from "./components/User/ProtectedRoute";
import UserDashBoard from "./components/Dashboard/UserDashBoard";
import LayoutDashBoard from "./components/Dashboard/LayoutDashboard";
import ProductDashBoard from "./components/Dashboard/ProductDashBoard";
import OrderDashBoard from "./components/Dashboard/OrderDashBoard";
import ShapeDashBoard from "./components/Dashboard/ShapeDashBoard";
import JewelryDashboard from "./components/Dashboard/JewelryDashboard";
import UserOrderHistory from "./components/Orders/UserOrderHistory";
import Address from "./components/Address/Address";
function App() {
  const steps = ["Gemstone Category", "Gemstone Shape", "Jeweller Setting"];

  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [selectedProduct, setSelectedProduct] = useState({
    gemstones: [],
    shapes: [],
    jewelry: [],
  });

  const [selectedBy, setSelectedBy] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [storedWishList, setStoredWishList] = LocalStorage("WishList", []);
  const [storedCart, setStoredCart] = LocalStorage("Cart", []);

  const [userData, setUserData] = useState(null);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);

  function getUserData() {
    setIsUserDataLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5125/api/v1/User/Profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // null => res.data
        setUserData(res.data);
        setIsUserDataLoading(false);
      })
      .catch((err) => {
        setIsUserDataLoading(false);
        console.log(err);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  let isAuthenticated = userData ? true : false;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          someProp="value"
          userData={userData}
          isAuthenticated={isAuthenticated}
          storedWishList={storedWishList}
          storedCart={storedCart}
        />
      ),
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
              storedCart={storedCart}
              setStoredCart={setStoredCart}
              userInput={userInput}
              setUserInput={setUserInput}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          ),
        },
        {
          path: "/Cart",
          element: (
            <Cart
              storedCart={storedCart}
              setStoredCart={setStoredCart}
              userData={userData}
            />
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
        {
          path: "/Register",
          element: <UserRegister />,
        },
        { path: "/Login", element: <UserLogin getUserData={getUserData} /> },
        {
          path: "/Profile",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              element={
                <UserProfile userData={userData} setUserData={setUserData} />
              }
            />
          ),
        },
        { path: "/orders", element: <UserOrderHistory userData={userData} /> },
        { path: "/Address", element: <Address /> },
        {
          path: "/",
          element: <LayoutDashBoard />,
          children: [
            {
              path: "/Product-Dashboard",
              element: (
                <ProtectedRoute
                  isUserDataLoading={isUserDataLoading}
                  isAuthenticated={isAuthenticated}
                  shouldCheckAdmin={true}
                  userData={userData}
                  element={<ProductDashBoard />}
                />
              ),
            },
            {
              path: "/User-Dashboard",
              element: (
                <ProtectedRoute
                  isUserDataLoading={isUserDataLoading}
                  isAuthenticated={isAuthenticated}
                  shouldCheckAdmin={true}
                  userData={userData}
                  element={<UserDashBoard />}
                />
              ),
            },
            {
              path: "/Shape-Dashboard",
              element: (
                <ProtectedRoute
                  isUserDataLoading={isUserDataLoading}
                  isAuthenticated={isAuthenticated}
                  shouldCheckAdmin={true}
                  userData={userData}
                  element={<ShapeDashBoard />}
                />
              ),
            },
            {
              path: "/jewelry-Dashboard",
              element: (
                <ProtectedRoute
                  isUserDataLoading={isUserDataLoading}
                  isAuthenticated={isAuthenticated}
                  shouldCheckAdmin={true}
                  userData={userData}
                  element={<JewelryDashboard />}
                />
              ),
            },
            {
              path: "/Order-Dashboard",
              element: (
                <ProtectedRoute
                  isUserDataLoading={isUserDataLoading}
                  isAuthenticated={isAuthenticated}
                  shouldCheckAdmin={true}
                  userData={userData}
                  element={<OrderDashBoard />}
                />
              ),
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
