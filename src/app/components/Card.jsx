import React from "react";

import { Dog } from "../utils/types";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const DogCard = ({ dog, selected, setSelectedDogs }) => {
  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelectedDogs((prevSelectedDogs) =>
        prevSelectedDogs.filter((dogId) => dogId !== id)
      );
    } else {
      setSelectedDogs((prevSelectedDogs) => [...prevSelectedDogs, id]);
    }
  };

  return (

    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
      <img
        style={{ 
          height: '200px',
          width: '200px',
          borderRadius: 'var(--border-radius)'
        }}
        src={dog.img}
        alt="dogImg"
        className="h-full w-full object-cover card-image"
      />
      </CardHeader>

      <CardBody>
      <div className="mb-2 flex items-center justify-between">
        <Typography color="blue-gray" className="font-medium">
          {dog.name}, {dog.age}
        </Typography>

        <div>
          
          <p>
            {dog.breed}
          </p>
        </div>
        <div>
          
          <p>{dog.zip_code}</p>
        </div>
      </div>
      </CardBody>
      <CardFooter className="pt-0">

        <Button
        onClick={() => handleSelect(dog.id)}
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Favorite
        </Button>
      </CardFooter>
    
    </Card>
  );
};

export default DogCard;
