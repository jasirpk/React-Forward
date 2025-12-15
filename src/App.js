import { useState } from 'react';
import Employee from './components/Employee';

function App() {
  const [count, setCount] = useState(0)
  const addCount = () => {
    setCount(count + 1)
  }

  let emp =[
    {name: "jasir",age: 24},
    {name: "Arif", age: 30},
    {name: "Ranju", age: 50}
  ]
  return (
    <div>
      <button onClick={addCount}>Add</button>
      {
        emp.map((obj,index)=>{
          return (
            <Employee key={index} {...obj}/>
          )
        })
      }

    </div>
  );
}

export default App;
