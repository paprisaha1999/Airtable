import { Flex } from "@chakra-ui/layout";
import React from "react";
import MainDashCompo from "./DashboardCompo/MainDashCompo";
import SideCard from "./DashboardCompo/SideCard";

const Dashboard = () => {
  return (
    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "10px",
          // border: "1px solid red",
          display: "flex",
          gap: "50px",
        }}
      >
        <SideCard />
        <MainDashCompo />
      </div>
    </>
  );
};

export default Dashboard;
