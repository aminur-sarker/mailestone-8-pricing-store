import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
 <LineChart></LineChart>
    </>
  )
}

export default App
