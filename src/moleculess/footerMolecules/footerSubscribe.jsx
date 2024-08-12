import React from "react";

const FooterSubscribe = () => {
  return (
    <div>
      <div className="w-[380px] h-[355px] flex justify-center items-center gap-7 bg-black rounded-md flex-col  ">
        <div className="text-white font-bold text-2xl">
          <h1>Subscribe to Updates</h1>
        </div>
        <div>
          <p className="text-white font-semibold">
            Get the latest creative news from FooBar <br /> about art, design
            and business.
          </p>
        </div>
        <div>
          <input
            className=" px-[50px] py-[10px]"
            type="email"
            placeholder="Your email address.."
          />
        </div>
        <div>
          <button className="bg-blue-600 px-[105px] font-semibold text-white py-[10px]">
            Subscribe
          </button>
        </div>
        <div className="w-[75%]">
          <p className="text-white">
            By signing up, you agree to the our terms and our Privacy Policy
            agreement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscribe;
