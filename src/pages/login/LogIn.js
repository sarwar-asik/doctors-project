import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";
import useToken from "../../token/useToken";

const LogIn = () => {
  const { login,googleSignIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState("");


  
const [loginUserEmail,setLogInUserEmail ]= useState('')
const [token]=useToken(loginUserEmail)
if(token){
 return  navigate(from, {replace:true})

}


  
  const handleLogIn = (data) => {

    console.log(data);
    const email = data.email;
    const password = data.password;
    // console.log(errors,email,password);

    login(email, password)
      .then((result) => {
        toast("Log In Success");
        setError("");
        setLogInUserEmail(data.email)


      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl text-center font-medium"> Log In </h2>
        <form onSubmit={handleSubmit(handleLogIn)}>
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
          <p className="text-xl text-red-500"> {error}</p>
          <input
            className="btn btn-accent w-full my-3"
            value="Log In "
            type="submit"
          />
        </form>
        <p>
          {" "}
          New to Doctor Portal ?{" "}
          <Link to="/signup" className="text-primary">
            {" "}
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={googleSignIn} className="btn btn-outline w-full text-lg ">
          {" "}
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
