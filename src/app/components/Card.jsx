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
    <Card>
      {/* lol, recognize this? */}
      <CardHeader>
        <img className="blog-section-blog-post-image mb-3 aspect-square max-h-[15rem] object-cover"
              loading="lazy"
              width="300"
              height="300" src={dog.img} alt="dog photo" />
      </CardHeader>
  
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {dog.name}, {dog.age}
          </Typography>
  
          <div>
            <p>{dog.breed}</p>
          </div>
          <div>
            <p>{dog.zip_code}</p>
          </div>
        </div>
      </CardBody>
      
      <CardFooter>
        <Button onClick={() => handleSelect(dog.id)}>
          Favorite
        </Button>
      </CardFooter>
    </Card>
  );
  
};

export default DogCard;
