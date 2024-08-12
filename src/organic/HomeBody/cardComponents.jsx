// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchData } from "./api";
// import ImportedCardComponent from "src/organic/HomeBody/CardComponent";

// const CardComponent = () => {
//   const { data, error, isLoading } = useQuery(["data"], fetchData);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>An error occurred: {error.message}</div>;

//   return (
//     <div className="card">
//       <h2>Data Card</h2>
//       {data.map((item) => (
//         <div key={item.id} className="card-item">
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>My App</h1>
//       <ImportedCardComponent /> {/* İçe aktarılan bileşeni kullanın */}
//       <CardComponent /> {/* Yerel olarak tanımladığınız bileşeni kullanın */}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchData } from "../HomeBody.jsx/api"; // api.js dosyanızdan fetchData fonksiyonunu içe aktarın
// import ImportedCardComponent from "./CardComponent"; // İçe aktarılan bileşeni başka bir isimle tanımlayın
// import CardComponent from "./CardComponent";

// // Yerel olarak CardComponent bileşenini tanımlayın
// const CardComponent = () => {
//   const { data, error, isLoading } = useQuery(["data"], fetchData);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>An error occurred: {error.message}</div>;

//   return (
//     <div className="card">
//       <h2>Data Card</h2>
//       {data.map((item) => (
//         <div key={item.id} className="card-item">
//           <h3>{item.title}</h3>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>My App</h1>
//       <ImportedCardComponent /> {/* İçe aktarılan bileşeni kullanın */}
//       <CardComponent /> {/* Yerel olarak tanımladığınız bileşeni kullanın */}
//     </div>
//   );
// }

// export default App;

import React from "react";
// import { GiDividedSquare } from "react-icons/gi";

function Card() {
  return (
    <div className="card w-[286px] h-[290px]">
      <img
        className="w-[286px] h-[190px] rounded-md "
        src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/akhil-yerabati-Q2uV5TkjNz8-unsplash-1024x579.jpg"
        alt=""
      />
      <h2>Study: Earbuds Use, Youngsters at High Risk of Hearing Loss</h2>
      <p>Shane DoeMar 15, 2020</p>
    </div>
  );
}

export default Card;

// // CardComponent.js
// // import React from "react";
// // import { useQuery } from "@tanstack/react-query";
// // import { fetchData } from "https://api.example.com/cards";
// // import CardComponent from "./CardComponent";

// // const CardComponent = () => {
// //   const { data, error, isLoading } = useQuery(["data"], fetchData);

// //   if (isLoading) return <div>Loading...</div>;
// //   if (error) return <div>An error occurred: {error.message}</div>;

// //   return (
// //     <div className="card">
// //       <h2>Data Card</h2>
// //       {data.map((item) => (
// //         <div key={item.id} className="card-item">
// //           <h3>{item.title}</h3>
// //           <p>{item.description}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // function App() {
// //   return (
// //     <div className="App">
// //       <h1>My App</h1>
// //       <CardComponent />
// //     </div>
// //   );
// // }

// // export default App;
// // export default CardComponent;
