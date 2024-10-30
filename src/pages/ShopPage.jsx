import React from "react";
import HeroShopSection from "../components/Hero/HeroShopSection";
import Products from "../components/products/Products";
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
  } = props;
  return (
    <>
      <HeroShopSection />
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
      />
    </>
  );
}

export default ShopPage;
