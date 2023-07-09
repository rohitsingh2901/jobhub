import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Register = (props) => {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'JobHub - Signup'
  }, [])
  const handleSaveCredentials = (e) => {
    e.preventDefault()
    const credentials = {
      email,password,fname,lname
    };
    fetch('https://brassy-well-trick.glitch.me/register', {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {"Content-type": "application/json"}
    })
    .then(response => response.json()) 
    .then(json => {
      console.log(json)
      setEmail('')
      setPassword('')
      setFname('')
      setLname('')
      if(json.error){
        props.alert.alert('Email already exists','danger');
      }
      else{
        props.alert.alert('Congrats! Your can now login','success');
      }
    })
    .catch(err => {
      console.log(err)
      props.alert.alert('Something went wrong','danger');
    });

  };



  return (
    <div style={{"minHeight":"50vw"}}>
    <div id="registerDiv">
      <div className="container pt-32" id="containerRegister">
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
        <form id='form' onSubmit={handleSaveCredentials} >
          <div className="form-group ">
            <label className="font-medium" htmlfor="exampleInputEmail1">Email address</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group my-3">
            <label className="font-medium" htmlfor="exampleInputPassword1">Password</label>
            <input
              required
              minLength={6}
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Must be atleast 6 characters"
            />
          </div>
          <div id="fnln">
          <div className="form-group my-2">
            <label className="font-medium" htmlfor="exampleInputName1">First Name</label>
            <input
              required
              minLength={2}
              type="text"
              value={fname}
              onChange={(e)=> setFname(e.target.value)}
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
              required
              minLength={2}
              type="text"
              value={lname}
              onChange={(e)=> setLname(e.target.value)}
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
    </div>
  )
}

export default Register
