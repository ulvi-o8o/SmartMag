import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Buutton from "../../atom/button";
import Darkmood from "../../atom/darkmood";
import SearchIcon from "../../atom/searchIcon";

const HomeHeaderDown = () => {
  return (
    <div>
      <div className="w-full h-[70px] flex  ">
        <div className="w-[20%] h-[70px] flex items-center justify-end  ">
          <div>
            <GiHamburgerMenu className="w-[30px] h-[30px] " />
          </div>
          <div className="w-[210px] h-[60px]">
            <img
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png"
              alt=""
              className="w-[207px] h-[60px] py-[10px]"
            />
          </div>
        </div>
        <div className="w-[60%] h-[70px]  ">
          <ul className="flex justify-evenly items-center">
            <li>Home</li>
            <li>Features</li>
            <li>Technology</li>
            <li>
              <a href="https://smartmag.theme-sphere.com/tech-blog/category/example-4/">
                Gadgets
              </a>
            </li>
            <li>Phones</li>
            <li>Buy Theme</li>
          </ul>
        </div>
        <div className="w-[20%] h-[70px] flex items-center gap-5  justify-center ">
          <div>
            <Buutton />
          </div>
          <div>
            <Darkmood />
          </div>
          <div>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderDown;
