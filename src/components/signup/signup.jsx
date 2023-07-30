import { Link, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./signup.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function SignUp() {
  const expectedData = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    dob: "",
    userType: "user",
  };
  const [userData, setUserData] = useState(expectedData);

  const handleOnChange = (key, value) => {
    const obj = Object.assign({}, userData);
    obj[key] = value;
    console.log(key + "==>" + value);
    setUserData(obj);
  };

  const handleOnSubmit = async () => {
    const res = await axios.post("http://localhost:4000/user/add", userData);
    console.log("Aastha => ", res);
  };
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1 className="heading">Sign Up</h1>
          <Form className="form-contents">
            <div className="name">
              <div className="fname">
                <label className="heading-label">First Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    handleOnChange("fname", e.target.value);
                  }}
                  value={userData?.fname}
                />
              </div>

              <div className="lname">
                <label className="heading-label">Last Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    handleOnChange("lname", e.target.value);
                  }}
                  value={userData?.lname}
                />
              </div>
            </div>
            <div className="contact">
              <div className="email">
                <label className="heading-label">Email Id</label>
                <input
                  type="text"
                  onChange={(e) => {
                    handleOnChange("email", e.target.value);
                  }}
                  value={userData?.email}
                />
              </div>
              <div className="phone">
                <label className="heading-label">Phone No.</label>
                <input
                  type="number"
                  onChange={(e) => {
                    handleOnChange("phone", e.target.value);
                  }}
                  value={userData?.phone}
                />
              </div>
            </div>
            <div className="password">
              <div className="pwd">
                <label className="heading-label">Password</label>
                <input
                  type="text"
                  onChange={(e) => {
                    handleOnChange("password", e.target.value);
                  }}
                  value={userData?.password}
                />
              </div>
              <div className="confirm-pwd">
                <label className="heading-label">Confirm Password</label>
                <input
                  type="text"
                  onChange={(e) => {
                    handleOnChange("confirm_password", e.target.value);
                  }}
                  value={userData?.confirm_password}
                />
              </div>
            </div>
            <div className="info">
              <div className="dob">
                <label className="heading-label">Date-Of-Birth</label>
                <input
                  type="date"
                  onChange={(e) => {
                    handleOnChange("dob", e.target.value);
                  }}
                  value={userData?.dob}
                />
              </div>
              <div className="user-type">
                <label className="heading-label">User Type</label>
                <Form.Select
                  className="mt-3 mb-3 border border-secondary option-content"
                  aria-label="Default select example"
                  onChange={(e) => {
                    handleOnChange("userType", e.target.value);
                  }}
                  value={userData?.userType}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Select>
              </div>
            </div>
            <div className="form-footer">
              <Button
                className="submit-btn"
                variant="success"
                onClick={handleOnSubmit}
              >
                Sign Up
              </Button>

              <div className="mt-1">
                Already have an account? <Link to="/">Login</Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
