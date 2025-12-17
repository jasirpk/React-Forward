import React, { useEffect, useState } from 'react'

function Counter() {
useEffect(()=>{
  console.log("Mounting...");
  return ()=>{
    console.log("unmounting...");
  }
},[])

  const [conunt,setCount] = useState(0)
  return (
    <div>
      <button onClick={()=>setCount(conunt+1)}>Increment</button>
      <h1>Hello Iam Component {conunt}</h1>
    </div>
  )
}

export default Counter
