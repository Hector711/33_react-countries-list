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
      <Card className="mt-6 h-72 w-60">
        <CardHeader color="transparent" className="relative h-28 w-fit">
          <img
            src={data.flags.png}
            alt={`Flag of ${data.name.common}`}
            className=" w-48 h-28"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data.name.common}
          </Typography>
          <Typography>Capital: {data.capital}</Typography>
          <Typography>Region: {data.region}</Typography>
          
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/country/${data.name.common}`}>
            <Button>Read More</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
export default MiniCard;
