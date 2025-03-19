import { useState } from "react";

export default function LoginForm({ setIsLogin }) {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleLoginForm = (event) => {
    event.preventDefault();
    // 사전 설정 id 및 비밀번호 일치 여부를 확인하는 조건문
    if (id === 'react' && password === 'qwer1234') {
      // 다 일치해야지 여기가 실행되기 때문에 isLogin 상태를 바꿔야 합니다.
      setIsLogin(true); // 얘를 실행시키기 위해서 LoginForm()을 수정해야함.
      // LoginForm({ setIsLogin }) 바꾸고나면 오류 발생하는데
      // App.jsx에서 <LoginForm />을 수정해줘야 합니다. -> App.jsx 참조할 것
      setMessage("로그인 성공🕶");
    } else {
      setMessage('로그인 실패😂');
    }
  } 

  return(
    <form action="" onSubmit={handleLoginForm}>
      <label>ID</label>
      <input type="text" 
        placeholder="아이디를 입력하세요" 
        onChange={(event) => setId(event.target.value)} />
        <br /><br />
      <label>Password</label>
      <input type="password" 
        placeholder="비밀번호를 입력하세요" 
        onChange={(event) => setPassword(event.target.value)} />
      <br />
      <br />
      <button>로그인</button>
      <br />
      <p>{message}</p>
    </form>
  );
}