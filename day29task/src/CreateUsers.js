import React, { useContext } from "react";
import { useFormik } from "formik";
import UserContext from "./UserContext";
import axios from "axios";

function CreateUsers() {
  const userContext = useContext(UserContext);
  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      date: "",
      salary: 0,
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name Required";
      }
      if (!values.salary || values.salary < 0) {
        errors.salary = "Incorrect Salary Details";
      }
      return errors;
    },
    onSubmit: async (values) => {
      // console.log(values);
      try {
        await axios.post(
          "https://62466c1f739ac845918e4c16.mockapi.io/react/students",
          values
        );
        userContext.setUsers([...userContext.users, values]);
      } catch (error) {
        alert(error);
      }
    },
  });
  return (
    <>
      <h1 className="bg-primary text-white text-center">User Details Form</h1>

      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label className="fw-bolder mb-3 ">Name : </label>
              <input
                type={"text"}
                className="form-control"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <pre style={{ color: "red" }}>{formik.errors.name}</pre>
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3">Position : </label>
              <input
                type={"text"}
                className="form-control"
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3">Office : </label>
              <input
                type={"text"}
                className="form-control"
                name="office"
                onChange={formik.handleChange}
                value={formik.values.office}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3">Age : </label>
              <input
                type={"number"}
                className="form-control"
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3">StartDate : </label>
              <input
                type={"date"}
                className="form-control"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3 form-label">Salary : </label>
              <input
                type={"number"}
                className="form-control"
                name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}
              />
              <pre style={{ color: "red" }}>{formik.errors.salary}</pre>
            </div>

            <button type={"submit"} className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUsers;
