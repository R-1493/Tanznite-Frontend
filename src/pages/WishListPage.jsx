import React from "react";
import WishList from "../components/WishList/WishList";

function WishListPage(props) {
  const { storedWishList, setStoredWishList } = props;

  return (
    <div>
      <WishList
        storedWishList={storedWishList}
        setStoredWishList={setStoredWishList}
      />
    </div>
  );
}

export default WishListPage;
