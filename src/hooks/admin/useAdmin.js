import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminloading, setAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://doctor-portal-server-chi.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, adminloading];
};
export default useAdmin;
