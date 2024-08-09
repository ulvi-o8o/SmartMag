import React from "react";

const HeaderLeftList = () => {
  return (
    <>
      <div className="w-[33%] h-[42px] flex items-center">
        <ul className="flex gap-5">
          <li>
            <a className="text-white">Start here</a>
          </li>
          <li>
            <a className="text-white">Demos</a>
          </li>
          <li>
            <a className="text-white">Contact</a>
          </li>
          <li>
            <a className="text-white">Buy now</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderLeftList;
