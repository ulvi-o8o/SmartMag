// import React from "react";
// import { useState, useEffect } from "react";

// const DarkMood = () => {
//   const [mode, setMode] = useState("light");
//   const storedMode = localStorage.getItem("mode");
//   if (storedMode == null) {
//     localStorage.setItem("mode", "light");
//   }
//   useEffect(() => {
//     setMode(storedMode);
//   }, []);

//   const handleClick = () => {
//     if (storedMode == "light" || storedMode === null) {
//       localStorage.removeItem("mode");
//       localStorage.setItem("mode", "dark");
//       setMode("dark");
//     } else {
//       localStorage.removeItem("mode");
//       localStorage.setItem("mode", "light");
//       setMode("Light");
//     }
//   };
//   return (
//     <div className="home">
//       <h2>{mode}</h2>
//       <button className={`button-${mode}`} onClick={handleClick}>
//         Click Me
//       </button>
//     </div>
//   );
// };

// export default DarkMood;

// import React, { createContext, useState, useContext } from "react";

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//     document.documentElement.classList.toggle("dark", !isDarkMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkMode = () => useContext(DarkModeContext);

// import React, { createContext, useState, useContext } from "react";

// // Create a Context for dark mode
// const DarkModeContext = createContext();

// // Create a Provider component
// export const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//     document.documentElement.classList.toggle("dark", !isDarkMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// // Custom hook to use the DarkModeContext
// export const useDarkMode = () => useContext(DarkModeContext);

// import React from "react";
// import HeaderLeftList from "./HeaderLeftList"; // Doğru dosya adı ve yolu kullanın
// import HeaderRightIcons from "./HeaderRightIcons"; // Doğru dosya adı ve yolu kullanın

// const HeaderUpMolecules = () => {
//   return (
//     <div>
//       <div className="w-full h-[42px] px-[15px] sm:px-[30px] flex bg-black text-white items-center justify-between">
//         <HeaderLeftList />
//         <div className="hidden sm:block w-[33%] h-[42px]"></div>
//         <HeaderRightIcons />
//       </div>
//     </div>
//   );
// };

// export default HeaderUpMolecules;

import React, { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
