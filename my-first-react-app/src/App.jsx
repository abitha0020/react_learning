import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Hello World</h1>
      </div>
      <p className="read-the-docs">
        A New Tech Journey
      </p>
    </>
  )
}

export default App