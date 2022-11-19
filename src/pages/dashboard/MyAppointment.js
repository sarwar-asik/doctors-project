import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:3003/bookings?email=${user?.email}`;

  const {  bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const bookings = await res.json();
      return bookings;
    },
  });

  console.log('b......',bookings,'......');

  return (
    <div>
      <h1 className="text-3xl text-primary mb-5 text-center ">
        {" "}
        My AppointMent
      </h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
            bookings &&
              bookings?.map((booking, index) => (
                <tr className="hover " key={bookings._id}>
                  <th>{index + 1}</th>
                  <td>{booking.patient}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
