import React, { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="shadow p-5 mx-auto w-3/5 flex justify-center items-center flex-col text-center ">
      <h1 className="text-3xl text-primary my-2 capitalize"> {user.displayName}</h1>
      <figure>
        <img className="mask mask-circle w-2/3" src={user?.photoURL} alt="" />
      </figure>
      <h2 className="text-secondary my-3"> {user.email}</h2>
    </div>
  );
};

export default Profile;
