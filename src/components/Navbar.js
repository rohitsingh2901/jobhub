import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
 

  return (
    <>
      <nav class="navbar navbar-expand-lg anim" id="navbar">
      <Link class="navbar-brand" to="/jobhub/">
        <div class="enlarge-image">
          <img style={{"height":"4vw"}} src="/job.png" alt="logo" />
        </div>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              to="/jobhub/"
              >Home</Link
            >
          </li>
          <li class="nav-item">
            <Link
              to="/jobhub/jobs"
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              >Jobs</Link
            >
          </li>
          <li class="nav-item">
            <Link to="/jobhub/services"
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              >Services</Link
            >
          </li>
          <li class="nav-item">
            <Link
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              to="/jobhub/about"
              >About</Link
            >
          </li>
          <li class="nav-item">
            <Link to="/jobhub/contact"
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              
              >Contact Us</Link
            >
          </li>
          <li>
            <Link to="/jobhub/login"><button className='btn  navbtn mx-2'>Login</button></Link>
            <Link to="/jobhub/register"><button className='btn  navbtn'>Register</button></Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
