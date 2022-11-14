import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext } from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";
import app from "../../firebase/Firebase.config";

const Signup = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const auth = getAuth(app);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (data) => {
    // console.log(data);

    const name = data.name;
    const email = data.email;
    const password = data.password;

    console.log(name, email, password);

    console.log(errors);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmX-E07-hBehmElZgn8GjLQtKhojH_yYVxcY_Jqz0&s",
        })
          .then(() => {
            toast("Sign Up");
            setError("");
          })
          .catch((er) => {
            setError(er.message);
          });
      })
      .catch((e) => {
        setError(e.message);
        console.log(e);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center font-medium"> Sign Up </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Your Name </span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          {/* <Header /> */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Your Email </span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">YourPassword</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required ",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character .",
                },
              })}
              type="password"
              className="input input-bordered w-full max-w-xs"
            />

            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}

            <label className="label">
              <span className="label-text-alt">Forget password ?</span>
            </label>
          </div>
          <h6 className="text-red-500">{error}</h6>
          <input
            className="btn btn-accent w-full my-3"
            value="Sign Up  "
            type="submit"
          />
        </form>
        <p>
          {" "}
          Already have an Account ?{" "}
          <Link to="/login" className="text-primary">
            {" "}
            Please Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={googleSignIn}
          className="btn btn-outline w-full text-lg "
        >
          {" "}
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
