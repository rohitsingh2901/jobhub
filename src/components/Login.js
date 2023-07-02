import React from "react";

const Login = () => {
  return (
    <div id="loginDiv">
      <div className="container pt-40" id="containerLogin">
        <h1 className="font-extrabold">
          Register and apply for <span className="sp">FREE</span>
        </h1>
        <h4 className="font-bold my-6">
          <span className="sp">1,50,000+ </span> companies hiring on JonHub{" "}
        </h4>
        <div class="card my-4" style={{"max-width": "440px","max-height": "540px","padding" : "10px"}}>
  <div class="row no-gutters">
    <div class="col-md-12">
      <div class="card-body">
        <form>
          <div class="form-group ">
            <label className="" for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control mt-1"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="john@example.com"
            />
          </div>
          <div class="form-group my-3">
            <label className="" for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control mt-1"
              id="exampleInputPassword1"
              placeholder="Must be atleast 6 characters"
            />
          </div>
          <div id="fnln">
          <div class="form-group my-2">
            <label className="" for="exampleInputName1">First Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName1"
              placeholder="John"
            />
          </div>
          <div>
            <p>&nbsp;&nbsp;&nbsp;</p>
          </div>

          <div class="form-group">
            <label className="" for="exampleInputName1">Last Name</label>
            <input
              type="text"
              class="form-control"
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
          <button type="submit" class="btn btn-primary mt-2">
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
