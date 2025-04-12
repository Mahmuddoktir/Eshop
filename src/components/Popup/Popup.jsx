import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div
            aos="fade-up"
            className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm"
          >
            <div
              className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        p-4 shadow-md bg-white dark:bg-gray-900
        dar:text-white duration-200 rounded-md"
            >
              {/* Header section */}
              <div className="flex items-center justify-between">
                <h1>Order Now</h1>
                <div>
                  <IoCloseOutline
                    onClick={() => setOrderPopup(false)}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>
              {/* Form section */}
              <div>
                <input type="text" placeholder="Name" className="form-input" />
                <input type="text" placeholder="Email" className="form-input" />
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-input"
                />
              </div>
              <div className="mt-4 text-center">
                <Button
                  text="Order Now"
                  bgColor="bg-brandGreen"
                  textColor="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
