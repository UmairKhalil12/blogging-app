import React from 'react'
import './HomePage.css'
import Header from '../../Components/Header/Header'
import useStore from '../../Utility/Zustand/Zustand'

export default function HomePage() {
  const {name} = useStore(); 
  const {userInfo} = useStore();
  console.log(userInfo , 'homepage'); 
  console.log('homepage',name)
  return (
    <div>
      <Header />
      Home 
    </div>
  )
}
