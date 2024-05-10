import { useState } from 'react'

import { Dice } from './Dice'
import './App.css'

function App() {

  const [die, setDie] = useState(allNewDice())

  // Helper function for new die after roll
  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld: false,
      id: crypto.randomUUID()
    }
  }

  // Creates a 10 objects of dice containing: A random number, if it is held, and a unique id
  function allNewDice() {
    let numberArr = []
    for (let i = 0; i < 10; i++){
      numberArr.push(generateNewDie())
    }
    return numberArr
  }

  // Resets dice
  function rollDice() {
    setDie(oldDie => oldDie.map(die => {
      return !die.isHeld ? generateNewDie() : die
    }))
  }

  // Handling "Held" dice
  function holdDice(id){
    setDie(oldDie => oldDie.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }
 

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
      <div className="dice-container">
        {die.map(dice => (
          <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} holdDice={() => holdDice(dice.id)}
        />))}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
