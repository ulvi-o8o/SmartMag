import React from "react";
import { LuClock5 } from "react-icons/lu";
import FooterUpLeftCard from "../footerMolecules/footerUpLeftCard";
import { GiFlame } from "react-icons/gi";

const NewGadgetMain = () => {
  return (
    <div className="w-full h-[1420px] flex flex-wrap  p-[50px]">
      <div className="w-[884px] h-[678px] ">
        <div className="flex justify-evenly items-center">
          <div>
            <h1 className="font-semibold text-2xl">New Gadgets</h1>
          </div>
          <div className="w-[592px] h-[4px] border-t-[1px] border-b-[1px]"></div>
          <div className="w-[80px] h-[27px]">
            <button className="rounded-xl text-gray border px-[12px] py-[6px]">
              See All
            </button>
          </div>
        </div>
        <div className="w-[848px] h-[282px] flex mt-[30px] ">
          <div className="w-[424px] h-[282px] ">
            <img
              className="w-[424px] h-[282px] rounded-[12px]"
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-1024x445.jpg"
              alt=""
            />
            <p className="w-[76px] h-[26px] flex justify-center items-center rounded-md text-white text-semibold px-[12px] py-[6px] mt-[-30px] bg-purple-600">
              Gadgets
            </p>
          </div>
          <div className="w-[424px] h-[282px] flex flex-col gap-4 p-[20px]">
            <div>
              <h1 className="font-bold text-2xl">
                Oculus Founder Makes a VR Headset That Can Literally Kill You
              </h1>
            </div>
            <div className="flex flex-row  justify-center  items-center gap-5">
              <b>Shane Doe</b>
              <span>
                <LuClock5 />
              </span>
              <p>Jan 15, 2021</p>
            </div>
            <div>
              <p>
                To understand the new smart watched and other pro devices of
                recent focus, we should…
              </p>
            </div>
            <div>
              <button className="text-blue-600">Read more</button>
            </div>
          </div>
        </div>
        <div className="w-[920px] h-[304px] flex flex-wrap justify-center items-center mt-[20px] ">
          <FooterUpLeftCard />
          <FooterUpLeftCard />
          <FooterUpLeftCard />
          <FooterUpLeftCard />
          <FooterUpLeftCard />
          <FooterUpLeftCard />
        </div>
      </div>
      <div className="w-[336px] h-[426px] flex flex-col justify-evenly items-center  p-[30px] border">
        <h1 className="font-semibold text-2xl">Subscribe to Updates</h1>
        <p>
          Get the latest creative news from FooBar about art, design and
          business.
        </p>
        <input
          className="w-[270px] h-[40px] text-center"
          type="text"
          placeholder="Your email adress..."
        />
        <button className="w-[270px] h-[40px] bg-blue-600 font-semibold hover:bg-black hover:text-white">
          Subscribe
        </button>
        <span>
          By signing up, you agree to the our terms and our Privacy Policy
          agreement.
        </span>
      </div>
      <div className="w-[884px] h-[520px] ">
        <div className="flex mt-[40px] mb-[40px] justify-evenly items-center">
          <div>
            <h1 className="font-semibold text-2xl">New Gadgets</h1>
          </div>
          <div className="w-[592px] h-[4px] border-t-[1px] border-b-[1px]"></div>
          <div className="w-[80px] h-[27px]">
            <button className="rounded-xl text-gray border px-[12px] py-[6px]">
              See All
            </button>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="w-[407px] h-[305px] ">
            <img
              className="rounded-2xl"
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_352742574_xl-2015-1-1024x683.jpg"
              alt=""
            />
            <div className="mt-[-150px] flex flex-col gap-2 p-[30px]">
              <span className=" rounded-md w-[80px] h-[30px] flex justify-center items-center px-[12px] py-[6px] text-white">
                Phones
              </span>
              <p className="bg-black text-white">
                Google Says Surveillance Vendor Targeted Samsung Phones
              </p>
              <div className=" flex flex text-white row gap-3 ">
                <p>Jan 14, 2021</p>
                <GiFlame className="text-white" />
                <span className="text-white">7,792 Views</span>
              </div>
            </div>
          </div>
          <div className="w-[407px] h-[305px] ">
            <img
              className=" rounded-2xl"
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sahej-brar-6Pg2e3W1KDY-unsplash-1024x1024.jpg"
              alt=""
            />
            <div className="mt-[-150px] flex flex-col gap-2 p-[30px]">
              <span className="bg-gray-700 rounded-md w-[80px] h-[30px] flex justify-center items-center  text-white">
                Phones
              </span>
              <p className="bg-black text-white">
                Google Says Surveillance Vendor Targeted Samsung Phones
              </p>
              <div className=" flex flex text-white row gap-3 ">
                <p>Jan 14, 2021</p>
                <GiFlame className="text-white" />
                <span className="text-white">7,792 Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[920px] h-[340px] flex  flex-wrap justify-evenly text-black items-center ">
        <FooterUpLeftCard className="text-black" />
        <FooterUpLeftCard />
        <FooterUpLeftCard />
        <FooterUpLeftCard />
        <FooterUpLeftCard />
        <FooterUpLeftCard />
      </div>
    </div>
  );
};

export default NewGadgetMain;
