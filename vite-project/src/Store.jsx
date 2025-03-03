import { useContext } from "react";
import { OpenContext } from "./Context";

export default function Store() {
  const { isOpen, setIsOpen } = useContext(OpenContext);

  const ClickOpen = () => {
    setIsOpen(true);
  };

  const ClickClose = () => {
    setIsOpen(false);
  }
  
  return(
    <div>
      가게문이 {isOpen ? "열렸습니다🔘" : "닫혔습니다✖"}
      <br /><br /><br />
      <button onClick={ClickOpen}>가게문 열기</button>
      <br /><br /><br />
      <button onClick={ClickClose}>가게문 닫기</button>
    </div>
  );
}