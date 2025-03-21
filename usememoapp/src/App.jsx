import { useMemo, useState, useEffect } from "react";
import './App.css';

function App() {
  const [ number, setNumber ] = useState(0);
  const [ isTrue, setIsTrue ] = useState(true);

  // const answer = isTrue ? "true" : "false"; 기초자료형(primitive type)

  // const answer = { bool: isTrue ? "true" : "false" }; -> 이대로면 객체 주소값이 렌더링 될때마다 바뀌게 된다
  const answer = useMemo(() => {
    return { bool: isTrue ? "true" : "false" };
  }, [isTrue]);

  // answer가 바뀔 때만 콘솔이 찍히도록 useEffect 적용
  useEffect(() => {
    console.log('answer 값이 변경되었습니다.');
  }, [answer]);

  return(
    <div>
      <p>✨ number</p>
      <input 
        type="number" 
        value={number}
        onChange ={(e) => setNumber(e.target.value)}
      />
      <hr />
      <p>✨ answer</p>
      {/* <p> True or False? : {answer} </p> */}
      {/* <p> True or False? : {answer.bool} </p> */}
      <p> True or False? : {answer['bool']} </p>
      <button onClick={() => setIsTrue(!isTrue)}>Reverse</button>
    </div>
  );
}

export default App;