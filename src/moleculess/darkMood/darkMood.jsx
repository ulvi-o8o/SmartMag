// import React from "react";
// import { FaRegMoon } from "react-icons/fa";
// import { useDarkMode } from "./DarkModeContext";

// const Darkmood = () => {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className={`w-[20px] h-[20px] text-gray-500 dark:text-yellow-500`}
//     >
//       <FaRegMoon />
//     </button>
//   );
// };

// export default Darkmood;

// import React from "react";
// import { FaRegMoon } from "react-icons/fa";
// import { useDarkMode } from "./DarkModeContext"; // Doğru dosya adı ve yolu kullanın

// const Darkmood = () => {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className={`w-[20px] h-[20px] text-gray-500 dark:text-yellow-500`}
//     >
//       <FaRegMoon />
//     </button>
//   );
// };

// export default Darkmood;

import React from "react";
import { FaRegMoon } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";

const Darkmood = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`w-[20px] h-[20px] text-gray-500 dark:text-yellow-500`}
    >
      <FaRegMoon />
    </button>
  );
};

export default Darkmood;
