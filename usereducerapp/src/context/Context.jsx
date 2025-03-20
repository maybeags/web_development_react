import { createContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";

const INITIAL_STATE = { isLogin: false, message: '' };

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return(
    <Context.Provider
      value= {{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;