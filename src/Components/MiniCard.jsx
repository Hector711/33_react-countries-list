import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function MiniCard({ data }) {
  return (
    <div>
    
      <Card className="mt-6 h-72 w-64">
        <CardHeader color="transparent" className="relative">
          <img src={data.flags.png} alt={`Flag of ${data.name.common}`} className="w-64 object-contain "/>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.name.common}
          </Typography>
          <Typography>Capital: {data.capital}</Typography>
          <Typography>Region: {data.region}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default MiniCard;


{/* <div className="backdrop-blur-md bg-opacity-50 bg-slate-500 h-56 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h3></h3>
          <div className="">
            <p>Capital: {data.capital}</p>
            <p>Region: {data.region}</p>
            <p>Population: {data.population}</p>
          </div>
        </div>
      </div> */}