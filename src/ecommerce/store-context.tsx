// import { useState, createContext, useContext } from "react";

// const useStore = () => {
//   const [user, setUser] = useState("");
//   const [cartCount, setCartCount] = useState(0);

//   return {
//     user,
//     cartCount,
//     login: () => setUser("giso"),
//     logout: () => setUser(""),
//     addToCart: () => setCartCount(cartCount + 1),
//   };
// };

// const StoreContext = createContext(null);

// export const StoreContextProvider = ({ children }: any) => (
//   <StoreContext.Provider value={useStore() as any}>
//     {children}
//   </StoreContext.Provider>
// );

// export const useLogin = () => (useContext(StoreContext) as any).login;
// export const useLogout = () => (useContext(StoreContext) as any).logout;
// export const useAddToCart = () => (useContext(StoreContext) as any).addToCart;
// export const useUser = () => (useContext(StoreContext) as any).user;
// export const useCartCount = () => (useContext(StoreContext) as any).cartCount;

import { createContext, useContext, useReducer } from "react";

const initialState = {
  user: "",
  cartCount: 0,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: "giso" };
    case "LOGOUT":
      return { ...state, user: "" };
    case "ADD_TO_CART":
      return { ...state, cartCount: state.cartCount + 1 };
    case "SUBTRACT_TO_CART":
      return { ...state, cartCount: state.cartCount - 1 };
    default:
      return state;
  }
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const storeActions = {
    login: () => dispatch({ type: "LOGIN" }),
    logout: () => dispatch({ type: "LOGOUT" }),
    addToCart: () => dispatch({ type: "ADD_TO_CART" }),
    subtractToCart: () => dispatch({ type: "SUBTRACT_TO_CART" }),
  };

  return (
    <StoreContext.Provider value={{ ...state, ...storeActions }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useLogin = () => (useContext(StoreContext) as any).login;
export const useLogout = () => (useContext(StoreContext) as any).logout;
export const useAddToCart = () => (useContext(StoreContext) as any).addToCart;
export const useSubtractToCart = () =>
  (useContext(StoreContext) as any).subtractToCart;
export const useUser = () => (useContext(StoreContext) as any).user;
export const useCartCount = () => (useContext(StoreContext) as any).cartCount;
