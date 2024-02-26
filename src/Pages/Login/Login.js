import './Login.css'
import Label from '../../Components/Label/Label'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import useStore from '../../Utility/Zustand/Zustand'
import { auth } from '../../Utility/Firebase/firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const { email, pass } = useStore();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
      toast.success("Logged in Successfully")
      navigate('/home')
    })
      .catch((error) => {
        toast.error("Error logging in")
        console.log("Error logging in ", error)
        console.log("Error logging in ,error message ", error.message)
      })

  }

  return (
    <>
      <div className='form-main'>
        <form className='form-main-div' onSubmit={handleLogin}>
          <Label text='Enter your Email' />
          <Input type='email' />

          <Label text='Enter your password' />
          <Input type='password' />

          <Button text='Login' />

          <p className='form-link-p' onClick={()=>navigate('/forgetpassword')}>Forget Password?</p>

          <p className='form-link-p' onClick={() => navigate('/signup')}>Don't have an Account? Signup</p>
          

        </form>
      </div>

      <ToastContainer />
    </>
  )
}
