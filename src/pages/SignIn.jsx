import React from "react";
import { Link, useNavigate } from "react-router-dom";
import amaizo from "../assets/images/1 3.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../components/utils/Button";

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please Enter Valid Email").required("Required"),
    password: Yup.string()
      .min(8, "password should be at least 8 character ")
      .required("Required"),
  });

  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black flex-col ">
        <div class="h-auto w-auto md:w-auto  rounded-2xl bg-gradient-to-r from-blue-500 from-10% via-pink-500 via-90% to-orange-500 to-99% p-0.5 ">
          <div className="bg-gray-950 text-white p-10 rounded-2xl shadow-lg w-96 md:w-[500px] opacity-90">
            <div className="flex justify-center mb-6">
              <img src={amaizo} alt="amaizo Logo" />
            </div>
            <h2 className="text-4xl font-semibold text-center mb-2">Log In</h2>
            <p className="text-center mb-6">Welcome Back To AMAIZO</p>
            <div className="mb-6">
              <Button
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="Google Logo"
                text="Sign Up With Google"
              />
              <Button
                src="https://img.icons8.com/ios-filled/16/ffffff/mac-os.png"
                alt="Apple Logo"
                text="Sign Up With Apple"
              />
              <Button text="Sign Up with Single Sign-On" />
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form>
                  <div className="mb-1">
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full py-2 px-6  text-black rounded-xl"
                      required
                    />
                    <ErrorMessage name="email" />
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="w-full py-2 px-6 mt-2 text-black rounded-xl"
                      required
                    />
                    <ErrorMessage name="password" />
                  </div>
                  <p className="text-center text-gray-400 text-base">
                    Forgot Password?
                  </p>

                  <button className="w-full py-2 mt-6 text-white bg-[#FF9478] rounded-lg">
                    {props.isSubmitting ? "Loading..." : "Log In"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <p className="text-center  text-white">
          Don't Have An Account?
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
