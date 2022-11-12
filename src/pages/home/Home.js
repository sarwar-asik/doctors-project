import React from "react";
import Banner from "./banner/Banner";
import DrentalCare from "./dantalCare/DentalCare";
import InfoCards from "./infocards/InfoCards";
import MakeAppointment from "./makeAppointment/MakeAppointment";
import Services from "./services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DrentalCare></DrentalCare>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
