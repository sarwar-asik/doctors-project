import React from "react";
import doctor from '../../../assets/images/doctor.png'
import img from '../../../assets/images/appointment.png'
import PrimaryBtn from "../../../components/primaryBtn/PrimaryBtn";

const MakeAppointment = () => {
  return (
    <section className="mt-16 ">
      <div className="hero   text-white " style={{'backgroundImage':`url(${img})`}}>
        <div className="hero-content flex-col lg:flex-row">
         <figure>
         <img
            src={doctor}
            className="lg:-mt-36 hidden lg:block md:block md:-mt-36 lg:max-w-xl  rounded-lg  "
            alt=""
          />
         </figure>
          <div>
            <h4 className="text-primary font-semibold">Appointment </h4>
            <h1 className="text-4xl font-semibold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryBtn> Appointment Doctor </PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
