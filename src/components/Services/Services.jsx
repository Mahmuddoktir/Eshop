import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: (
      <FaCarSide
        className="text-4xl md:text-5xl 
    text-primary"
      />
    ),
    title: "Free Shipping",
    subtitle: "For all oder over $100",
  },
  {
    id: 2,
    icon: (
      <FaHeadphonesAlt
        className="text-4xl md:text-5xl 
    text-primary"
      />
    ),
    title: "24 x 7 Service",
    subtitle: "For all oder over $100",
  },
  {
    id: 3,
    icon: (
      <FaWallet
        className="text-4xl md:text-5xl 
    text-primary"
      />
    ),
    title: "Online Payment",
    subtitle: "For all oder over $100",
  },
  {
    id: 4,
    icon: (
      <FaCheckCircle
        className="text-4xl md:text-5xl 
    text-primary"
      />
    ),
    title: "Return",
    subtitle: "For all oder over $100",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container my-14 md:my-24">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4
        gap-y-8"
        >
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-start sm:flex-row
            gap-4"
            >
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-500 text-sm">{data.subtitle}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  //1.46;
};

export default Services;
