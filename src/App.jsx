import { useState } from 'react'
import './App.css'

function App() {
  const items = ["item1", "item2", "item3", "item4", "item5"]

  return (
    <div>
      <p>List of items:</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
