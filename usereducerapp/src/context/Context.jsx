import { createContext, useReducer } from "react";
import Reducer from "../reducer/Reducer";

const INITIAL_STATE = { isLogin: false, message: '' };

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
}

export default Context;