import { useState } from 'react'
import './App.css'
import SideAccountSugg from './components/SideAccountSugg'
import SideBarMenu from './components/SideBarMenu'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Main w-[100vw] h-[100vh] flex m-[0] p-[0] bgcolor ">
        <SideBarMenu/>
        <div className='flex w-[80%] overflow-y-auto border-l border-gray-600'>
          <Slider/>
          <SideAccountSugg/>
        </div>
      </div>
    </>
  )
}

export default App
