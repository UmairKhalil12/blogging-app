import { useState } from 'react'
import './Login.css'
import Label from '../../Components/Label/Label'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate();
  return (
    <div className='form-main'>

      <div className='form-main-div'>
        <Label text='Enter your Email' />
        <Input type='email' />

        <Label text='Enter your password' />
        <Input type='password' />

        <Button text='Login' />

        <p className='form-link-p' onClick={() => navigate('/signup')}>Don't have an Account? Signup</p>

      </div>

    </div>
  )
}
