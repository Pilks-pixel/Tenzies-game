import React from 'react';
import './App.css';
import Die from './components/Die';

function App() {

  function randomNum() {
    return Math.floor(Math.random * 6)

  }

  return (
    <main className="App">
      <div className="dice-container">
        <Die value={randomNum}/>
        <Die value={randomNum}/>
        <Die value={randomNum}/>
        <Die value={randomNum}/>
        <Die value={randomNum}/>
        <Die value={randomNum}/>
        <Die value={randomNum}/>
        <Die value={randomNum}/>
        <Die value={randomNum}/>
        <Die value={randomNum}/>
      </div>
    </main>
  );
}

export default App;
