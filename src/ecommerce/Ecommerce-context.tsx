import {
  useLogin,
  useLogout,
  useAddToCart,
  useSubtractToCart,
  useUser,
  useCartCount,
  StoreContextProvider,
} from "./store-context";

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
  const subtractToCart = useSubtractToCart();
  return (
    <>
      <button onClick={addToCart}>AddToCart</button>
      <button onClick={subtractToCart}>SubtractToCart</button>
    </>
  );
};

const CartCountSection = () => {
  const cartCount = useCartCount();
  return <div>cartCount:{cartCount}</div>;
};

const ContextPage = () => {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
};

const ContextPageWrapper = () => {
  return (
    <StoreContextProvider>
      <ContextPage />
    </StoreContextProvider>
  );
};

export default ContextPageWrapper;
