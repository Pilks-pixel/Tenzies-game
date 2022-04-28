import React, {useState} from 'react';
import './App.css';
import Die from './components/Die';


function App() {

  const [dice, setdice] = useState(allDiceNums())

  // gets an array of random numbers 
  function allDiceNums() {
    let allDice = []
    for(let i = 0; i < 10; i++){
      allDice.push(Math.ceil(Math.random() * 6))
    }
    return allDice

  }

// maps over the dice numbers array creating a Die component for each index 
  const diceElements = dice.map((num) => <Die value={num}/>)
  
  
  console.log(dice)


  return (
    <main className="App">
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  );
}

export default App;
