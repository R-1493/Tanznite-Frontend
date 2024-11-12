import React from "react";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

function OrderItem(props) {
  const { order } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex-shrink-0 m-4 relative overflow-hidden w-full sm:w-[90%] md:w-[80%] lg:w-[60%] rounded-lg shadow-lg group border-[1.7px] border-gray-400">
      {" "}
      <div class="max-w-2xl w-full px-4 py-4 space-y-4 h-auto">
        <p class="text-lg font-bold">Order Id: #{order.orderId}</p>
        <div className="flex justify-end items-end">
          {" "}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            className="h-10 w-10"
          >
            <ExpandMoreIcon className="h-10 w-10" />
          </ExpandMore>
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {order.singleProduct.map((item) => (
            <div
              key={item.singleProductId}
              class="flex flex-col border-b border-gray-300 pb-4 mb-4"
            >
              <div class="flex items-center justify-center">
                <img
                  class="object-cover w-20 h-20 md:w-32 md:h-32 rounded-xl ring ring-white border-[1.7px] border-gray-400"
                  src={item.jewelry.jewelryImage}
                  alt={item.jewelry.jewelryName}
                />
                <img
                  class="object-cover w-20 h-20 md:w-32 md:h-32 -mx-4 rounded-xl ring ring-white border-[1.7px] border-gray-400"
                  src={item.gemstoneShape.gemstoneImage}
                  alt={item.gemstoneShape.shapeName}
                />
              </div>
              <div class="flex justify-start mt-5">
                <span class="block opacity-75 -mb-1 mr-5">Jewelry:</span>
                <span class="block font-semibold text-lg">
                  {item.jewelry.jewelryType} {item.jewelry.jewelryName}
                </span>
              </div>
              <div class="flex justify-start mt-2">
                <span class="block opacity-75 -mb-1 mr-5">Gemstone Cut:</span>
                <span class="block font-semibold text-lg">
                  {item.gemstoneShape.shapeName}
                </span>
              </div>
              <span class="font-light text-start text-sm mt-3">
                {item.gemstoneShape.gemstoneShapeInfo}
              </span>
              <div class="relative text-black px-3 pb-6 mt-6">
                <span class="block opacity-75 -mb-1 mr-5">Weight</span>
                <div class="flex justify-between">
                  <span class="block font-semibold text-lg mr-5 pr-5">
                    {item.gemstoneShape.gemstoneShapWeight} grams
                  </span>
                  <span class="block bg-white rounded-full text-purple-600 text-lg font-bold px-3 py-2 leading-none">
                    {item.finalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}{" "}
        </Collapse>
      </div>
    </div>
  );
}

export default OrderItem;
