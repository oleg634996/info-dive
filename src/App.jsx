import { useState } from 'react';
import './App.css';

import ClassDive from './components/ClassDive/ClassDive';
import NumberDive from './components/NumberDive/NumberDive';
import Coefficient from './components/Coefficient/Coefficient';
// import SumDiving from './components/SumDiving/SumDiving';
import Score from './components/Score/Score';

const  diving = require('./index.json')

function App() {
  const [data]=useState(diving)
  const [dataDive , setDataDive] = useState()
  const [infoDive, setInfoDive] = useState('')
 
   const onData  =(data)=>{
    setDataDive(data)  
   }

   const onInfoDive = (data)=>{
    setInfoDive(data)
   }

// console.log(dataDive,"data")
  return (
    <div className="container">
      <h1 className="title">Коефіцієнт складности стрибка</h1>
      <ClassDive data={data} onData={onData} />
      {dataDive ? (
        <NumberDive dataDive={dataDive} onInfoDive={onInfoDive} />
      ) : (
        <p className="text">Виберіть усі параметри</p>
      )}
      {infoDive && <Coefficient infoDive={infoDive} />}
      {infoDive && <Score infoDive={infoDive} />}
      {/* {infoDive&&<SumDiving infoDive={infoDive}/>} */}
    </div>
  );
}

export default App;
