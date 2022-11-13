import React from "react";
import Banner from "./banner/Banner";
import DrentalCare from "./dantalCare/DentalCare";
import InfoCards from "./infocards/InfoCards";
import MakeAppointment from "./makeAppointment/MakeAppointment";
import Services from "./services/Services";
import Testomonial from "./testomonial/Testomonial";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DrentalCare></DrentalCare>
      <MakeAppointment></MakeAppointment>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
