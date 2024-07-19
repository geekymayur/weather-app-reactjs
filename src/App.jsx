import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-900 h-dvh min-w-full'>
        <Welcome />


      </div>

    </>
  )
}

export default App
