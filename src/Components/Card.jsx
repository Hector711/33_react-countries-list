import React from "react";

function Card({ data }) {
  return (
    <div className="backdrop-blur-md bg-opacity-50 bg-slate-500 h-56 rounded-lg">
      <div>
        <h3>{data.name.common}</h3>
        <img
          src={data.flags.png}
          alt={`Flag of ${data.name.common}`}
          className=" w-28 h-14"
        />
        <p>Capital: {data.capital}</p>
        <p>Region: {data.region}</p>
        <p>Population: {data.population}</p>
      </div>
    </div>
  );
}
export default Card;
