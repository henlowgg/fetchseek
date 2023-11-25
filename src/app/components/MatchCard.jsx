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
      "Ah, salutations! I am [name], an aficionado of fine arts and literature. With [age] years of cultured living, I bring sophistication and refined tastes to every conversation. Care to join me on an intellectual journey?",
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
    <div className="flex">
      <div className="max-w-[75rem] px-2 md:px-4 lg:px-6">
      <div className="posts mb-8 grid grid-cols-4 grid-rows-1 gap-6 sm:flex">
      <a className="blog-card grow-1 post flex w-full flex-col rounded-2xl bg-white p-5 sm:rounded-xl">
        <img className="blog-section-blog-post-image mb-3 aspect-square max-h-[15rem] object-cover"
              loading="lazy"
              width="400"
              height="400"
          src={match.img}
          alt="Dog image"
        />
      
      <div>
        <div className="flex h-full flex-col justify-between">
          
          <p>{generateDogParagraph(match.name, match.age)}</p>
        </div>
      </div>
      </a>
    </div>
    </div>
    </div>
  );
};

export default MatchCard;
