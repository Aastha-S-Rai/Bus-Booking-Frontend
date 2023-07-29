import { Link, Route, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./signup.css";
import Button from "react-bootstrap/Button";
import { FormCheck } from "react-bootstrap";

export default function SignUp() {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1 className="heading">Sign Up</h1>
          <Form className="form-contents">
            <div className="name">
              <div className="fname">
                <label className="heading-label">First Name</label>
                <input type="text" />
              </div>

              <div className="lname">
                <label className="heading-label">Last Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="contact">
              <div className="email">
                <label className="heading-label">Email Id</label>
                <input type="text" />
              </div>
              <div className="phone">
                <label className="heading-label">Phone No.</label>
                <input type="number" />
              </div>
            </div>
            <div className="password">
              <div className="pwd">
                <label className="heading-label">Password</label>
                <input type="number" />
              </div>
              <div className="confirm-pwd">
                <label className="heading-label">Confirm Password</label>
                <input type="number" />
              </div>
            </div>
            <div className="info">
              <div className="dob">
                <label className="heading-label">Date-Of-Birth</label>
                <input type="date" />
              </div>
              <div className="user-type">
                <label className="heading-label">User Type</label>
                <Form.Select
                  className="mt-3 mb-3 border border-secondary option-content"
                  aria-label="Default select example"
                >
                  <option value="agent">User</option>
                  <option value="buyer">Admin</option>
                </Form.Select>
              </div>
              
            </div>
            <div className="form-footer">
                <Button className= "submit-btn" variant="success">Sign Up</Button>
                
                
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
