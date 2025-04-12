import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Headphone from "./assets/hero/headphone.png";
import SmartWatch from "./assets/category/smartwatch2-removebg-preview.png";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% off",
  title: "Fine Smile",
  date: "7 April to 14 April",
  image: Headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% off",
  title: "happy hours",
  date: "7 April to 14 April",
  image: SmartWatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  // AOS animation
  React.useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden"
    >
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
