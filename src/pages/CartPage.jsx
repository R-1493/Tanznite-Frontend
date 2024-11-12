import React from "react";
import Cart from "../components/Cart/Cart";
function CartPage(props) {
  const { storedCart, setStoredCart, userData } = props;

  return (
    <div>
      <Cart
        storedCart={storedCart}
        setStoredCart={setStoredCart}
        userData={userData}
      />
    </div>
  );
}

export default CartPage;
