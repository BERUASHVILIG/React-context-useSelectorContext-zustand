import {
  useLogin,
  useLogout,
  useAddToCart,
  useUser,
  useCartCount,
} from "./store-zustand";

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

const ZustandPage = () => {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CartCountSection />
    </div>
  );
};

export default ZustandPage;
