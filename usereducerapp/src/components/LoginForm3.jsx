import { useState } from "react";

export default function LoginForm({ state, dispatch }) {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');

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
      <label>아이디</label>
      <input type="text" 
        placeholder='type your id' 
        onChange={(event) => setId(event.target.value)} />
      <br />
      <br />
      <label>패스워드</label>
        <input type="text" 
          placeholder='type your password' 
          onChange={(event) => setPassword(event.target.value)} />
      <br />
      <br />
      <button>로그인 하기</button>
      <br />
      <p>{state.message}</p>
    </form>
  );
}