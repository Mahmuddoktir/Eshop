import React from "react";
import Hading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to use the new features of Bootstrap 5",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "12 April 2025 by Xushnazar Makhmud",
    img: Img1,
    aosDelay: "0",
  },
  {
    id: 2,
    title: "How to use the new features of Bootstrap 5",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    date: "12 April 2025 by Xushnazar Makhmud",
    img: Img2,
    aosDelay: "200",
  },
  {
    id: 3,
    title: "How to use the new features of Bootstrap 5",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    date: "12 April 2025 by Xushnazar Makhmud",
    img: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* header section */}
        <Hading title={"Recent News "} subtitle={"Explore our blogs"} />
        {/* blog section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7"
        >
          {/* Blog Card */}

          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="bg-white dark:bg-gray-900"
              key={data.id}
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-[220px] object-cover  rounded-2xl
                  hover:scale-105 transition duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.date}</p>
                <h1 className="font-bold line-clamp-1">{data.title}</h1>
                <p
                  className="line-clamp-2 text-sm text-gray-600
                dark:text-gray-400"
                >
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
