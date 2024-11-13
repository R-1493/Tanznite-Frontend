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
    <div className="max-w-full mx-auto ">
      <div className="p-3 flex flex-col md:flex-row m-4 relative overflow-hidden w-full sm:w-[90%] md:w-[80%] lg:w-[60%] rounded-lg shadow-lg group border-[1.7px] border-gray-400">
        {" "}
        <div className="max-w-2xl w-full px-4 py-4 space-y-4 h-auto">
          <p className="text-lg font-bold">Order Id: #{order.orderId}</p>
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
                className="flex flex-col border-b border-gray-300 pb-4 mb-4"
              >
                <div className="flex items-center justify-center">
                  <div className="h-[80%] overflow-hidden">
                    <div className="relative flex items-center justify-center h-full">
                      <img
                        className="object-fill object-center h-full w-full"
                        src={item.jewelry.jewelryImage}
                        alt={item.jewelry.jewelryName}
                      />
                      <img
                        className="absolute object-cover h-full w-full"
                        src={item.gemstoneShape.gemstoneImage}
                        alt={item.gemstoneShape.shapeName}
                      />
                    </div>{" "}
                  </div>
                </div>
                <div className="flex justify-start mt-5">
                  <span className="block opacity-75 -mb-1 mr-5">Jewelry:</span>
                  <span className="block font-semibold text-lg">
                    {item.jewelry.jewelryType} {item.jewelry.jewelryName}
                  </span>
                </div>
                <div className="flex justify-start mt-2">
                  <span className="block opacity-75 -mb-1 mr-5">
                    Gemstone Cut:
                  </span>
                  <span className="block font-semibold text-lg">
                    {item.gemstoneShape.shapeName}
                  </span>
                </div>
                <span className="font-light text-start text-sm mt-3">
                  {item.gemstoneShape.gemstoneShapeInfo}
                </span>
                <div className="relative text-black px-3 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1 mr-5">Weight</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-lg mr-5 pr-5">
                      {item.gemstoneShape.gemstoneShapWeight} grams
                    </span>
                    <span className="block bg-white rounded-full text-purple-600 text-lg font-bold px-3 py-2 leading-none">
                      {item.finalPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}{" "}
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
