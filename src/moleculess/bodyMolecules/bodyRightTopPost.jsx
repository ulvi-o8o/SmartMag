import React from "react";
import TopPost from "../../atom/topPost";
import BodyTopPostCard from "./bodyTopPostCard";
import StayInTouchContent from "./StayInTouchContent";

const BodyRightTopPost = () => {
  return (
    <div>
      <TopPost />
      <hr />
      <BodyTopPostCard />
      <BodyTopPostCard />
      <BodyTopPostCard />
      <StayInTouchContent />
    </div>
  );
};

export default BodyRightTopPost;
