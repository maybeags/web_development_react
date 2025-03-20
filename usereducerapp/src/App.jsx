import { useContext } from "react";
import LoginForm from "./components/LoginForm";
import Context from "./context/Context";
import "./App.css";

function App() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      {state.isLogin ? (
        <>
          <strong>Welcome user 🎊</strong>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Sign Out</button>
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </div>
  );
}

export default App
