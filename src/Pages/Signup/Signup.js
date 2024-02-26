import React from 'react'
import './Signup.css'
import Label from '../../Components/Label/Label'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom'
import useStore from '../../Utility/Zustand/Zustand'
import { auth } from '../../Utility/Firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {
  const navigate = useNavigate();
  const { email, pass , name  ,userInfo} = useStore();

  const handleSignup = (event) => {
    event.preventDefault();
    // console.log('Signup', email, pass, auth);
    createUserWithEmailAndPassword(auth, email, pass).then((userCredential) => {
      toast.success("User registered sucessfully")

     userCredential.user.displayName = name;

      navigate('/home')
    })
      .catch((error) => {
        toast.error('Error creating user')
        console.log(error)
        console.log(error.message)
        console.log(error.code)
      })
  }

  return (
    <>
      <div className='main-signup'>
        <form className='form-main-div' onSubmit={handleSignup}>
          <Label text='Enter your full name ' />
          <Input type='text' />

          <Label text='Enter your email' />
          <Input type='email' />

          <Label text='Enter your password' />
          <Input type='password' />

          <Button text='Signup' type='submit' />

          <p className='form-link-p' onClick={() => navigate('/login')}>Already have an account?</p>

        </form>
      </div>
      <ToastContainer />
    </>
  )
}
