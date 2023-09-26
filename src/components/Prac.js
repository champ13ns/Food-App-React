import React,{useState} from 'react'
function random(){
    return Math.random() * 100;
}

const Prac = ()=>{
    const[stateA,setStateA]=useState('A')
    const[stateB,setStateB] = useState('B')
    return(
        <> 
        <div style={{width:'100px', height:'400px' , color:'red' , cursor:'pointer'}} onClick={(e) => {setStateA(random())
           console.log( stateA);
        }}>Change A state </div>
        <div style={{width:'100px', height:'100px' , color:'green'}} onClick={(e) => setStateB(random())}>Change B state </div>
        </>
    )
}

export default Prac;