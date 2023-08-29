import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })


  function handleChange(event) {
    const { name, value, type } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (formData.firstName === "" || formData.lastName === "" || formData.email === "") {
      alert("Please fill me")

    } else {
      alert("Successfuly Submitted")

    }
  }

  return (
    <div className='form-container'>
      <form action="" className='form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="form--input"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="form--input"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <button
          className="form--submit"
        >
          Sign up
        </button>
      </form>

    </div>
  )
}

export default App
