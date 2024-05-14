import { Login } from './components/Login/Login'
import { useAuth, usePages } from "./store/hooks";

export const App = () => {
  const { page, setPage } = usePages();
  const { isLoggedIn } = useAuth()

if(!isLoggedIn) {
  return <Login />
}

  return (
    <div>
      {page === "home" && (
        <h1>
          Home <button onClick={() => setPage ('ogin')}>Login</button>{" "}
        </h1>
      )}
    </div>
  )
}
