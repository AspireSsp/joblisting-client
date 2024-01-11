import { useState, createContext } from "react";
const UserContext = createContext({user:null, logOut:()=>{}, updateUser:()=>{}});

export default UserContext