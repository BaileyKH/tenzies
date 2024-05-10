import { useState } from 'react'

import { Dice } from './Dice'
import './App.css'

function App() {

  const [die, setDie] = useState(allNewDice())

  function allNewDice() {
    let numberArr = []
    for (let i = 0; i < 10; i++){
      numberArr.push(Math.ceil(Math.random() * 6))
    }
    return numberArr
  }

  function rollDice() {
    setDie(allNewDice())
  }

  return (
    <main>
      <div className="dice-container">
        {die.map(dice => <Dice value={dice} />)}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
