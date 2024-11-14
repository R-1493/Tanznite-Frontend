import React from "react";
import background from "../../images/Background/backgroundIntroduction.svg";

const IntroductionSection = () => {
  return (
    <section className="pt-10 bg-gray-300 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative">
      <div className="px-4 mx-auto sm:px-6 lg:pl-8 max-w-7xl h-[50vh] lg:w-[50vh] lg:h-[90vh]">
        <div className="relative cormorant-infant-light  z-10 flex flex-col justify-center items-center h-full">
          <div>
            <h2 className="text-center text-3xl font-bold text-white">
              With Love , Since 1990
            </h2>
            <p className="text-center text-lg text-white mt-4">
              An homage to an iconic motif from 1975, T by TANZANITE is an
              expression of love’s endless potential.
            </p>
            <div className="flex justify-center">
              <Link
                to="/ShopPage"
                className="bg-white text-black px-4 py-2 mt-4"
              >
                shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <img
          src={background}
          className="w-full h-full object-cover"
          alt="Background Image"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;
