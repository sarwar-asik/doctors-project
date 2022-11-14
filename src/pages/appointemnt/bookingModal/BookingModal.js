import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, selected ,setTreatment}) => {

  const date = format(selected, "PPpp")
  const { name, slots } = treatment;
  const addBooking = event =>{
    event.preventDefault()
    const form = event.target;
    const name =form.name.value
    const slot = form.slot.value
    const phone = form.phone.value
    const email = form.email.value
    // console.log(name,slot,phone,email);
    const booking = {
      selected:date,
      treatment:name,
      patient:name,
      slot,
      email,
      phone
    }
    console.log(booking);
    setTreatment(null)
  }

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
          <form onSubmit={addBooking} action="" className="grid grid-cols-1 gap-5 mt-10">
            <input
              type="text "
              className="input w-full input-bordered "
              value={date}
              disabled
            />
            <select name='slot' className="select select-bordered w-full ">
              {slots.map((slot,i) => (
                <option 
                key={i}
                value={slot}>{slot}</option>
              ))}
            </select>
            <input
            name="name"
              type="text "
              className="input w-full input-bordered "
              placeholder="Full Name"
            />
            <input
            name="phone"
              type="text "
              className="input w-full input-bordered "
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="email"
              className="input w-full input-bordered "
              placeholder="E-mail "
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
