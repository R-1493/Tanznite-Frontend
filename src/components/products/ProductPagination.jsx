import React from "react";
import Pagination from "@mui/material/Pagination";

function ProductPagination(props) {
  const { totalCount, page, HandleChange } = props;
  return (
    <div>
      <Pagination count={totalCount} page={page} onChange={HandleChange} />
    </div>
  );
}

export default ProductPagination;
