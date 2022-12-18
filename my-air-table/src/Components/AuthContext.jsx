// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// export default function AuthContextProvider({ children }) {
//   const [Auth, setAuth] = useState(false);

//   const login = () => {
//     setAuth(true);
//   };
//   const logout = () => {
//     setAuth(false);
//   };
//   return (
//     <AuthContext.Provider value={{ login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // Create
// import { createContext, useState } from "react";

// export const AuthContext = createContext();

// // Provide
// function AuthContextProvider({ children }) {
//   const [isAuth, setIsAuth] = useState(false);

//   const login = () => {
//     setIsAuth(true);
//   };

//   const logout = () => {
//     setIsAuth(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export default AuthContextProvider;

import { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");

  const loginUser = (data) => {
    setIsAuth(true);
    setName(data);
  };

  const logoutUser = () => {
    alert("User logged out Successfull!!");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginUser, logoutUser, name }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
