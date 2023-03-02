import { useState } from "react"

 
 const SumDiving = ()=>{
    const [array ] = useState([1,2,3])


    return(
        <div>
            <h2 className="subtitel">Сума стрибка</h2>
            <div class="rating">
               {array.map(arr => {
                return <input 
                key={arr} 
                id={arr}
                maxLength='3'
                className="input-rating"
                type='text'
                onChange={event => console.log(Number(event.target.id))}
                />
               })}
            </div>
        </div>
    )
 }

 export default SumDiving