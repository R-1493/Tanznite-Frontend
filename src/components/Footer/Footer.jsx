import React from "react";
import logo from "../../images/Logo/logo.svg";

function Footer() {
  return (
    <section className="h-[40vh] bg-[#E3E3E3]  flex items-center justify-start px-4">
      <div className="text-left pl-10">
        <div className="flex items-center gap-3">
          <img src={logo} className="h-8 w-8" />
          <p className="cormorant-infant-light">TANZANITE</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
