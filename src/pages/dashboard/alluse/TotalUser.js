import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const TotalUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://doctor-portal-server-chi.vercel.app/users`
      );
      const data = await res.json();
      return data;
    },
  });

  const MakeAdmin = (id) => {
    // toast('suucccc')
    fetch(`https://doctor-portal-server-chi.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Success Admin");
          console.log(data);
          refetch();
        }
      });
  };

  return (
    <div>
      <h1>Total User {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No </th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => {
              return (
                <tr className="hover" key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={() => MakeAdmin(user._id)}
                        className="bg-primary rounded-md px-1 text-white hover:bg-secondary"
                      >
                        Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-error btn-outline">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalUser;
