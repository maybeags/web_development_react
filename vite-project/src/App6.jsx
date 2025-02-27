import { useState } from 'react';
import './App.css';

function App6() {
  const [ count1, setCount1 ] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  const increment = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
  }

  return(
  <>
    <p>카운터 넘버1 : {count1}</p>
    <p>카운터 넘버2 : {count2}</p>
    
    <br/>

    <button onClick={increment}>증가</button>
  </>
  )
}

export default App6;