import './Input.css'
import useStore from '../../Utility/Zustand/Zustand';
import { MdOutlinePassword } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useState } from 'react';

export default function Input({ type, placeholder, id, name, value, checked, Inputname }) {

  const [togglePassword, setTogglePassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const { setEmail, setPass, setName, setSelectedOption, selectedOption } = useStore();

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value === selectedOption ? '' : value);
  };

  const handleChange = (event) => {
    if (type === 'email') {
      setEmail(event.target.value);
    }
    else if (type === 'password') {
      setPass(event.target.value);
    }

    else if (type === 'text') {
      setName(event.target.value);
    }
    else if (type === 'radio') {
      setSelectedOption(event.target.value);
    }
  }

  const handleImage = () => {
    if (type === 'email') {
      return <MdOutlineEmail className='input-img' />
    }
    else if (type === 'password') {
      return <MdOutlinePassword className='input-img-2' />
    }
  }

  const handlePassword = (typeChange) => {
    setTogglePassword(!togglePassword)
    setInputType(typeChange)
  }



  return (
    <div className='main-input'>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={handleChange}
        id={id}
        name={name}
        value={value}
        checked={checked}
      />
      {handleImage()}

      {type === 'password' ?
        togglePassword
          ? <MdOutlineVisibilityOff className='input-img-pass' onClick={() => handlePassword('text')} />
          : <MdOutlineVisibility className='input-img-pass' onClick={() => handlePassword('password')} />
        : ''
      }
    </div>
  )
}
