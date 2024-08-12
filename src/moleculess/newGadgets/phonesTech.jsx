import React from "react";

const PhonesTech = () => {
  return (
    <div className="w-full">
      <div className="w-[884px] h-[678px] bg-yellow-800">
        <div className="flex justify-evenly items-center">
          <div>
            <h1 className="font-semibold text-2xl">Phones & Tech</h1>
          </div>
          <div className="w-[592px] h-[4px] border-t-[1px] border-b-[1px]"></div>
          <div className="w-[80px] h-[27px]">
            <button className="rounded-xl text-gray border px-[12px] py-[6px]">
              See All
            </button>
          </div>
        </div>
        <div className="w-[848px] h-[282px] flex mt-[30px] bg-blue-300">
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
      <div className="w-[336px] h-[558px] bg-red-700 ">
        <div>
          <h1 className="font=semibold text-2xl">Popular Now</h1>
        </div>
        <hr />
        <div>
          <div className="w-[310px] h-[74px] bg-yellow-300">
            <div className="w-[10px] h-[10px] rounded-[50%] bg-blue-600">1</div>
            <div>
              <p>
                Popular New Xbox Game Pass Game Being Review Bombed With “0s”
              </p>
              <div className="flex flex-row  justify-center  items-center gap-5">
                <b>Shane Doe</b>
                <span>
                  <LuClock5 />
                </span>
                <p>Jan 15, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonesTech;
