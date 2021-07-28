import React from 'react'
import Image from '../assets/react.png'
import Logo from '../assets/react-logo.svg'
import './styles/index.css'
export const App = () => {
  return (
    <div>
      App
      <img src={Image} alt="react logo" width="300" height="200" />
      <img src={Logo} alt="react logo" width="300" height="200" />
    </div>
  )
}
