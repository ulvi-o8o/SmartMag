import React from "react";
import HomeNewsLeft from "./homeNewsLeft";
import HomeNewsRight from "./homeNewsRight";
import Sponsor from "../../moleculess/bodyMolecules/sponsor";
import EditorsPick from "./editorsPick";
import Card from "./cardComponents";
import TrendingCard from "./trendingCard";
import TrendingDown from "./trendingDown";
import NewGadgetMain from "../../moleculess/newGadgets/newGadgetMain";

const HomeBodyNews = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center w-full h-[1000px] ">
        <HomeNewsLeft />
        <HomeNewsRight />
      </div>
      <div>
        <Sponsor />
      </div>
      <div>
        <EditorsPick />
      </div>
      <div className="cardComponents flex justify-evenly items-center mt-[50px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full h-[950px] bg-black">
        <div className="flex flex-row justify-center items-center p-[50px] gap-5">
          <div>
            <h1 className="font-semibold text-2xl text-white">
              Trending Videos
            </h1>
          </div>
          <div className="w-[1040px] h-[5px] border-t-[1px] border-b-[1px]"></div>
        </div>
        <div className=" w-full flex flex-col">
          <div className="w-full h-[455px] flex items-center  justify-center ">
            <div className="w-[794px] h-[454px] rounded-[12px]  ">
              <img
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=1500&quality=50"
                alt=""
              />
            </div>
            <div className="w-[410px] h-[454px]  ">
              <TrendingCard className="h-[75px]" />
              <TrendingCard className="text-black" />
              <TrendingCard />
              <TrendingCard />
            </div>
          </div>
          <div className="flex justify-evenly mt-[40px]">
            <TrendingDown />
            <TrendingDown />
            <TrendingDown />
            <TrendingDown />
          </div>
        </div>
      </div>
      <div>
        <NewGadgetMain />
      </div>
    </div>
  );
};

export default HomeBodyNews;
