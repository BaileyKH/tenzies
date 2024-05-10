import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

import { Dice } from './Dice'
import './App.css'

function App() {

  const [die, setDie] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [count, setCount] = useState(0)

  // When user wins
  useEffect(() => {
      const allHeld = die.every((dice) => dice.isHeld) 
      const firstValue = die[0].value
      const allValue = die.every(dice => dice.value === firstValue)
    
      if (allHeld && allValue){
        setTenzies(true)
      }

  }, [die])

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
    if (!tenzies) {
      setDie(oldDie => oldDie.map(die => {
        return !die.isHeld ? generateNewDie() : die
      }))
      setCount(prevCount => prevCount + 1)
    } else {
      setTenzies(false)
      setDie(allNewDice)
      setCount(0)
    }
  }

  // Handling "Held" dice
  function holdDice(id){
    setDie(oldDie => oldDie.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  return (
    <div className="main-container">
      <div className="dice-rolls">
          <p>Rolls: {count}</p>
      </div>
      <main>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
        <div className="dice-container">
          {die.map(dice => (
            <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} holdDice={() => holdDice(dice.id)}
          />))}
        </div>
        <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
      </main>
    </div>
  )
}

export default App
