import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div id="registerDiv">
      <div className="container pt-40" id="containerRegister">
        <h1 className="font-extrabold">
          Register and apply for <span className="sp">FREE</span>
        </h1>
        <h4 className="font-bold my-6">
          <span className="sp">1,50,000+ </span> companies hiring on JobHub{" "}
        </h4>
        <div className="card my-4" id="cardDiv">
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
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group my-3">
            <label className="font-medium" htmlfor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Must be atleast 6 characters"
            />
          </div>
          <div id="fnln">
          <div className="form-group my-2">
            <label className="font-medium" htmlfor="exampleInputName1">First Name</label>
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
          <div className="form-group my-2">
            <label className="font-medium" htmlfor="exampleInputName1">Last Name</label>
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
          <button type="submit" className="btn mt-2 registerbtn btn-block">
            Register
          </button>
          <div className="flex justify-center my-2">
          <small>Already registered? <Link to="/login">Login</Link></small>
          </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Register
