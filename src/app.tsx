import React from 'react'
import Image from '../assets/react.png'
import Logo from '../assets/react-logo.svg'
import './styles/index.css'
export const App = () => {
  const num = 0
  let name ="dddddd"

  let [count, setCount] = React.useState(0)
  const hanldeButtonClick = () => {
    setCount((count) => count + 1)
    console.log()
  }
  return (
    <div>
      App
      <img src={Image} alt="react logo" width="300" height="200" />
      <img src={Logo} alt="react logo" width="300" height="200" />
      <button onClick={hanldeButtonClick}>Count{count}</button>
    </div>
  )
}
