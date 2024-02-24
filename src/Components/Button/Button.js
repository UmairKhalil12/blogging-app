import './Button.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import useStore from '../../Utility/Zustand/Zustand'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../Utility/Firebase/firebase'

export default function Button({ text  , type}) {
    
    return (
        <button className='navbar-btn' type={type} >{text}</button>
    )
}
