import { useState } from "react"

 
 const SumDiving = ({infoDive})=>{
    const [array ] = useState([1,2,3])
    const [sum, setSum]=useState()

   const  onSubmit= (event)=>{
    event.preventDefault()
    const input1 = Number(event.target[0].value)
    const input2 = Number(event.target[1].value)
    const input3 = Number(event.target[2].value)
    setSum(input1 + input2+input3)
    event.target[0].value = ""
    event.target[1].value=""
    event.target[2].value= ""
    }

const score = sum * Number(infoDive)

 return <form onSubmit={onSubmit}>
    <h2 className="subtitel">Сума стрибка</h2>
    <div class="rating">
        {array.map(arr=>{
            return <input type="text"
            key={arr}
            id={arr}
            className="input-rating"
            />
        })}
    </div>
    <p className="score" style={{fontSize:"30px",fontWeight:"900"}}>{score.toFixed(2)}</p>
    <button type="submit" className="btn" style={{marginBottom:"10px"}}>Розрахувати</button>
 </form>
 }

 export default SumDiving