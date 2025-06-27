import { useState,useCallback,useEffect,useRef} from 'react'


import './App.css'
import {motion} from "framer-motion"

function App() {
  const [length,setLength] = useState(7);
const [num,setnum] = useState(false);
const [char,setchar] = useState(false);
const [pass,setpass] = useState("");
const passref = useRef(null);
const copypass = useCallback((
  
) => {
  window.navigator.clipboard.writeText(pass)
},[pass])
const passgen = useCallback(() => {
  let password = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(num) {
    str = str+ "1234567890";
  }
 if(char) {
  str = str+"!@#$%^&*()_-+=";
 }
 for(let i =1;i<=length;i++) {
   const chosenelmnt =Math.floor(Math.random()*str.length + 1);
   password = password + str.charAt(chosenelmnt);
 }
 setpass(password);
},[length,setnum,setchar,setpass])
 useEffect(() => {passgen()},[length,setnum,setchar]);
  
  return (
    <>
     
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
        <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
  
 
         <motion.div
        className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-[350px] space-y-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-white text-xl font-bold text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Password Generator
        </motion.h2>
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <input
            
            type="text"
            readOnly
            value={pass}
            ref={passref}
            className="flex-1 p-2 rounded-md bg-gray-700 text-white outline-none"
          />
          
          <button  className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded"
          onClick={copypass}
          >
            Copy
            
          </button>

        </motion.div>
        <motion.div
          className="flex items-center space-x-2 text-white text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <label>Length: {length}</label>
          <input
            type="range"
            min="7"
            max="64"
           value={length}
           onChange={(e) => {
            setLength(e.target.value);
           }}
            className="w-full accent-blue-500"
          />
        </motion.div>
        <motion.div
          className="flex space-x-4 text-white text-sm justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <label className="flex items-center space-x-1">
          <input
              type="checkbox"
             defaultChecked={char}
             onChange={() => {
              setchar(!char);
             }}
              className="accent-red-500"
            />
            <span>Characters</span>
            </label>
            <label className="flex items-center space-x-1">
          <input
              type="checkbox"
             defaultChecked={num}
             onChange={() => {
              setnum(!num);
             }}
              className="accent-red-500"
            />
            <span>Numbers</span>
            </label>

        </motion.div>
        
      </motion.div>
      </div>
      </div>
    </>
  )
}

export default App
