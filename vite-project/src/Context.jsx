// import { createContext } from "react";
// export const MenuContext = createContext(null);

// contextAPI 활용 사례 ↑
// useContext 활용 사례 ↓

import { createContext } from "react";
const Menu = {
  아메리카노: "3500",
  카페라떼: "4000",
}

export const MenuContext = createContext(Menu);

export const OpenContext = createContext();