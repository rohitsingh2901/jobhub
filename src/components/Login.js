import React from "react";

const Login = () => {

  return (
    <div id="loginDiv">
      <div className="container pt-40" id="containerLogin">
        <h1 className="font-extrabold">
          Register and apply for <span className="sp" id="typewriter">FREE</span>
        </h1>
        <h4 className="font-bold my-6">
          <span className="sp">1,50,000+ </span> companies hiring on JonHub{" "}
        </h4>
        <div className="card my-4" id="cardDiv">
  <div className="row no-gutters">
    <div className="col-md-12">
      <div className="card-body">
        <form>
          <div className="form-group ">
            <label className="" htmlfor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group my-3">
            <label className="" htmlfor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id="exampleInputPassword1"
              placeholder="Must be atleast 6 characters"
            />
          </div>
          <div id="fnln">
          <div className="form-group my-2">
            <label className="" htmlfor="exampleInputName1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              placeholder="John"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;</p>
          </div>

          <div className="form-group">
            <label className="" htmlfor="exampleInputName1">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              placeholder="Doe"
            />
          </div>
          </div>
            <div className="my-1">
          <small className="form-text text-muted">
            By signing up, you agree to our Terms and Conditions.
            </small>
            </div>
            <div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
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
