import React, { useState } from "react";
import './card.css';

const Card = ({word,lang}) => {
  console.log("Card props are:", {word,lang});
  const cardSide = (language)=> { 
     return lang==='eng'? word.engName : word.hebName}

  return (<div>
          <section className="word-container">
          <h1>{cardSide(lang)}</h1>
          </section>
          
          </div> 
          
  );
};

export default Card;
