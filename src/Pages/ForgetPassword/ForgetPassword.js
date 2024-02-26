import React from 'react'
import './ForgetPassword.css'
import Label from '../../Components/Label/Label'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../Utility/Firebase/firebase'
import useStore from '../../Utility/Zustand/Zustand'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

export default function ForgetPassword() {
    const { email } = useStore();
    const navigate = useNavigate();
    // console.log("password forget email" , email)

    const handlePasswordResetHandler = (event) => {
        event.preventDefault();
        sendPasswordResetEmail(auth, email).then(() => {
            toast.success('Password reset email sent successfully');
            navigate('/login')
        })
            .catch((error) => {
                toast.error("Error sending link");
                console.log("error sending password reset link", error.message);
            })
    }
    return (
        <div className='main-forget-pass-form'>
            <form className='forget-pass-form' onSubmit={handlePasswordResetHandler}>
                <Label text='Enter your email' />
                <Input type='email' />
                <Button text='Send reset link' type='submit' />
            </form>
            <ToastContainer />
        </div>
    )
}
