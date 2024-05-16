import { usePages } from "../../store/hooks";
import css from "./Home.module.css";

export const Home = () => {
  const { setPage } = usePages();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://www.tasteofhome.com/wp-content/uploads/2018/01/EXPS_HCK17_153207_B08_26_6b.jpg?fit=1024,1024)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className={css.mainTextHome}>Hello, admin!</h1>
          <p className="mb-5">
            Thank you for managing our system efficiently. Your dedication is
            greatly appreciated.
          </p>
          <button
            onClick={() => setPage("pizzas")}
            className={css.btnGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
