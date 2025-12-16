// import { useState } from 'react';
// import Employee from './components/Employee';

// function App() {
//   const [count, setCount] = useState(0)
//   const addCount = () => {
//     setCount(count + 1)
//   }

//   let emp =[
//     {name: "jasir",age: 24},
//     {name: "Arif", age: 30},
//     {name: "Ranju", age: 50}
//   ]
//   return (
//     <div>
//       <button onClick={addCount}>Add</button>
//       {
//         emp.map((obj,index)=>{
//           return (
//             <Employee key={index} {...obj}/>
//           )
//         })
//       }

//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'
import Counter from './components/Counter'

function App() {
  const [state,setState] = useState(false)
  return (
    <div className='App'>
      <h1 onClick={()=> setState(!state)}> Show / Hide </h1>
      {state && <Counter/>}
    </div>
  )
}

export default App

/// lifecycle phases ///

// Mounting - Component is created & added to the DOM
// UnMounting - Component is removed from the DOM
// Updating - Component re-renders due to changes