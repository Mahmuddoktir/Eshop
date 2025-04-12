import React from "react";

import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";

import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90
          to-gray-100 text-white rounded-3xl relative  h-[320px]
          flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p
                  className="text-4xl xl:text-5xl 
                opacity-20 font-bold mb-2"
                >
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[250px] absolute
             -right-2"
            />
          </div>
          {/* second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90
          to-brandGreen/90 text-white rounded-3xl relative  h-[320px]
          flex items-end"
          >
            <div>
              <div className="mb-12">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p
                  className="text-4xl xl:text-5xl 
                opacity-40 font-bold mb-2"
                >
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[250px] absolute -right-4 lg:top-[98px]
            bottom-0 "
            />
          </div>
          {/* third col */}
          <div
            className=" py-10 pl-5 bg-gradient-to-br from-brandBlue
          to-brandBlue/90 text-white rounded-3xl relative  h-[320px]
          flex items-end"
          >
            <div>
              <div className="mb-12">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p
                  className="text-4xl xl:text-5xl 
                opacity-40 font-bold mb-2"
                >
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[200px] absolute -right-2 lg:top-[110px]
            bottom-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
