import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaYoutube,
} from "react-icons/fa";

const FooterLinks = [
  {
    id: 1,
    name: "About Us",
    link: "#",
  },
  {
    id: 2,
    name: "Blog",
    link: "#",
  },
  {
    id: 3,
    name: "All Products",
    link: "#",
  },
  {
    id: 4,
    name: "Locations Map",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-6 px-4">
            <a
              href="#"
              className="text-primary
            font-semibold tracking-widest
            text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing <br />
              elit. Ullam in veniam animi <br /> voluptate <br />
              magni excepturi!
            </p>
            <p className="text-gray-500 mt-4">Made with ❤️ by Amazing Coding</p>
            <a
              href="http://www.youtube.com/@mahmud.5428"
              target="_blank"
              className="inline-block mt-4 bg-primary/90 text-white px-4 py-2 text-sm  rounded-full hover:scale-105 duration-200"
            >
              Visit Our Youtube Chanel
            </a>
          </div>

          {/* Footer Links */}
          <div
            className="col-span-2 grid grid-cols-2
          sm:grid-cols-3 md:pl-10"
          >
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li className="" key={index}>
                    <a
                      href={data.link}
                      className="text-gray-500
                      hover:text-primary duration-300"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li className="" key={index}>
                    <a
                      href={data.link}
                      className="text-gray-500
                      hover:text-primary duration-300"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* company address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Tashkent Xushnazar Mahmud</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+998971911017</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-6 mt-6">
                  <a href="#">
                    <FaInstagram className="text-2xl  hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaYoutube className="text-2xl  hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-2xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
