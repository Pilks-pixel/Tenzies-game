import React, { useState, useEffect } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid'


function App() {

  const [dice, setdice] = useState(allDiceNums())
  const [tenzies, setTenzies] = useState(false)

  // Checks if all the dice are Equal and Held
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const allEqual = dice.every((die, index, arr)=> {
     return index === 0 || die.value === arr[index - 1].value? true :
     false;
    })

    if (allHeld && allEqual) setTenzies(prevTenzies => !prevTenzies) 

  },[dice])

  console.log(tenzies)

  function generateDice() {
        return {
        value: Math.ceil(Math.random() * 6), 
        isHeld: false,
        dieId: nanoid()
      }
  }

  // gets an array of random dice
  function allDiceNums() {
    let allDice = []
    for (let i = 0; i < 10; i++) {
      allDice.push(generateDice())
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

  // triggers new dice values if not held
  function handleClick() {
    setdice(prevDice => prevDice.map(dieItem => {
       return dieItem.isHeld? dieItem:
      generateDice()
    }))
  }


  return (
    <main className="App">
      <div className="dice-container">
        {diceElements}
      </div>
      <button onClick={handleClick} >{tenzies? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
