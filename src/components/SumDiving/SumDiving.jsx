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
console.log(typeof(infoDive))
const score = sum * Number(infoDive)
console.log(score)
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
    <p className="score">{score}</p>
    <button type="submit" className="btn">Розрахувати</button>
 </form>
    // return(
    //     <div>
    //         <h2 className="subtitel">Сума стрибка</h2>
    //         <div class="rating">
    //            {array.map(arr => {
    //             return <input 
    //             key={arr} 
    //             id={arr}
    //             maxLength='3'
    //             className="input-rating"
    //             type='text'
    //             onChange={event => console.log(Number(event.target.id))}
    //             />
    //            })}
    //         </div>
    //     </div>
    // )
 }

 export default SumDiving