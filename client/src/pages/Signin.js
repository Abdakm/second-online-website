import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../sections/home/Footer";
import Question from "../sections/home/Question";
import { useFormik } from "formik";
import * as Yup from "yup";
import { img4 } from "../assets/technology images/index";
import ScrollToTop from '../ScrollToTop'

export default function Signin() {
  function onSubmit(values, action) {
    action.resetForm();
  }
  const emailRules = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/;
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        message: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Required"),
        email: Yup.string()
          .matches(emailRules, { message: "Invalid Email" })
          .required("Required"),
        message: Yup.string(),
      }),
      onSubmit,
    });
  return (
    <div className="max-w-screen-2xl mx-auto">
      <ScrollToTop />
      <Navbar />
      <div className="pt-20">
        <div className="px-20 py-10 flex max-md:flex-col items-center justify-center gap-5">
          <div className="w-[600px] max-lg:w-[300px] max-md:w-[400px] max-sm:hidden">
            <img
              alt="test"
              src={img4}
              className={"h-[200px] w-[600px] rounded-lg object-cover"}
            />
            <div className="flex items-start justify-between">
              <div className="w-[300px] max-lg:w-[150px] max-md:w-[200px]">
                <h1 className="font-primary text-3xl max-lg:text-lg">
                  Head Quarter Address
                </h1>
                <p className="opacity-70 w-[200px] max-lg:w-[75px] max-md:w-[150px] max-lg:text-[9px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="w-[300px] max-lg:w-[150px]">
                <h1 className="font-primary text-3xl max-lg:text-lg">
                  Branch office
                </h1>
                <p className="opacity-70 w-[200px] max-lg:w-[75px] max-md:w-[150px] max-lg:text-[9px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
          </div>
          <div className="w-[400px] max-sm:w-[250px]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-start">
                <label className="label" htmlFor="username">
                  Username:
                </label>
                <input
                  id="username"
                  name="username"
                  className="input"
                  placeholder="Username"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                {touched.username && errors.username ? (
                  <div className="text-sm text-red-500 pl-5">
                    {errors.username}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col items-start mt-3">
                <label className="label" htmlFor="email">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <div className="text-sm text-red-500 pl-5">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col items-start mt-3">
                <label className="label" htmlFor="message">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="input"
                  style={{ height: "100px" }}
                  placeholder="Message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                {touched.message && errors.message ? (
                  <div className="text-sm text-red-500 pl-5">
                    {errors.message}
                  </div>
                ) : null}
              </div>
              <Button
                arrow={true}
                text={"Send Message"}
                background="bg-forth"
                color="primary"
                classes={"w-full py-3 fc"}
                type={"submit"}
              />
            </form>
          </div>
        </div>
        <Question />
        <Footer />
      </div>
    </div>
  );
}
