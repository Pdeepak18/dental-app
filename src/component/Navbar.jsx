import { React, useEffect, useState } from "react";
import logo from "../images/logo_3.png";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive(!isActive);
  };

  return (
    <>
      <nav className="bg-blue-950 ">
        <div className="relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex items-center justify-between ">
          <Link to="/">
            <div>
              <a href="/" className="cursor-pointer py-7 pr-7 block">
                <img src={logo} alt="" width="200" height="30" />
              </a>
              <p></p>
            </div>
          </Link>

          <div>
            <ul className="hidden gap-5 lg:flex">
              <Link to="/">
                <li className="text-black relative font-inherit py-7 hover:font-bold cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/" className="text-xl ">
                    Home
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/aboutus">
                <li className="text-black relative font-inherit py-7 hover:font-bold cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/aboutus" className="text-xl">
                    About Us
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
              <Link to="/ourproducts">
                <li className="text-black relative font-inherit py-7 hover:font-bold cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/ourproducts" className="text-xl">
                    Our Products
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>{" "}
              </Link>

              <Link to="/contactus">
                <li className="text-black relative font-inherit py-7 hover:font-bold cursor-pointer transition-all duration-200 text-xl group">
                  <a href="/contactus" className="text-xl">
                    {" "}
                    Contact Us
                  </a>
                  <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
                </li>
              </Link>
            </ul>

            {/* Side icon for small screen */}
            <div className="flex gap-5 lg:hidden">
              <MdOutlineFormatListBulleted
                fontSize="2rem"
                color="black"
                className="bg-salmon cursor-pointer"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className={isActive ? "bg-blue-950  " : "hidden"}>
        <div className="relative w-10/12 md:w-11/12 max-w-[1080px] mx-auto flex items-center justify-between lg:hidden">
          <ul className="">
            <Link to="/">
              <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                {" "}
                <a href="/" className="text-xl">
                  Home
                </a>
                <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
              </li>
            </Link>
            <Link to="/aboutus">
              <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                {" "}
                <a href="/aboutus" className="text-xl">
                  About Us
                </a>
                <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
              </li>
            </Link>
            <Link to="/ourproducts">
              <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                <a href="/ourproducts" className="text-xl">
                  Our Products
                </a>
                <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
              </li>
            </Link>

            <Link to="/contactus">
              <li className="text-black relative font-inherit py-7 hover:text-lightBlue hover:text-2xl cursor-pointer transition-all duration-200 text-xl group">
                {" "}
                <a href="/contactus" className="text-xl">
                  {" "}
                  Contact Us
                </a>
                <div className="absolute w-full h-1 bg-black	 bottom-0 opacity-0 group-hover:opacity-100"></div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
