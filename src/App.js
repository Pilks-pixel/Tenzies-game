import React, { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid'


function App() {

  const [dice, setdice] = useState(allDiceNums())


  // do not change state if held


  // gets an array of random numbers 
  function allDiceNums() {
    let allDice = []
    for (let i = 0; i < 10; i++) {
      allDice.push({ 
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        dieId: nanoid(),
       })

    }
    return allDice

  }

  function holdDice(id) {
    setdice(prevDice => prevDice.map(die => {
      return die.dieId === id? {...die, isHeld: !die.isHeld} :
      die
    }))
  }

  // maps over the dice array creating a Die component for each index 
  // const diceElements = dice.map((die) => <Die key={die.dieId} value={die.value} held={die.isHeld}/>)
  const diceElements = dice.map((die) => 
  <Die 
  key={die.dieId} 
  value={die} 
  holdDice={() => holdDice(die.dieId)}
  />)

  console.log(dice)

  // triggers new dice values
  function handleClick() {
    setdice(allDiceNums())
  }


  return (
    <main className="App">
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={handleClick} >Roll</button>
    </main>
  );
}

export default App;
