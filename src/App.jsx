import React from 'react'

import { Dice } from './Dice'
import './App.css'

function App() {


  return (
    <main>
      <div className="dice-container">
        <Dice
          value={1} 
        />
        <Dice
          value={2} 
        />
        <Dice
          value={3} 
        />
        <Dice
          value={4} 
        />
        <Dice
          value={5} 
        />
        <Dice
          value={5} 
        />
        <Dice
          value={4} 
        />
        <Dice
          value={3} 
        />
        <Dice
          value={2} 
        />
        <Dice
          value={1} 
        />
      </div>
    </main>
  )
}

export default App
