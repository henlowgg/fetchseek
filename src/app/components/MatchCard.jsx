import React, { useMemo } from "react";
import { Dog } from "../utils/types.jsx";



const MatchCard = ({ match, resetMatch }) => {
  const handleClick = () => {
    resetMatch();
  };

  const generateDogParagraph = useMemo(() => {
    const sentences = [
      "Konnichiwa! I'm [name]-chan, uwu, and I'm a kawaii anime weeb. At [age] years old, I've binged more anime series than youwu can count. Ready to embark on a sugoi journey together UwU ~~ ?",
      "Hey! I wanna game with you, I'm [name], and I wanna ruin your life and play League together! With [age] years of gaming experience, my friends always tell me that I'm super good at running it down, whatever that means, it must be good!",
      "Hello World! I'm [name], the wanna-be tech bro angel investor. At [age] years old, I've already extended my portfolio and invested in 3 companies. Ready to let me invest in your ai startup and ruin it?",
      "Hey whoever is reading this. It's Link, no it's not the dog, it's actually me the dev who made this. Sorry this took so long to turn in, I spent way too much time on it for too little to show, but just wanted to say thank you for even looking at it lol.. I'm looking forward to meeting you all and I genuinely hope my 100+ hours working on this doesn't hurt my chances, have a good one!",
      "Hey, I'm [name]! I may not be the sharpest tool in the shed, but I'm a ray of sunshine. At [age] years old, I'm here to spread joy and laughter. Let's enjoy the simple pleasures of life together!",
      "What's up, bro? I'm [name], your drywall punching new bestie. With [age] years of drinking monster energy, I'm here to have your back against Kyle. Adopt me bro.",
      "Hey there! I'm [name], the ultimate shopaholic. With [age] years of swiping credit cards, I'm ready to indulge in the latest trends and luxury. Let's hit the shops and live the good life!"
    ];

    return (name, age) => {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      let paragraph = sentences[randomIndex];

      paragraph = paragraph.replace(/\[name\]/g, name);
      paragraph = paragraph.replace(/\[age\]/g, age.toString());

      return paragraph;
    };
  }, []);

  return (
    
      <div>
        <img
              loading="lazy"
              
          src={match.img}
          alt="Dog pic"
        />
      
      <div>
        <div className="hero__intro">
          <br />
          <p>{match.name}, {match.age} <br></br> {match.breed}, {match.zip_code}</p>
          <br />
          <p>{generateDogParagraph(match.name, match.age)}</p>
          
        </div>
      </div>
      </div>
    
  );
};

export default MatchCard;
