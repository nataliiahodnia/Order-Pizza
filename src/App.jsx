import { Login } from "./components/Login/Login";
import { Home } from "./pages/Home";
import { useAuth, usePages } from "./store/hooks";
import { Pizzas } from "./pages/Pizzas";
import { Header } from "./components/Header/Header"

export const App = () => {
  const { page, setPage } = usePages();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }

  return ( 
    <div>
     <Header />
     {page === "home" && <Home />}
     {page === "pizzas" && <Pizzas />}
    </div>
    
    ) 
};
