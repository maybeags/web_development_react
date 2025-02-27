import { useRef } from 'react';
import './App.css';

function App8() {
  const inputRef = useRef(null);    // 1번 과정

  return (
    <>
      <input ref={inputRef} />
      <br/><br/><br/>
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </>
    );
}

export default App8;