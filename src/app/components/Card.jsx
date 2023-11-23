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
    
      <div className="flex justify-center">
        <div className="max-w-[75rem] px-2 md:px-4 lg:px-6">
          <div className="posts mb-8 grid grid-cols-2 grid-rows-1 gap-6 sm:flex">
            
          
      {/* lol, recognize this? */}
      <a className="blog-card grow-1 post flex w-full flex-col rounded-2xl bg-white p-5 sm:rounded-xl">
        <img className="blog-section-blog-post-image mb-3 aspect-square max-h-[15rem] object-cover"
              loading="lazy"
              width="300"
              height="300" src={dog.img} alt="dog photo" />
      
  
      
        <div className="flex h-full flex-col justify-between">
          <p className="mb-0 font-lexend text-base font-bold leading-6 text-fetch-dark-purple text-primary line-clamp-4 sm:mb-3 sm:text-xl">
            {dog.name}, {dog.age} <br></br> {dog.breed}, {dog.zip_code}
          </p>
  
          </div>
      
      
      
        <p className="btn btn__link mb-0 hidden text-lg sm:block" onClick={() => handleSelect(dog.id)}>
          Favorite
        </p>
      
      </a>
      </div>
      </div>
      </div>
    
  );
  
};

export default DogCard;
