import React from "react";
import FavoriteCard from "./favoriteCard";

const HomeNewsRight = () => {
  return (
    <>
      <div className="w-[30%] h-[970px]  ">
        <div className="mt-[40px] ">
          <h1 className="font-semibold text-2xl">People's favorite</h1>
        </div>
        <hr />
        <div>
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
          <FavoriteCard />
        </div>
      </div>
    </>
  );
};

export default HomeNewsRight;
