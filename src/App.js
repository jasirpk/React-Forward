import './App.css'
import Header from './components/Header'
import { useState } from 'react';

function App() {
  const data = "description view"
  let count = 0;
  function addCount(){
    count = count+1
  }
  return (
    <div>
      <button onClick={addCount}>Add</button>
      <h1>Conter: {count}</h1>
  
    </div>
  );
}

export default App;
 