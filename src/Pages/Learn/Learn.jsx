import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import {removeWord} from '../../Utils/functions'
import './learn.css'

const Learn = (props)=> {
    console.log("Learn props:",props);
    const[lang, setLang] = useState('eng')
    const[myStyle, setMyStyle] = useState({display: "none"}) 
    const[points, setPoints] = useState(0);
    const[randomWord, setRandomWord] = useState({engName: "Welcome", hebName: "ברוכות הבאות"});
    
    const addPoint = ()=>{
        if (points<props.goal){
        setPoints(points+1);
        } else {
             alert ("GAME OVER")               
        }
    }
    const pickWord = (words) => {
        let random =  words[Math.floor(Math.random() * words.length)];
        setLang('eng');
        setRandomWord(random);
      }

    const handleRevealAnswer = ()=> {
         setLang('heb');
         setMyStyle({display:'block'});
    };

    const handleYesButton = ()=> {
     addPoint(); 
     removeWord(randomWord,props.words)
     setMyStyle({display: "none"})
   };

   const handleNoButton = ()=> {
    setMyStyle({display: "none"})
  };

   const handleNextWord = () => {
    //setMyStyle({display: "none"});   
    if(props.words.length){pickWord(props.words)
    } else {alert("GAME OVER!")}
}


    return (
        <section className="word-wrapper">
        <Card word={randomWord} lang={lang} />
        <div className='self-check' style={myStyle} >
            <h1>Was it right?</h1>
            <button name='yes' onClick = {handleYesButton}>Yes</button>
            <button name='no' onClick = {handleNoButton}>No</button>
        </div> 
        <section className="buttons-container">
        <button onClick = {handleNextWord}>Next Word</button>
        <button onClick = {handleRevealAnswer}>Reveal Answer</button>
        </section>
        <ProgressBar points= {points} goal = {props.goal} />
        </section>
    )
}

export default Learn