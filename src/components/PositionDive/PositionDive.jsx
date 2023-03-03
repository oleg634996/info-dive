import { useEffect, useState } from "react"

const PositionDive = ({positionData, onDataDive})=>{
    const [positionDive, setPositionDive]=useState()
    
     useEffect(()=>{
       onDataDive(positionDive)
     },[onDataDive,positionDive])
    
    const keys = positionData !== undefined||null? Object.keys(positionData):''
    
    return <>
       <select className="height-dive" onChange={event => setPositionDive(positionData[event.target.value])}>
        <option defaultValue></option>
        {keys &&keys.map(key=>{
            return <option 
            style={{fontSize:"35px"}}
             key={key} 
             value={key}
             >{key}</option>
        })}
       </select>
    </>
}

export default PositionDive