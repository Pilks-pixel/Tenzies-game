import React, { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid'


function App() {

  const [dice, setdice] = useState(allDiceNums())

  // give dice a state of held when clicked
  // do not change state if held
  // change die color if state == held

  // gets an array of random numbers 
  function allDiceNums() {
    let allDice = []
    for (let i = 0; i < 10; i++) {
      allDice.push({ 
        value: Math.ceil(Math.random() * 6), 
        isHeld: true,
        dieId: nanoid()
       })

    }
    return allDice

  }

  // maps over the dice array creating a Die component for each index 
  // const diceElements = dice.map((die) => <Die key={die.dieId} value={die.value} held={die.isHeld}/>)
  const diceElements = dice.map((die) => <Die key={die.dieId} value={die} />)

  console.log(dice)

  // triggers a new dice values
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
