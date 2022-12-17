import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import Pricepage from "../Components/Pricepage";
import SignupCard from "../Components/Signuppage";
import Dashboard from "../Pages/Dashboard";
import Loginpage from "../Components/Loginpage";
import Todotable from "../Components/Todotable";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/price" element={<Pricepage />}></Route>
      <Route path="/signup" element={<SignupCard />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/todotable" element={<Todotable />}></Route>
    </Routes>
  );
};

export default AllRoutes;
