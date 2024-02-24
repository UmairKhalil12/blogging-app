import { useState } from 'react'
import './Navbar.css'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Button from '../Button/Button';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className={toggleMenu ? 'navbar' : ''}>
            <div className={toggleMenu ? 'navbar-main-responsive' : 'navbar-main'}>
                <div className={toggleMenu ? 'navbar-main-logo-responsive' : 'navbar-main-logo'}>
                    <h2>BLOGGG</h2>
                </div>

                <div className={toggleMenu ? 'navbar-main-link-responsive' : 'navbar-main-link'}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Details</p>
                </div>

                <div className={toggleMenu ? 'navbar-main-login-responsive' : 'navbar-main-login'}>
                    <Button text='Signup' />
                    <Button text='Login' />
                </div>

                <div className='navbar-main-icon' onClick={handleToggleMenu} >

                    {
                        toggleMenu ?
                            <div className='nav-icon'>
                                <IoCloseSharp size={25} />
                            </div> :

                            <div>
                                <IoMdMenu size={25} />
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}
