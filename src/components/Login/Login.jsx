import { Field, Form, Formik } from "formik";
import { useAuth } from "../../store/hooks";
import { toast } from "react-toastify";
import css from "./Login.module.css";
// import { AiOutlineLogin } from "react-icons/ai";

export const Login = () => {
  const { login } = useAuth();

  const initialValues = {
    email: "admin@gmail.com",
    password: "admin",
  };

  const handleSubmit = (values) => {
    if (values.email === "admin@gmail.com" && values.password === "admin") {
      return login(values);
    }
    toast.error("Invalid, bitch, data");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://thealmondeater.com/wp-content/uploads/2018/05/Burrata-Pistachio-White-Pizza-4.jpg.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className=" hero-content grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className=" text-center lg:text-center text-white tracking-widest animate-slide-up">
          <h1 className={css.mainTextLogin}>Join us!</h1>
          <p className={css.textLogin}>
            Welcome to our cozy pizzeria, where every slice tells a story of
            tradition, passion, and flavor. Nestled in the heart of the city,
            our little corner of Italy brings the warmth and aroma of freshly
            baked pies to your table.
          </p>
        </div>
        <div className=" w-full lg:w-auto p-12 flex justify-center items-center">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                className="card-body grid grid-cols-1 gap-8 rounded-3xl"
                style={{ background: "rgba(255, 255, 255)" }}
              >
                <div className="form-control">
                  <label className="label text-black">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered text-black rounded-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-black">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered text-black rounded-full"
                    required
                  />
                </div>
                <div className="form-control">
                  <div className="form-control">
                    <button type="submit" className={css.btnLogin}>
                      <span className="bg-gradient-to-r from-orange-500 to-orange-700 "></span>
                      Login
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
