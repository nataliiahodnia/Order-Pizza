import { useAuth, usePages } from "../../store/hooks";
import css from "./Header.module.css";

export const Header = () => {
  const {user, logout} = useAuth()
  const {setPage} = usePages()
  const handleLogout = () => {
    logout()
    setPage('home')
  }

  return (
    <div className={css.containerHeader}>
      <h3 className={css.mainTextHeader}>Hello, admin!</h3>
      <p>{user.email}</p>
      <div className={css.navHeader}>
        <button className={css.navBtn} onClick={()=>setPage('home')}>Home</button>
        <button className={css.navBtn} onClick={()=>setPage('pizzas')}>Pizzas</button>
      <button className={css.btnLogout} onClick={handleLogout}>
        Logout</button>
      </div>
    </div>
  );
};
