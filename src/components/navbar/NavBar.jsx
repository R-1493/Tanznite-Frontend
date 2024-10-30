import { React, useState } from "react";
import { Menu, X } from "lucide-react";
import img from "../../images/Icon/iconamoon_profile.svg";
import logo from "../../images/Logo/logo.svg";
import { IoIosArrowRoundDown } from "react-icons/io";
import { RiShoppingBag2Line as SlBag } from "react-icons/ri";
import { FiSearch as LiaSearchSolid } from "react-icons/fi";
import { GoHeart } from "react-icons/go";

const NavItem = ({ icon, text }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    {icon}
    <span style={{ marginLeft: "0.5rem" }}>{text}</span>
  </div>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="pg-[FDFDFE] flex mx-auto py-5 sm:px-10 w-full item-center justify-between ">
        <div className="flex gap-10 justify-between text-gray-600">
          <a href="/Cart">
            <SlBag className="h-4 w-4 ml-2 hover:text-indigo-700 md:flex" />{" "}
          </a>
          <a href="/WishList">
            <GoHeart className="h-4 w-4 hidden hover:text-indigo-700 md:flex" />
          </a>
          <a href="/">
            <LiaSearchSolid className="h-4 w-4 hover:text-indigo-700 hidden md:flex" />
          </a>
        </div>

        <h1 className="text-center flex-1 tracking-[5px] font-light">
          TANZANITE
        </h1>

        <div className="gap-6 justify-between hidden md:flex group">
          <img src={img} className="h-5 w-5" />
          <p className="px-3 text-sm  transition-opacity" href="/SignUp">
            SignUp
          </p>
        </div>

        <div className="flex inset-0 items-start z-20 justify-end mr-3 md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>

        <nav className="flex">
          {isOpen && (
            <div className="fixed inset-y-0 right-0 w-60 h-80 px-6 z-10 py-6 sm:ring-1justify-center bg-gray-100 bg-opacity-40 backdrop-blur-md md:hidden">
              <div className="fixed top-24 flex flex-col space-y-4  text-gray-600">
                <NavItem
                  icon={<LiaSearchSolid className="h-4 w-4" alt="#" />}
                  text="Search"
                />
                <NavItem
                  icon={<GoHeart className="h-4 w-4" alt="#" />}
                  text="Favorites"
                />

                <NavItem
                  icon={<img src={img} className="h-5 w-5" />}
                  text="Profile"
                />
                <div className="flex items-center">
                  <p className="px-5 text-sm">Sign up</p>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <header className="fixed bottom-10 left-1/2 z-40 flex h-12 -translate-x-1/2 items-center gap-4 rounded-full bg-neutral-100/50 px-5 backdrop-blur-md">
        <a className="flex items-center justify-center" href="/">
          <img src={logo} className="h-6 w-6 md:flex" />
        </a>
        <nav className="flex cormorant-infant-light items-center justify-center gap-3 text-gray-600">
          <a
            className="font-semibold  duration-150 ease-in-out hover:text-indigo-700"
            href="/"
          >
            Home
          </a>
          <a
            className="font-semibold  duration-150 ease-in-out hover:text-indigo-700"
            href="/ShopPage"
          >
            Shop
          </a>
          <a
            className="font-semibold duration-150 ease-in-out hover:text-indigo-700"
            href="/manger"
          >
            Manger
          </a>
        </nav>
      </header>
      <div className="fixed flex m-10 z-40 justify-center items-center rounded-full bg-neutral-300 bottom-10 h-14 w-6">
        <IoIosArrowRoundDown className="h-8 w-8 m-auto" />
      </div>
    </>
  );
}
