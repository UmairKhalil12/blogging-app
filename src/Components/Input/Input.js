import { useState } from 'react'
import './Input.css'
import useStore from '../../Utility/Zustand/Zustand';

export default function Input({ type, placeholder }) {
  const { email, pass, name, setEmail, setPass, setName } = useStore();

  // console.log('email ', email)
  // console.log('pass', pass)
  // console.log('name', name)

  const handleChange = (event) => {
    if (type === 'email') {
      setEmail(event.target.value)
    }
    else if (type === 'password') {
      setPass(event.target.value)
    }

    else if (type === 'text') {
      setName(event.target.value)
    }
  }

  return (
    <div className='main-input'>
      <input type={type} placeholder={placeholder} onChange={handleChange} />
    </div>
  )
}
