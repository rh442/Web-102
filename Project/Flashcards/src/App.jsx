
import { useState } from 'react'
import { Flashcards } from './data.js'
import './App.css';
import './index.css';

function App() {
  const [currentCard,setCurrentCard] = useState(0);
  const [flip,setFlip] = useState(false);
  const [color,setColor] = useState(false);
  let card = Flashcards[currentCard];


  function getRandomFlashcard() {
  const randomIndex = Math.floor(Math.random() * (Flashcards.length-1))+1;
  setCurrentCard(randomIndex);
  setColor(false)
  setFlip(false)
 
}
  
 
  function flipCard(){
   setFlip(!flip);
   setColor(!color);
  }

  return (
    <div className='flashcards'>
      <h1>Greek and Roman God Names</h1>
      <h2>Test your knowledge on the Roman names of the Greek Gods</h2>
      <div className='card'>
        {flip ? <button className='flippable purple' onClick={flipCard}><h1>{card.Answer}</h1></button>:<button className='flippable orange' onClick={flipCard}><h1>{card.Question}</h1></button>}
      </div>
      <h2>Cards:{Flashcards.length-1}</h2>
    
      <button onClick={getRandomFlashcard}>
        Next
      </button>
    </div>
  )
}

export default App
