import { useMemo, useState, useEffect } from "react";

function App() {
  const [ number, setNumber ] = useState(0);
  const [ isTrue, setIsTrue ] = useState(true);

  const answer = isTrue ? "true" : "false";

  // answer가 바뀔 때만 콘솔이 찍히도록 useEffect 적용
  useEffect(() => {
    console.log('answer 값이 변경되었습니다.');
  }, [answer]);

  return(
    <>
    
    </>
  );
}

export default App;