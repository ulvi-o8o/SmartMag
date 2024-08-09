import React from "react";
import StayInTouch from "./stayInTouch";
import StayInTouchApps from "./stayInTouchApps";
import LatestReviewContent from "../latestReviewContent";

const StayInTouchContent = () => {
  return (
    <div>
      <StayInTouch />
      <hr />
      <StayInTouchApps />
      <LatestReviewContent />
      <hr />
    </div>
  );
};

export default StayInTouchContent;
