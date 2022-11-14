import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOptions from "../options/AppointmentOptions";
import BookingModal from "../bookingModal/BookingModal";

const AvailableAppoint = ({ selected }) => {
  const [appointOption, setAppointOption] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointment.json")
      .then((res) => res.json())
      .then((data) => setAppointOption(data));
  }, []);

  return (
    <section className="mt-16">
      <p className=" text-center font-bold text-secondary">
        Available Appointment {format(selected, "PPpp")}
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {appointOption.map((option) => (
          <AppointmentOptions
            setTreatment={setTreatment}
            option={option}
            key={option._id}
          ></AppointmentOptions>
        ))}
      </div>

      {treatment && (
        <BookingModal
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppoint;
