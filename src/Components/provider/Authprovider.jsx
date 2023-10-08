import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthConatext = createContext(null);


const googleprovider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

const [loading,setloading]=useState(true);



  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singinUser = (email, password) => {
    setloading(true)
    console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };
 const singinwithGoogle=()=>{
  setloading(true)
return signInWithPopup(auth,googleprovider)
  }
  const logOut = () => {
    setloading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      
      console.log(
        "obsorving corrent user inside useeffect in to fire base ",
        currentUser
      );
      setloading(false)
    });
    return () => {
      unSubcribe();
    };
  }, []);

  const authinfo = { user,loading, singinwithGoogle, createUser, singinUser, logOut };
  return (
    <AuthConatext.Provider value={authinfo}>{children}</AuthConatext.Provider>
  );
};

export default Authprovider;
Authprovider.propTypes = {
  children: PropTypes.node,
};

// 1. create context
//  2. set provider with value
// 3.use the Auth provider in the main.jsx file
// 4.access childen in the
