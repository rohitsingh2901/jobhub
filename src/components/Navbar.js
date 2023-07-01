import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg anim" id="navbar">
      <a class="navbar-brand" href="">
        <div class="enlarge-image">
          <img class="h-20" src="job.png" alt="logo" />
        </div>
      </a>
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
            <a
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              href=""
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              href="#courses"
              >Jobs</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              href="#services"
              >Services</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              href="#testimonials"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-light font-weight-bolder"
              onclick="myFunction(this)"
              href="#contact"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
