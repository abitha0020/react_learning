import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Try'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
     <Test />
     <h2>failed</h2>
    </div>
  )
}

export default App
