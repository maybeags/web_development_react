import { useRef } from "react";

export default function App() {
  const textInput = useRef(null); // textInput {current: null}

  const ClickBtn = () => {
    console.log('클릭!');
  };

  const handleClickBtn = () => {
    console.log('useRef클릭!');
    textInput.current.focus();  // useRef가 가리키는 input 태그에 포커스 이벤트 적용
  };

  return (
    <div>
      <input type="text" />
      <input type="button" value="ref X" onClick={ClickBtn} />
      <br />
      <br />
      <br />
      <input type="text" ref={textInput} />
      <input type="button" value="ref O" onClick={handleClickBtn} />
    </div>
  );
}