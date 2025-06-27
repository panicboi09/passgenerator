import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor] = useState("olive");

  return (
    <>
    <div className="w-full h-screen duration-300"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}} onClick={() => setColor("red")}
          >RED</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"black"}} onClick={() => setColor("black")}
          >BLACK</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}
          >BLUE</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"olive"}} onClick={() => setColor("olive")}
          >OLIVE</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"lavender"}} onClick={() => setColor("lavender")}
          >LAVENDER</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}} onClick={() => setColor("green")}
          >GREEN</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"grey"}} onClick={() => setColor("grey")}
          >GREY</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}
          >YELLOW</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor:"pink"}} onClick={() => setColor("pink")}
          >PINK</button>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
