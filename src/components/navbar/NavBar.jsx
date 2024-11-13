import { React, useState } from "react";
import { Menu, X } from "lucide-react";
import img from "../../images/Icon/iconamoon_profile.svg";
import logo from "../../images/Logo/logo.svg";
import { IoIosArrowRoundDown } from "react-icons/io";
import { RiShoppingBag2Line as SlBag } from "react-icons/ri";
import { FiSearch as LiaSearchSolid } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import Badge from "@mui/material/Badge";

const NavItem = ({ icon, text }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    {icon}
    <span style={{ marginLeft: "0.5rem" }}>{text}</span>
  </div>
);

export default function NavBar(props) {
  const { userData, isAuthenticated, storedWishList, storedCart } = props;
  const [isOpen, setIsOpen] = useState(false);
  const WishListLength = storedWishList.length;
  const CartLength = storedCart.length;

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="pg-[FDFDFE] flex mx-auto py-5 sm:px-10 w-full item-center justify-between ">
        <div className="flex gap-10 justify-between text-gray-600">
          <a href="/Cart" className="md:flex">
            {" "}
            <Badge
              badgeContent={CartLength}
              color="secondary"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#9333EA",
                  fontSize: "0.7rem",
                  minWidth: "18px",
                  height: "18px",
                },
              }}
            >
              <SlBag className="h-4 w-4 ml-2 hover:text-indigo-700 " />{" "}
            </Badge>
          </a>

          <a href="/WishList" className="hidden md:flex">
            <Badge
              badgeContent={WishListLength}
              color="secondary"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#9333EA",
                  fontSize: "0.7rem",
                  minWidth: "18px",
                  height: "18px",
                },
              }}
            >
              <GoHeart className="h-4 w-4 hover:text-indigo-700  " />
            </Badge>
          </a>
        </div>

        <h1 className="text-center flex-1 tracking-[5px] font-light">
          TANZANITE
        </h1>

        <div className="gap-6 justify-between hidden md:flex group">
          {isAuthenticated ? (
            <a href="/Profile">
              <span className="rounded-full text-xs font-bold mb-4 z-20 bg-purple-500 w-8 h-8 p-2 flex justify-center items-center border">
                {userData?.name[0].charAt(0).toUpperCase()}
                {userData?.name[1].charAt(0).toUpperCase()}
              </span>
            </a>
          ) : (
            <>
              <a className="px-3 text-sm transition-opacity" href="/Login">
                Login
              </a>
              <a className="px-3 text-sm transition-opacity" href="/Register">
                SignUp
              </a>
            </>
          )}
        </div>

        <div className="flex inset-0 items-start z-20 justify-end mr-3 md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>

        <nav className="flex">
          {isOpen && (
            <div className="fixed inset-y-0 right-0 w-60 h-80 px-6 z-10 py-6 sm:ring-1 justify-center bg-gray-100 bg-opacity-40 backdrop-blur-md md:hidden">
              {isAuthenticated ? (
                <div className="flex flex-col space-y-4">
                  <a className="flex items-center" href="/Profile">
                    <span className="rounded-full text-xs font-bold z-20 bg-purple-500 w-8 h-8 p-2 flex justify-center items-center text-center border">
                      {userData?.name[0].charAt(0).toUpperCase()}
                      {userData?.name[1].charAt(0).toUpperCase()}
                    </span>
                    <span className="pl-2 text-sm my-4">Profile</span>
                  </a>
                  <NavItem
                    icon={
                      <Badge
                        badgeContent={WishListLength}
                        color="secondary"
                        sx={{
                          "& .MuiBadge-badge": {
                            backgroundColor: "#9333EA",
                            fontSize: "0.7rem",
                            minWidth: "18px",
                            height: "18px",
                          },
                        }}
                      >
                        <GoHeart className="h-4 w-4" />
                      </Badge>
                    }
                    text="Favorites"
                  />
                </div>
              ) : (
                <div className="fixed top-24 flex flex-col space-y-4 text-gray-600">
                  <Badge
                    badgeContent={WishListLength}
                    color="secondary"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#9333EA",
                        fontSize: "0.7rem",
                        minWidth: "18px",
                        height: "18px",
                      },
                    }}
                  >
                    <a href="/WishList">
                      <NavItem
                        icon={<GoHeart className="h-4 w-4" />}
                        text="Favorites"
                      />
                    </a>
                  </Badge>
                  <a
                    className={`flex items-center ${
                      window.location.pathname === "/Register"
                        ? "text-[#6F64B1]"
                        : "hover:text-[#6F64B1]"
                    }`}
                    href="/Register"
                  >
                    <p className="px-5 text-sm">Sign up</p>
                  </a>{" "}
                  <a
                    className={`flex items-center ${
                      window.location.pathname === "/Login"
                        ? "text-[#6F64B1]"
                        : "hover:text-[#6F64B1]"
                    }`}
                    href="/Login"
                  >
                    <p className="px-5 text-sm">Login</p>
                  </a>
                </div>
              )}
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
            className={`font-semibold duration-150 ease-in-out ${
              window.location.pathname === "/"
                ? "text-[#6F64B1]"
                : "hover:text-[#6F64B1]"
            }`}
            href="/"
          >
            Home
          </a>
          <a
            className={`font-semibold duration-150 ease-in-out ${
              window.location.pathname === "/ShopPage"
                ? "text-[#6F64B1]"
                : "hover:text-[#6F64B1]"
            }`}
            href="/ShopPage"
          >
            Shop
          </a>
          {isAuthenticated && userData?.role === "Admin" && (
            <a
              className={`font-semibold duration-150 ease-in-out ${
                window.location.pathname === "/User-Dashboard"
                  ? "text-[#6F64B1]"
                  : "hover:text-[#6F64B1]"
              }`}
              href="/User-Dashboard"
            >
              Dashboard
            </a>
          )}
        </nav>
      </header>
      {/* <div className="fixed flex m-10 z-40 justify-center items-center rounded-full bg-neutral-300 bottom-10 h-14 w-6">
        <IoIosArrowRoundDown className="h-8 w-8 m-auto" />
      </div> */}
    </>
  );
}
