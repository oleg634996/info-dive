import { useState } from "react"

const NumberDive = ({dataDive,onInfoDive})=>{
    const [value, setValue]=useState('')
    
    const data = dataDive&& dataDive[value]
    onInfoDive(data)

    return (<div>
        <input 
        className="input-dive"
            // type="text"
            inputMode="numeric"
            pattern="[0-9]*"
         maxLength="4"
         autoComplete="on" 
         onChange={event=>setValue(event.target.value)}
         value={value}
         />
        {value ==='' ?( <p className="text">Введіть номер стрибка</p>):('')||( !data&& <p className="text">Такого стрибка немає</p>) }
        
         
    </div>)
}

export default NumberDive