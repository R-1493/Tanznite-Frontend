import React from "react";
import Cart from "../components/Cart/Cart";
function CartPage(props) {
  const { storedCart, setStoredCart } = props;

  return (
    <div>
      <Cart storedCart={storedCart} setStoredCart={setStoredCart} />
    </div>
  );
}

export default CartPage;
