import React from "react";
import Brand1 from "../../assets/brand/br-1.png";
import Brand2 from "../../assets/brand/br-2.png";
import Brand3 from "../../assets/brand/br-3.png";
import Brand4 from "../../assets/brand/br-4.png";
import Brand5 from "../../assets/brand/br-5.png";

const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="py-8 my-24  md:block bg-gray-200 dark:bg-white/10"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5
        place-items-center opacity-50"
        >
          <img src={Brand1} alt="" className="w-[80px] dark:invert" />
          <img src={Brand2} alt="" className="w-[80px] dark:invert" />
          <img src={Brand3} alt="" className="w-[80px] dark:invert" />
          <img src={Brand4} alt="" className="w-[80px] dark:invert" />
          <img src={Brand5} alt="" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
