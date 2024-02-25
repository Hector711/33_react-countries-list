import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function MaxiCard({ data }) {
  return (
    <div className=" w-1/4 mb-28">
      <Card id="Maxicard" className="mt-6 ">
        <CardHeader color="transparent" className="relative">
          <img
            src={data.flags.png}
            alt={`Flag of ${data.name.common}`}
            className="w-64 object-contain "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h1" color="blue-gray" className="mb-2">
            {data.name.common}
          </Typography>
          <Typography>Capital: {data.capital}</Typography>
          <Typography>Region: {data.region}</Typography>
          <Typography>Population: {data.population}</Typography>
          <Typography>
            <dl>
              <dt>
                Languages:
                {Object.values(data.languages).map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </dt>
            </dl>
          </Typography>

          <Typography>
            <dl>
              <dt>
                Currencies:
                {Object.keys(data.currencies).map((currencyCode) => (
                  <li key={currencyCode}>
                    {data.currencies[currencyCode].name}
                    {data.currencies[currencyCode].symbol &&
                      ` (${data.currencies[currencyCode].symbol})`}
                    {Object.keys(data.currencies).length > 1 && ", "}
                  </li>
                ))}
              </dt>
            </dl>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
export default MaxiCard;
