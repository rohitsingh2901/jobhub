import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'JobHub - Login'
  }, [])

  const handleVerifyCredentials = (e) => {
    e.preventDefault()
    const credentials = {
      email,password
    };
    fetch('http://localhost:5000/verify', {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {"Content-type": "application/json"}
    })
    .then(response => response.json()) 
    .then(json => {
      console.log(json)
      if(json.error){
      props.alert.alert("User not found",'danger')
      }
      else{
        props.alert.alert("Verifed User",'success')
      }
    })
    .catch(err => {
      console.log(err)
      props.alert.alert("Some error occured",'danger')
    });

  };
  return (
    <div style={{"minHeight":"50vw"}}>
    <div id="loginDiv">
      <div className="container pt-32" id="containerlogin">
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
      <form id="form" onSubmit={handleVerifyCredentials}>
          <div className="form-group ">
            <label className="font-medium" htmlfor="exampleInputEmail1">Email address</label>
            <input
              required
              type="email"
              className="form-control"
              id="exampleInputEmail1L"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              aria-describedby="emailHelp"
              placeholder="Type your email"
            />
          </div>
          <div className="form-group my-3">
            <label className="font-medium" htmlfor="exampleInputPassword1">Password</label>
            <input
              required
              minLength={6}
              type="password"
              className="form-control"
              id="exampleInputPassword1L"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
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
    </div>
  );
};

export default Login;
