import React from "react";
import chooseGemstone from "../../images/Icon/gem-stone-blue.svg";
import jewelry from "../../images/Icon/jewelry-blue.svg";
import emerald from "../../images/Icon/emerald-blue.svg";

function ShopJourneySection() {
  return (
    <section className="py-10 bg-[#E3E3E3] sm:py-16 lg:py-24">
      <div className="cormorant-infant-light px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="title text-center sm:text-4xl lg:text-5xl">
            Shop Journey
          </h2>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
          <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-white h-full"
              aria-hidden="true"
            ></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <img src={chooseGemstone} className="h-10 w-10" />
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-black">
                Choose Gemstone
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Select your gemstone mindfully, as it embodies your unique
                story. Each gem whispers a tale of beauty and strength,
                reflecting your dreams and essence.
              </p>
            </div>
          </li>

          <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-white h-full"
              aria-hidden="true"
            ></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <img src={emerald} className="h-10 w-10" />
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-black">
                Gemstone Shape
              </h3>
              <p className="mt-4 text-base text-gray-600">
                The shape reveals the inner brilliance of the gem. From classic
                elegance to modern allure, each cut unveils a facet of its
                enchanting personality.
              </p>
            </div>
          </li>

          <li className="relative flex items-start">
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <img src={jewelry} className="h-10 w-10" />
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-black">
                Jewellery Setting
              </h3>
              <p className="mt-4 text-base text-gray-600">
                The setting frames the gem's beauty. Whether vintage or modern,
                it enhances the gem's shine. Let it reflect your style and
                sophistication.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ShopJourneySection;
