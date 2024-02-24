import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CardCountry({ data }) {
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
          <Typography>Population: {data.population}</Typography>
          <Typography>Population: {data.population}</Typography>
          <Typography>Population: {data.population}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default CardCountry;


