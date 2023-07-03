import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div id="loginDiv">
      <div className="container pt-40" id="containerlogin">
        <h1 className="font-extrabold">
          Login and apply for <span className="sp">FREE</span>
        </h1>
        <h4 className="font-bold my-6">
          <span className="sp">1,50,000+ </span> companies hiring on JobHub{" "}
        </h4>
        <div className="card my-4" id="cardDivL">
  <div className="row no-gutters">
    <div className="col-md-12">
      <h1 className='text-center font-extrabold'>Job<span className="sp">Hub</span></h1>
      <div className="card-body">
        <form>
          <div className="form-group ">
            <label className="font-medium" htmlfor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1L"
              aria-describedby="emailHelp"
              placeholder="Type your email"
            />
          </div>
          <div className="form-group my-3">
            <label className="font-medium" htmlfor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1L"
              placeholder="Type your password"
            />
          </div>
          
            <div className="my-1">
          <small className="form-text text-muted">
            By signing up, you agree to our Terms and Conditions.
            </small>
            </div>
            <div>
          <button type="submit" className="btn mt-2 registerbtn btn-block">
            Login
          </button>
          <div className="flex justify-center my-2">
          <small>No account? <Link to="/register">Signup</Link></small>
          </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Login;
