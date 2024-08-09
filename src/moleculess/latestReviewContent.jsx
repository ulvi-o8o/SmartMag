import React from "react";
import LatestReview from "./LatestReview";
import LatestCard from "./bodyMolecules/latestCard";

const LatestReviewContent = () => {
  return (
    <div>
      <LatestReview />
      <hr />

      <div className="flex flex-col justify-center">
        <LatestCard />
        <LatestCard />
        <LatestCard />
      </div>
      <div className="flex justify-center mt-[50px] ">
        <img
          className="w-[300px] h-[600px] "
          src="https://smartmag.theme-sphere.com/tech-1/wp-content/uploads/sites/7/2021/01/300x600-banner-tech-02.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LatestReviewContent;
