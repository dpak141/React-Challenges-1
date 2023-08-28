import './App.css'
import { useState } from 'react';

function App() {

  const [temp, setTemp] = useState(() => 10)
  const [tempColor, setTempColor] = useState("cold")

  function btnIncrease() {
    const newTemp = temp + 1


    setTemp(newTemp)
    if (newTemp > 15) {
      setTempColor('hot')
    }
  }



  function btnDecrease() {
    const newTemp = temp - 1


    setTemp(newTemp)
    if (newTemp < 15) {
      setTempColor('cold')
    }
    console.log("clikced");

  }

  return (
    <>
      <div className='card'>
        <h1>Temperature</h1>
        <div className={`card__circle ${tempColor}`}>{temp}° C </div>
        <div className="btn">
          <button className='btnSub' onClick={btnDecrease} disabled={temp <= 0} >-</button>
          <button className='btnAdd' onClick={btnIncrease} disabled={temp >= 30}>+</button>
        </div>
      </div>
    </>
  )
}

export default App
