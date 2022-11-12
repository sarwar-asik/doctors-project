import React from "react";
import chair from "../../../assets/images/chair.png";
import bg2 from "../../../assets/images/bg.png";
import PrimaryBtn from "../../../components/primaryBtn/PrimaryBtn";

const Banner = () => {
  return (
    <div
    className="hero  bg-base-200 py-52 "
    style={{ backgroundImage: `url(${bg2})` }}
  >
    <div className="hero-content  flex-col lg:flex-row-reverse">
      <img src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" alt="" />
      <div>
        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
        <p className="mt-4">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem .
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </div>
  </div>
  );
};

export default Banner;
