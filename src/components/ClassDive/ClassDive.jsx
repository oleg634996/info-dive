import {  useState } from "react"
import PositionDive from "../PositionDive/PositionDive"

const ClassDive = ({data,onData})=>{
   const [positionData,setPositionData]= useState()

   const onDataDive =(data)=>{
    onData(data)
   }

const keys = Object.keys(data)

    return (<div className="select">
        <select className="height-dive" onChange={(event)=>{setPositionData(data[event.target.value])}}>
        <option defaultValue></option>
        {keys.map(key =>{
            return <option 
            key={key}
             value={key}
             style={{fontSize:"35px"}}
             >{key}</option> 
        }
        )
    }
        </select>
        <PositionDive positionData={positionData} onDataDive={onDataDive} />
    </div>)
}

export default ClassDive
