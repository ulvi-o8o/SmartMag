import React from "react";
import HeaderLeftList from "./headerLeftList";
import HeaderRightIcons from "./headerRightIcons";

const HeaderUpMolecules = () => {
  return (
    <div>
      <div className="w-full h-[42px] px-[30px] flex bg-black text-white">
        <HeaderLeftList />

        <div className="w-[33%] h-[42px] "></div>
        <HeaderRightIcons />
      </div>
    </div>
  );
};

export default HeaderUpMolecules;
