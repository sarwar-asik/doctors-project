import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../shared/loading/Loading";

const AddDoctors = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  // console.log(imageHostKey);

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3003/appointmentSpeciality`);
      const data = await res.json();
      return data;
    },
  });

  const addDoctor = (data) => {
    // console.log(data);
    const name = data.name;

    const image = data.image[0];

    const email = data.email;
    // console.log(email,img,email);

    const formData = new FormData();

    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData)
        if (imgData.success) {
          // console.log(imgData.data.url)

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          // console.log(doctor);
          // save doctor to the database ///

          fetch(`http://localhost:3003/doctors`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${data.name} Doctor Added `);
              console.log(result);
              navigate("/dashboard/manageDoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7 mx-auto">
      <h1 className="text-3xl"> Add a Doctor</h1>
      <form onSubmit={handleSubmit(addDoctor)}>
        {/* name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-medium">Name </span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
            type="name"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && (
            <p className="text-red-500" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        {/* email */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-medium"> Email </span>
          </label>
          <input
            {...register("email", { required: "Email Address is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        {/* speciality */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-medium"> Speciality </span>
          </label>
          <select
            {...register("specialty")}
            className="select select-ghost input-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Please Select a Speciality
            </option>
            {specialties.map((specialty) => (
              <option className="" key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>

        {/* for upload */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-medium">Name </span>
          </label>
          <input
            {...register("image", { required: "Photo is required" })}
            aria-invalid={errors.image ? "true" : "false"}
            type="file"
            className="input input-bordered w-full py-8 text-center"
          />
          {errors.image && (
            <p className="text-red-500" role="alert">
              {errors.image?.message}
            </p>
          )}
        </div>

        <p className="text-xl text-red-500"> {error}</p>
        <input
          className="btn btn-accent w-full my-3"
          value="Add Doctor "
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctors;
