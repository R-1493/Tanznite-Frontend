import React from "react";
import background from "../../images/Background/BackgroundShopPage.svg";

const HeroShopSection = () => {
  return (
    <section className=" h-[60vh] lg:h-[90vh] overflow-hidden relative ">
      <div className="px-4 mx-auto sm:px-6 lg:pl-8 max-w-7xl relative h-full">
        <div className="relative lg:mt-6 h-full">
          <img
            src={background}
            className="min-h-[70%] w-full object-cover absolute bottom-0 backdrop-blur-md"
            alt="background"
          />
        </div>{" "}
        <div className="absolute inset-0 flex lg:top-[20%] m-20 lg:text-left text-center">
          <div className=" lg:pl-2 lg:pr-40 lg:ml-0 lg:w-1/2">
            <h1 className="text-lg lg:text-xl mb-5 tracking-[5px] font-light">
              TANZANITE
            </h1>
            <p className="text-center lg:text-left  font-thin text-lg lg:text-xl text-gray-500 tracking-[2px] ">
              An homage to an iconic motif from 1975, T by Tanzanite is an
              expression of love’s endless potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroShopSection;
