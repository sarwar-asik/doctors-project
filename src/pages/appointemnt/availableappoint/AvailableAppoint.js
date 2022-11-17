import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOptions from "../options/AppointmentOptions";
import BookingModal from "../bookingModal/BookingModal";
import { useQueries, useQuery } from "@tanstack/react-query";
import Loading from "../../shared/loading/Loading";

const AvailableAppoint = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);

  const date = format(selected, "PP");

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:3003/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  // const [appointOption, setAppointOption] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3003/appointmentOptions`)
  //     .then((res) => res.json())
  //     .then((data) => setAppointOption(data));
  // }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mt-16">
      <p className=" text-center font-bold text-secondary">
        Available Appointment {format(selected, "PP")}
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            setTreatment={setTreatment}
            option={option}
            key={option._id}
          ></AppointmentOptions>
        ))}
      </div>

      {treatment && (
        <BookingModal
          refetch={refetch}
          selected={selected}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppoint;
