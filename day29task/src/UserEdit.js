import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function UserEdit() {
  let params = useParams();
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
      await axios.put(
        `https://62466c1f739ac845918e4c16.mockapi.io/react/students/${params.id}`,
        values
      );
    },
  });
  useEffect(async () => {
    try {
      let user = await axios.get(
        `https://62466c1f739ac845918e4c16.mockapi.io/react/students/${params.id}`
      );
      formik.setValues(user.data);
    } catch (error) {}
  }, []);

  return (
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
  );
}
export default UserEdit;
