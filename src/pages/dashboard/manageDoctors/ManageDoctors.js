import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ConfirmModal from "../../shared/confirmationModal/ConfirmModal";
import Loading from "../../shared/loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closemodal = () => {
    setDeletingDoctor(null);
  };

  const deleteDoctor = (doctor) => {
    // alert('delted')
    // console.log(doctor);
    fetch(`http://localhost:3003/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast(`doctor ${doctor.name} deleted`);
      });
  };

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:3003/doctors`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1> Mange Doctors {doctors.length} </h1>
      <div className="overflow-x-auto ">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => {
              return (
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={doctor.image} alt="doctor img" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    {/* The button to open modal */}
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirm-modal"
                      className="btn btn-error"
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {deletingDoctor && (
        <ConfirmModal
          title={`Are You sure want to Delete`}
          message={` If you Delete ${deletingDoctor.name} . It Cannot be undone`}
          closemodal={closemodal}
          doctor={deletingDoctor}
          succesAction={deleteDoctor}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
