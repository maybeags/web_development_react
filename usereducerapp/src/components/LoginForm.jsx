import { useState, useContext } from "react";
import Context from "../context/Context";

function LoginForm() {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');

  const { state, dispatch }  = useContext(Context);

  const userInfo = {
    id: 'react',
    password: 'qwer1234',
  };

  const handleLoginForm = (event) => {
    event.preventDefault();

    if (id === userInfo.id && password === userInfo.password) {
      dispatch({type: "LOGIN_SUCCESS", payload: userInfo});
    } else if (id !== userInfo.id && password === userInfo.password) {
      dispatch({type: "MISS_ID"});
    } else if (id === userInfo.id && password !== userInfo.password) {
      dispatch({type: "MISS_PASSWORD"});
    } else {
      dispatch({type: "LOGIN_FAILURE"});
    }
  };

  return(
    <form action="" onSubmit={handleLoginForm}>
      <label>아이디(ID)</label>
      <input type="text" 
        placeholder="아이디(ID)를 입력하세요 :)" 
        onChange={(event) => setId(event.target.value)}
        />
      <br />
      <br />
      <label>비밀번호(PASSWORD)</label>
      <input type="text" 
        placeholder="비밀번호(PASSWORD)를 입력하세요 :)" 
        onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <button>Sign In</button>
        <br />
        <p>{state.message}</p>  
    </form>
  );
}

export default LoginForm;