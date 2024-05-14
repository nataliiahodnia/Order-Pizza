import { Login } from "./components/Login/Login";
import { Home } from "./pages/Home";
import { useAuth, usePages } from "./store/hooks";
import { Pizzas } from "./pages/Pizzas";

export const App = () => {
  const { page, setPage } = usePages();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }

  return ( 
    <div>
     {page === "home" && <Home />}
     {page === "pizzas" && <Pizzas />}
    </div>
    
    ) 
};
