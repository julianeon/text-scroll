import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Typing from 'react-typing-animation';

function AniType(props) {
    var word=[]
    props.text.map(item => word.push(<React.Fragment><span>{item}</span><br/><Typing.Delay ms={1000} /><Typing.Reset count={3} delay={1000} /></React.Fragment>)); 
    
    return (
	    <Typing>{word}></Typing>
    );
}

function App() {
    const speech=["Ahem.","An announcement.","I have decided","to party!!!!","meet me at the San Francisco Ferry Building @ 1pm", "on January 1st, 2070.", "Again, that's:", "1pm, Wednesday, 1/1/2070, Ferry Building, SF, CA.","see you there!"]

  return (
    <div  className="App">
      <header className="App-header">
          <AniType text={speech}/>
	  </header>
    </div>
  );
}

export default App;
