import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import qoutes from "../../../assets/icons/quote.svg";

const Testomonial = () => {
  const revviews = [
    {
      name: "Winson Herry",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      place: "California",
    },
    {
      name: "Zinku Mia",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      place: "NewYork",
    },
    {
      name: "Diku Toy",
      details:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      place: "North Dakota",
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <p>
          <h5 className="text-xl font-semibold text-primary"> Testomonial </h5>
          <h2 className="text-3xl font-normal"> What Our Patient Says</h2>
        </p>
        <figure>
          <img className="w-1/2 mx-auto" src={qoutes} alt="" />
        </figure>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 px-8 text-center">
        {revviews.map((rev) => {
          return (
            <div className="  shadow-lg p-8 ">
              <p> {rev.details}</p>
              <div className="flex gap-5 items-center mt-5">
                <figure>
                  {" "}
                  <img
                    className=" rounded-full border-solid border-4 border-primary"
                    src={rev.img}
                    alt=""
                  />
                </figure>
                <p>
                  <h4> {rev.name}</h4>
                  <h6>{rev.place}</h6>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Testomonial;
