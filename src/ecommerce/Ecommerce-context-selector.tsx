import {
  useLogin,
  useLogout,
  useAddToCart,
  useUser,
  useCartCount,
  StoreContextProvider,
} from "./store-context-selector";

const LoginSection = () => {
  const login = useLogin();
  const logout = useLogout();
  return (
    <>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
    </>
  );
};

const UserSection = () => {
  const user = useUser();
  return <div>User:{user}</div>;
};

const AddToCartSection = () => {
  const addToCart = useAddToCart();
  return (
    <>
      <button onClick={addToCart}>AddToCart</button>
    </>
  );
};

const CartCountSection = () => {
  const cartCount = useCartCount();
  return <div>cartCount:{cartCount}</div>;
};

const ContextSelectorPage = () => {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
};

const ContextSelectorPageWrapper = () => {
  return (
    <StoreContextProvider>
      <ContextSelectorPage />
    </StoreContextProvider>
  );
};

export default ContextSelectorPageWrapper;
