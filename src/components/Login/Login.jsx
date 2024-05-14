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
        className="hero min-h-screen bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://images.cdn.kodinkuvalehti.fi/99-yNH-OtbZYiemGMa0XGUFjgzU=/1230x0/smart/kodinkuvalehti.fi/s3fs-public/main_media/pizza_page_1_image_0001.jpg?itok=S-tOl-4E)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-center lg:text-left text-neutral-300 tracking-widest animate-slide-up">
            <h1 className="text-5xl text-orange-500 tracking-widest">
              Join us!
            </h1>
            <p className="py-6">
              Welcome to our cozy pizzeria, where every slice tells a story of
              tradition, passion, and flavor. Nestled in the heart of the city,
              our little corner of Italy brings the warmth and aroma of freshly
              baked pies to your table.
            </p>
          </div>
          <div className="card max-w-sm shadow-4xl bg-white bg-opacity-40">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ handleSubmit }) => (
                <Form
                  onSubmit={handleSubmit}
                  className="card-body grid grid-cols-1 gap-6"
                >
                  <div className="form-control">
                    <label className="label text-white">
                      <span className="label-text text-white">Email</span>
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
                    <label className="label text-white">
                      <span className="label-text text-white">Password</span>
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
                    <button
                      type="submit"
                      className="btn btn-primary bg-orange-600 text-white rounded-full border-none overflow-hidden relative"
                    >
                      <span className="bg-gradient-to-r from-orange-500 to-orange-700 "></span>
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
