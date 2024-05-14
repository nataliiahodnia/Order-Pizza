import { useAuth, useRouter } from "../../store/hooks";

export const Header = () => {
  const { user, logout } = useAuth();
  const { changePage } = useRouter();
  return (
    <div className=" px-2 bg-blue-800 ">
      <h3>TODO APP</h3>
      <p></p>
      <div>
        <button onClick={() => changePage("home")}>Home</button>
        <button onClick={() => changePage("pizzas")}>Pizza</button>
        <button onClick={() => changePage("cart")}>Cart</button>
        <button className="btn" onClick={logout}>
          logout
        </button>
        Logout
      </div>
    </div>
  );
};
