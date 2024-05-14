import { Field, Form, Formik } from "formik";
import { useAuth } from "../../store/hooks";
import { toast } from "react-toastify";

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
    <div>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.cdn.kodinkuvalehti.fi/99-yNH-OtbZYiemGMa0XGUFjgzU=/1230x0/smart/kodinkuvalehti.fi/s3fs-public/main_media/pizza_page_1_image_0001.jpg?itok=S-tOl-4E)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              in cupiditate modi iste eligendi dolor atque voluptate corrupti?
              Fugiat eveniet ex perferendis cumque, quibusdam dolorem dicta
              dignissimos corporis modi magnam!Fugiat eveniet ex perferendis
              cumque, quibusdam dolorem dicta dignissimos corporis modi magnam!
            </p>
          </div>
          <div className="card max-w-sm shadow-2xl bg-white bg-opacity-40">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="card-body grid grid-cols-1 gap-6">
      <div className="form-control">
        <label className="label text-white">
          <span className="label-text">Email</span>
        </label>
        <Field
          name="email"
          type="email"
          placeholder="email"
          className="input input-bordered text-black"
          required
        />
      </div>
      <div className="form-control">
        <label className="label text-white">
          <span className="label-text">Password</span>
        </label>
        <Field
          name="password"
          type="password"
          placeholder="password"
          className="input input-bordered text-black"
          required
        />
      </div>
      <div className="form-control">
        <button
          type="submit"
          className="btn btn-primary bg-yellow-600 hover:bg-yellow-700 text-white"
        >
          Login
        </button>
      </div>
    </form>
  )}
</Formik>

          </div>
        </div>
      </div>
    </div>
  );
};
