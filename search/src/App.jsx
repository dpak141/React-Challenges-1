import { useState } from 'react'
import JSONDATA from "./MOCK_DATA.json"

import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  function handelChange(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <div className='center'>

      <div>
        <input className="form--input"
          type="text"
          placeholder='Search...'
          onChange={handelChange}
        /></div>

      <div className='data'>
        {JSONDATA.filter(val => {
          if (searchTerm == "") {
            return val
          } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        })
          .map((val, key) => {
            return <div key={key}>{val.first_name}</div>
          })}
      </div>

    </div>
  )
}

export default App
