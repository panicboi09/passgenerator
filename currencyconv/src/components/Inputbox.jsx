import React,{useId} from "react";


function InputBox ({amount,onAmountchange,label,currencyOpt=[],onCurrchange,currDisable = false,amountDisable = false,className="",selectcurr = "usd"}) {
const amountId = useId()
return (
    <>
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
<div className="w-1/2">
<label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
{label}
</label>
<input id={amountId} className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount" disabled={amountDisable} value={amount} onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}>
</input>
</div>
<div className="w-1/2 flex flex-wrap justify-end text-right">
<p className="text-black/40 mb-2 w-full">Currency Type</p>
<select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectcurr} onChange={(e) => onCurrchange && onCurrchange(e.target.value)} disabled={currDisable}>
   {currencyOpt.map((currency) => (
    <option key={currency} value={currency}>
        {currency}
    </option>
   ))}
</select>
</div>
    </div>
    </>
)
}
export default InputBox;