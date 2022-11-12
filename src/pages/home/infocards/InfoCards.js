import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import SingleCard from "./SingleCard";

const InfoCards = () => {
  const cards = [
    {
      id: 1,
      name: "Opening Hour",
      details: "We open our office in 8 am to 6pm",
      icon: clock,
      bg: "btn-primary bg-gradient-to-r from-primary to-secondary ",
    },
    {
      id: 2,
      name: "Visit Our Location",
      details: "Mirpur ,Dhaka ,BD",
      icon: marker,
      bg: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      details: "01609989...",
      icon: phone,
      bg: "btn-primary bg-gradient-to-r from-primary to-secondary ",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card) => {
        return <SingleCard key={card.id} card={card}></SingleCard>;
      })}
    </div>
  );
};

export default InfoCards;
