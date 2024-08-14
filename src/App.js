// import React from "react";
// import "./style/style.scss";
// import HomePage from "./pages/HomePage";
// import Blogpage from "./pages/BlogPage";

// const App = () => {
//   return (
//     <div>
//       <HomePage />
//       {/* <BlogPage /> */}
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { DarkModeProvider } from "./DarkModeContext";
// import HeaderUpMolecules from "./HeaderUpMolecules";
// import Darkmood from "./Darkmood";
// import "./style/style.scss";
// import HomePage from "./pages/HomePage";

// const App = () => {
//   return (
//     <DarkModeProvider>
//       <HeaderUpMolecules />
//       <Darkmood />
//       {
//         <div>
//           <HomePage />
//           {/* <BlogPage /> */}
//         </div>
//       }
//     </DarkModeProvider>
//   );
// };

// export default App;

import React from "react";
import HeaderUpMolecules from "./moleculess/headerMolecules/headerUpMolecules";
import Darkmood from "./moleculess/darkMood/darkMood";
import { DarkModeProvider } from "./moleculess/darkMood/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <HeaderUpMolecules />
      <Darkmood />
      {/* Diğer bileşenler */}
    </DarkModeProvider>
  );
};

export default App;
