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
    currentStep,
    setCurrentStep,
    setActiveStep,
    activeStep,
    steps,
    skipped,
    setSkipped,
    // gemstonesTotalCount,
    // page,
    // HandleChange,
    // gemstones,
    // jewelry,
    // gemstonesShape,
    // gemstonesShapeTotalCount,
    // jewelryTotalCount,
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
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          steps={steps}
          skipped={skipped}
          setSkipped={setSkipped}
          // gemstonesTotalCount={gemstonesTotalCount}
          // gemstonesShapeTotalCount={gemstonesShapeTotalCount}
          // jewelryTotalCount={jewelryTotalCount}
          // page={page}
          // HandleChange={HandleChange}
          // gemstones={gemstones}
          // jewelry={jewelry}
          // gemstonesShape={gemstonesShape}
        />
      </div>
    </>
  );
}

export default ShopPage;
