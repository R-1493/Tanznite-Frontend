import React from "react";
import HeroShopSection from "../components/Hero/HeroShopSection";
import Products from "../components/products/Products";
import HorizontalStepper from "../components/products/Stepper/HorizontalStepper";

function ShopPage(props) {
  const {
    isOpen1,
    setIsOpen1,
    isOpen2,
    setIsOpen2,
    selectedProduct,
    setSelectedProduct,
    selectedBy,
    setSelectedBy,
    products,
    currentStep,
    setCurrentStep,
    setActiveStep,
    activeStep,
    steps,
    skipped,
    setSkipped,
  } = props;
  return (
    <>
      <HeroShopSection />
      <div className="bg-[#D4D4D4]">
        <HorizontalStepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          steps={steps}
          skipped={skipped}
          setSkipped={setSkipped}
        />
        <Products
          isOpen1={isOpen1}
          setIsOpen1={setIsOpen1}
          isOpen2={isOpen2}
          setIsOpen2={setIsOpen2}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          selectedBy={selectedBy}
          setSelectedBy={setSelectedBy}
          products={products}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          steps={steps}
          skipped={skipped}
          setSkipped={setSkipped}
        />
      </div>
    </>
  );
}

export default ShopPage;
