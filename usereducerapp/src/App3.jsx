import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm';

function App() {
  const [ isLogin, setIsLogin ] = useState(false);

  return (
    <div>
      {isLogin ? (
        //true일 때 로그인 환영합니다
        <div>
          <strong>환영합니다✨</strong>
          <button onClick={() => setIsLogin(!isLogin)}>로그아웃</button>
        </div>
      ) : (
        // false일 때 나타나는 로그인 페이지
        <LoginForm setIsLogin={setIsLogin}/>
      )}
    </div>
  )
}

export default App
