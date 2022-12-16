import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../Pages/Home";
import Pricepage from "../Components/Pricepage";
import SignupCard from "../Components/Signuppage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/price" element={<Pricepage />}></Route>
      <Route path="/signup" element={<SignupCard />}></Route>
      {/* <Route></Route> */}
    </Routes>
  );
};

export default AllRoutes;
