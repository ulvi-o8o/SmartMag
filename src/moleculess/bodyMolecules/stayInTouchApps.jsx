import React from "react";
import SocialFb from "../../atom/socialFb";
import SocialYoutube from "../../atom/socialYoutube";
import SocialTikTok from "../../atom/socialTikTok";
import SocialWp from "../../atom/socialWp";
import SocialX from "../../atom/socialX";
import SocialInstagram from "../../atom/socialInstagram";

const StayInTouchApps = () => {
  return (
    <div>
      <div className="w-[90%] h-[200px] flex flex-wrap pl-[2%] gap-[5%] mt-[20px] ">
        <SocialFb />
        <SocialYoutube />
        <SocialTikTok />
        <SocialWp />
        <SocialX />
        <SocialInstagram />
      </div>
    </div>
  );
};

export default StayInTouchApps;
