// App.jsx
import { React, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout/Layout";
import ShopPage from "./pages/ShopPage";


function App() {
  const steps = ["Gemstone Category", "Gemstone Shape", "Jeweller Setting"];

  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBy, setSelectedBy] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());


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
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
