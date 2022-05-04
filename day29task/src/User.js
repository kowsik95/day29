import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function User() {
  const [userData, setUserData] = useState([]);
  useEffect(async () => {
    try {
      let user = await axios.get(
        "https://62466c1f739ac845918e4c16.mockapi.io/react/students"
      );
      console.log(user);
      setUserData(user.data);
    } catch (error) {
      alert(error);
    }
  }, []);
  const userContext = useContext(UserContext);
  // let userData = [
  //   {
  //     id: 1,
  //     name: "Alex Pandian",
  //     position: "IPS",
  //     office: "Governtment",
  //     age: 34,
  //     date: "21 / 2 / 2007",
  //     salary: 120000,
  //   },
  //   {
  //     id: 2,
  //     name: "Varalakshmi",
  //     position: "IAS",
  //     office: "Governtment",
  //     age: 29,
  //     date: "12 / 5 / 2008",
  //     salary: 150000,
  //   },
  //   {
  //     id: 3,
  //     name: "Seralathan",
  //     position: "IFS",
  //     office: "Governtment",
  //     age: 32,
  //     date: "2 / 9 / 2010",
  //     salary: 135000,
  //   },
  //   {
  //     id: 4,
  //     name: "Kabeer Rajan",
  //     position: "IRS",
  //     office: "Governtment",
  //     age: 28,
  //     date: "9 / 2 / 2011",
  //     salary: 140000,
  //   },
  //   {
  //     id: 5,
  //     name: "Vanjinaathan",
  //     position: "IB",
  //     office: "Governtment",
  //     age: 33,
  //     date: "24 / 9 / 2017",
  //     salary: 138000,
  //   },
  // ];
  return (
    <>
      <h1 className="h3 mb-2 text-gray-800">
        User list
        <Link
          to={"/createUsers"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm float-right me-5"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </h1>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Officer's Log</h6>
        </div>
      </div>
      <div className="card-body">
        <div className="container">
          <table
            className="table table-bordered"
            id="dataTable"
            style={{ width: "100%" }}
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((x) => {
                return (
                  <tr>
                    <td> {x.name}</td>
                    <td> {x.position}</td>
                    <td> {x.office}</td>
                    <td> {x.age}</td>
                    <td> {x.date}</td>
                    <td> {x.salary}</td>
                    <td>
                      <Link
                        to={`/user-view/${x.id}`}
                        type={"button"}
                        className="btn btn-primary m-1"
                      >
                        view
                      </Link>
                      <Link
                        to={`/user-edit/${x.id}`}
                        type={"button"}
                        className="btn btn-warning m-1"
                      >
                        Edit
                      </Link>
                      <button type={"button"} className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default User;
