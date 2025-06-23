
import { useState } from 'react'
import { Flashcards } from './data.js'
import './App.css';
import './index.css';

function App() {
  const [currentCard,setCurrentCard] = useState(0);
  const [flip,setFlip] = useState(false);
  const [color,setColor] = useState(false);
  const [input, setinput] = useState('');
  const [answerspace, setanswerspace] = useState('');
  const [correct, setCorrect] = useState(0);
  
 
  const [flash_card, setFlashcards] = useState(Flashcards);
  let card = flash_card[currentCard];
  

  function handleReset(){
    setCurrentCard(0);
    setFlip(false);
    setColor(false);
    setCorrect(0);
  }
  function handleShuffle(){
    const shuffled = [...flash_card];
    for (let i=shuffled.length-1; i>0 ; i--){
      const j=Math.floor(Math.random()*i)+1;
      if(i!=currentCard && j!=currentCard){
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    }
    setFlashcards(shuffled);
  }
  function handleSubmit() {
    if(card.Answer.toLowerCase()==input.toLowerCase()){
      setanswerspace("Correct");
      setCorrect(correct+1);
    }
    else{
      setanswerspace("Wrong")
    }
  }
  function handlePreviousClick() {
    // index = index + 1;
    if(currentCard>0){
    setCurrentCard(currentCard - 1);
    setColor(0);
    setFlip(0);
    setanswerspace('');
    setinput('');
  }
  }

  function handleNextClick() {
    // index = index + 1;
    if(currentCard<flash_card.length -1){
    setCurrentCard(currentCard + 1);
    setColor(0);
    setFlip(0);
    setanswerspace('');
    setinput('');
    }
  
    
  }
  
 
  function flipCard(){
   setFlip(!flip);
   setColor(!color);
  }

  
console.log("Current card image class:", card.img);
  return (
    <>
    <div className='overlay'>
      
    </div>
    <div className='flashcards'>
      <h1 className='title'>Greek and Roman God Names</h1>
      <h2>Test your knowledge on the Roman names of the Greek Gods</h2>
      <h3 className='progress'>{correct}/{flash_card.length-1}  
          &nbsp;&nbsp;&nbsp;&nbsp;
         {((correct/(flash_card.length-1)) * 100).toFixed(2)} %</h3>
      <div className={card.img}>
        {flip ? <button className='flippable purple' onClick={flipCard}><h1>{card.Answer}</h1></button>:<button className='flippable orange' onClick={flipCard}><h1>{card.Question}</h1></button>}
      </div>

      <h2>Cards:{flash_card.length-1}</h2>
      {currentCard>0 &&(
      <form>
         <label htmlFor="answer-input">Your Answer:</label>
        <input id="answer-input" className={answerspace} type='text' value={input} onChange={(e) => setinput(e.target.value)}  ></input>
        <button type="button" onClick={handleSubmit}>Check answer</button>
      </form>
    )}
      <button onClick={handlePreviousClick} disabled={currentCard=== 0}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={currentCard===flash_card.length -1}>
        Next
      </button>
      <button onClick={handleShuffle}>Shuffle🔄</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default App
