import { useNavigate } from 'react-router-dom'
import './Button.css'
import { signOut } from "firebase/auth";
import {auth} from '../../Utility/Firebase/firebase'

export default function Button({ text  , type}) {
    const navigate = useNavigate();
    
    const handleClick = () =>{
        if(text === 'Signup'){
            navigate('/signup')
        }
        else if(text === 'Login'){
            navigate('/login')
        }
        else if(text === 'Signout'){
            signOut(auth).then(()=>{
                alert("User logged out sucessfully")
            })
            .catch((error)=>{
                console.log("Error logging out user " , error.message)
                alert("Error logging out user " , error.message)
            })
        }
    }
    return (
        <button className='navbar-btn' type={type} onClick={handleClick} >{text}</button>
    )
}
