import { useQuery } from "@tanstack/react-query";
import React from "react";

const TotalUser = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3003/users`);
      const data = await res.json();
      return data;
    },
  });

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
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr className="hover" key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
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
