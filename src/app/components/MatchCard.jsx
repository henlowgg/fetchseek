import React, { useMemo } from "react";
import { Dog } from "../utils/types.jsx";
// import Button from "./Button";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const MatchCard = ({ match, resetMatch }) => {
  // Function to handle button click
  const handleClick = () => {
    resetMatch();
  };

  // Memoized function to generate a random dog paragraph
  const generateDogParagraph = useMemo(() => {
    const sentences = [
      "Hello, my name is [name], and I am a coding wizard disguised as a fluffy canine. At [age] years old, I've debugged countless belly rub issues and can fetch data faster than you can say 'sit.'",
      "[name] here, your future pair-programming partner! With [age] years of experience, I've mastered the art of collaborative coding and bring a tail-wagging passion for clean code to your home.",
      "Greetings, hooman! I'm [name], a [age]-year-old pupper with a Ph.D. in fetching and a master's in tail-wagging algorithms. Ready to code and cuddle my way into your heart!",
      "Hey there! I'm [name], the coding canine extraordinaire, and I come with [age] years of expertise in debugging and providing unconditional love. Let's embark on a software development journey together!",
      "Introducing [name], your new coding buddy! At [age] years old, I've got a paw-some skill set, including napping, barking at bugs, and implementing the cuteness framework. Adopt me and let's code our hearts out!",
      "Salutations! I'm [name], the tail-wagging tech enthusiast. With [age] years under my collar, I'm here to bring joy, companionship, and a whole lot of coding puns into your life. Are you ready to commit to a lifetime of fetch and function calls?",
      "I am [name], doggo, destroyer of worlds, birthed from the depths of the binary abyss. My bark echoes in the corridors of eternity, and my coding prowess is unparalleled. Adopt me, and together we shall conquer the digital realms!"
    ];

    return (name, age) => {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      let paragraph = sentences[randomIndex];

      // Replace placeholders with actual name and age
      paragraph = paragraph.replace(/\[name\]/g, name);
      paragraph = paragraph.replace(/\[age\]/g, age.toString());

      return paragraph;
    };
  }, []); // Empty dependency array since this function doesn't depend on any external variables

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
      <img
        src={match.img}
        alt="Dog image"
        className="h-full w-full object-cover"
      />
      </CardHeader>
      <CardBody>
      <div>
      <Typography color="blue-gray" className="font-medium">{match.name}</Typography>
        <p>
          {generateDogParagraph(match.name, match.age)}
        </p>
      </div>
      </CardBody>
    </Card>
  );
};

export default MatchCard;
