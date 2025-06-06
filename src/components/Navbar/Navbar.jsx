import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    link: "/#blog",
  },
];
const DropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900
    dark:text-white"
    >
      <div className="py-4 flex">
        <div
          className="container flex justify-between
        items-center"
        >
          {/* Logo and Links section */}
          <div
            className="flex gap-4
          items-center"
          >
            <a
              href="#"
              className="text-primary
            font-semibold tracking-widest
            text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu Items */}
            <div className=" lg:blog">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4
                    font-semibold text-gray-500
                    hover:text-black
                    dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href=""
                    className="flex items-center gap-[2px]
                  font-semibold text-gray-500
                  dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className=" group-hover:rotate-180 duration-200 " />
                    </span>
                  </a>

                  {/* dropdown link */}
                  <div
                    className="absolute z-[9999] hidden 
                  group-hover:block w-[200px] rounded-md bg-white
                  shadow-md dark:bg-gray-900 p-2 dark:text-white"
                  >
                    <ul className="space-y-2">
                      {DropDownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="text-gray-500 dark:hover:text-white
                             hover:bg-primary/20 p-2 inline-block
                            dark:hover:bg-gray-800 w-full duration-200 rounded-md
                            font-semibold"
                          >
                            <span>{data.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div
            className="flex justify-between
          items-center gap-4"
          >
            {/* Search Bar section */}
            <div
              className="relative group hidden
            sm:block "
            >
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch
                className="text-xl
              text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2
              right-3 duration-200"
              />
            </div>
            {/* Order Button section */}
            <button className="relative p-3" onClick={() => handleOrderPopup()}>
              <FaCartShopping
                className="text-xl text-gray-600
              dark:text-gray-400 "
              />
              <div
                className="w-4 h-4 bg-red-500 text-white
              rounded-full absolute top-0 right-0 flex
              items-center justify-center text-xs "
              >
                4
              </div>
            </button>

            {/* Dark Mode section  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
