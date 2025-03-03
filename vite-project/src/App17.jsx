import AuthContext from "./AuthContext";
import MyComponent from './MyComponent';

function App() {
  // 사용자를 인증하고 사명자명을 가져온다.
  const userName = 'john';

  return (
    <AuthContext.Provider value={userName}>
      <MyComponent />
    </AuthContext.Provider>
  );
}

export default App;