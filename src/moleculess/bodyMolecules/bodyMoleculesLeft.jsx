import React from "react";
import HomeCategory from "../../atom/homeCategory";
import Browsing from "../../atom/browsing";
import BodyContent from "../../organic/bodyContent";

const BodyMoleculesLeft = () => {
  return (
    <>
      <div className="w-[70%] h-[1500px]  ">
        <HomeCategory />
        <Browsing />
        <BodyContent />
      </div>
    </>
  );
};

export default BodyMoleculesLeft;
