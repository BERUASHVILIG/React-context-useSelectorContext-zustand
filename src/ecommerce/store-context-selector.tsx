import { useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: () => setUser("gioo"),
    logout: () => setUser(""),
    addToCart: () => setCartCount((prev) => prev + 1),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }: any) => (
  <StoreContext.Provider value={useStore() as any}>
    {children}
  </StoreContext.Provider>
);

export const useLogin = () =>
  useContextSelector(StoreContext, (s: any) => s.login);
export const useLogout = () =>
  useContextSelector(StoreContext, (s: any) => s.logout);
export const useAddToCart = () =>
  useContextSelector(StoreContext, (s: any) => s.addToCart);
export const useUser = () =>
  useContextSelector(StoreContext, (s: any) => s.user);
export const useCartCount = () =>
  useContextSelector(StoreContext, (s: any) => s.cartCount);
