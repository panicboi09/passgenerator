import { useState } from 'react'
import {Inputbox} from './components'
import './App.css'
import usecurrinfo from './customhooks/usecurrinfo'
function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedamnt,setConvertedamnt] = useState(0);
  const currInfo = usecurrinfo(from);
  const options = Object.keys(currInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedamnt);
    setConvertedamnt(amount);
  }
const convert = () => {
  setConvertedamnt(amount*currInfo[to]);
}

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D')`,
        }}
    >
<div className="w-full">
  <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
  <form onSubmit={(e) => {
    e.preventDefault();
    convert();
  }}>
  <div className="w-full mb-1">
    <Inputbox label="From" amount={amount} currencyOpt={options} onAmountchange={amount => setAmount(amount)} selectcurr={from} onCurrchange={(currency) => setFrom(currency)} /
    >

  </div>
<div className="relative w-full h-0.5">
  <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >Swap</button>
</div>
<div className="w-full mt-1 mb-4">
   <Inputbox label="To" amount={convertedamnt} currencyOpt={options}  selectcurr={to} onCurrchange={(currency) => setTo(currency)} 
    />
</div>
<button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    </form>
  </div>
  
</div>
    </div>
    </>
  )
}

export default App
