import React, { createContext, useEffect, useState } from "react";
import app from "./Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {

const isOut = window.confirm('Log Out ?')
if(isOut){
    return signOut(auth)
    .then(() => { toast('Log Out')})
    .catch((err) => console.log(err));
}
  
  };

  // for currentUser //
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

// google sign in ///
const provider = new GoogleAuthProvider()


const googleSignIn = ()=>{

return signInWithPopup(auth,provider)
.then(result=>{
    const user = result.user
    toast('Success Google ')
})
.catch(err=>console.log(err))

}


  const authInfo = { name: "zinku", createUser, login, logout,user,googleSignIn };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
