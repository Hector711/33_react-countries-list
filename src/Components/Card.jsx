import React from "react";

function Card({ data }) {
  return (
    <div className=" cursor-pointer w-50 h-52 rounded-lg">
      
    </div>
  );
}
export default Card;



// <figure className="relative mb-4 w-full h-4/5">
//       {data && data.category && ( // Verificar si data y data.category están definidos
//         <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1">
//             {data.category.name}
//         </span>
//       )}
//         <img
//           className="w-full h-full object-cover rounded-lg"
//           src={data ? data.images : ""}
//           alt="Headphones"
//         />
//         <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
//           +
//         </div>
// </figure>

//       <p className="flex justify-between">
//         <span className="text-sm font-light m-1">{data ? data.title : ""}</span>
//       </p>