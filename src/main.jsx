import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./css/index.css";
import { PizzaProvider } from "./store/PizzaProvider.jsx";
import { PageProvider } from "./store/PageProvider.jsx";
import { AuthProvider } from "./store/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <PizzaProvider>
    <AuthProvider>
      <PageProvider>
        <App />
        <ToastContainer autoClose={1500} />
      </PageProvider>
    </AuthProvider>
  </PizzaProvider>
);
