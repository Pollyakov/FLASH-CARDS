import React, { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import Learn from './Pages/Learn/Learn'
import Manager from './Pages/Manager/Manager'
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";


function App() {
let data = [{engName: "Babysitter", hebName: "שמרתף"}, {engName:"Junk food", hebName: "זללת"},
{engName: "Spoiler", hebName: "קלקלן"}, {engName: "Welcome", hebName: "ברוכות הבאות"},
// {engName: "Populism", hebName: "המונאות"}, {engName: "Meditation", hebName: "בוננות"},
// {engName: "Confetti", hebName: "פתיתונים"}
]

const removeWord = (word, words) => {
  let i  = words.indexOf(word)
  words.splice(i,1)
}




  return (
    <React.Fragment>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
             <Learn words= {data}  goal = {data.length} removeWord={removeWord}/>
          </Route>
          <Route path="/manager" >
            <Manager words={data} removeWord={removeWord}/>
          </Route>
        </Switch>
      </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
