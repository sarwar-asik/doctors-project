import React from "react";
import PrimaryBtn from "../../../components/primaryBtn/PrimaryBtn";

const AppointmentOptions = ({ option,setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="text-center shadow-xl p-8  rounded-2xl">
      <h5 className="text-primary text-2xl font-semibold my-3">{name}</h5>
      <h6 className="font-medium ">
        {slots.length > 0 ? slots[0] : "Try Another Day"}
      </h6>
      <h6>
        {" "}
        {slots.length} {slots.length > 1 ? " spaces are" : "space is"} Available{" "}
      </h6>

      
<label onClick={()=> setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary  mt-3 text-white ">Book Appointment </label>

    </div>
  );
};

export default AppointmentOptions;