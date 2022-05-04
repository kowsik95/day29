import React, { useContext } from "react";
import DashValues from "./Dashvalues";
import UserContext from "./UserContext";

function Dashboard() {
  const userContext = useContext(UserContext);
  let dashCard = [
    {
      period: "Earnings(Monthly)",
      rate: "$40,000",
      border: "darkblue",
      calender: true,
    },
    {
      period: "Earnings(Annual)",
      rate: "$2,15,000",
      border: "green",
      dollar: true,
    },
    {
      period: "Tasks",
      rate: "50%",
      border: "skyBlue",
      progress: true,
    },
    {
      period: "Pending Requests",
      rate: 18,
      border: "yellow",
      pending: true,
    },
  ];
  return (
    <>
      <div classNameName="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          {userContext.name}
          <button
            onClick={() => {
              userContext.setName("DharmaDurai");
            }}
          >
            Change
          </button>
          <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i className="fas fa-download fa-sm text-white-50"></i> Employee
            Details
          </button>
        </div>
        <div className="row">
          {dashCard.map((x) => {
            return <DashValues value={x}></DashValues>;
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
