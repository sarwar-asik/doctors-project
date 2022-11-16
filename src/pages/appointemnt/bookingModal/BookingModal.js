import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../firebase/AuthProvider";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { user } = useContext(AuthContext);

  const date = format(selected, "PP");

  const { name, slots } = treatment;
  const addBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const email = form.email.value;
    // console.log(name,slot,phone,email);
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patientName,
      slot,
      email,
      phone,
    };
    console.log(booking);

    // for post booking data //

    fetch(`http://localhost:3003/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          setTreatment(null);
          toast("Success Bookings");
        }
      });
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatment.name}</h3>
          <form
            onSubmit={addBooking}
            action=""
            className="grid grid-cols-1 gap-5 mt-10"
          >
            <input
              type="text "
              className="input w-full input-bordered "
              value={date}
              disabled
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text "
              className="input w-full input-bordered "
              placeholder="Full Name"
              defaultValue={user?.displayName}
              disabled={user?.displayName ? true : false}
            />

            <input
              type="email"
              name="email"
              className="input w-full input-bordered "
              placeholder="E-mail "
              defaultValue={user?.email}
              disabled={user?.email ? true : false}
            />
            <input
              name="phone"
              type="text "
              className="input w-full input-bordered "
              placeholder="Phone Number"
            />
            <br />
            <input
              type="submit"
              className="w-full text-white btn btn-accent"
              value="Submit "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
