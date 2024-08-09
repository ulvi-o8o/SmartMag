import React from "react";
import TopPostImage from "../../atom/topPostImage";
import TopPostCardRight from "./TopPostCardRight";

const BodyTopPostCard = () => {
  return (
    <div>
      <div className="mt-[60px]">
        <div className="w-=[336px] h-[92px] flex gap-6">
          <TopPostImage />
          <TopPostCardRight />
        </div>
      </div>
    </div>
  );
};

export default BodyTopPostCard;
