import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Link } from "react-router-dom";
import IncrementingNumber from "./IncrementingNumber";

const Home = () => {
  const [Data, setUsers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'JobHub - Home'
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://brassy-well-trick.glitch.me/jobs');
        if (!response.ok) {
          throw new Error('Server error');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();

  }, []);
  // console.log(Data)

  
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };
  const options2 = {
    autoHeightClass: "my-12",
    autoplay: true,
    dots: false,
    autoplayTimeout: 500,
    autoplaySpeed: 50000,
    autoplayHoverPause: true,
    responsiveClass: true,
    margin: 10,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  };

  return (
    <div id="HomeDiv" style={{ minHeight: "50vw" }}>
      {Data.length===0 ? 
      (
        <div className="container flex justify-center items-center" style={{"height":"100vh"}}>
          <div>
          <div class="loader"></div>
          <h5>Please Wait</h5>
          </div>
        </div>
      )
      :
      (<div className="container">
      <h1 id="homeHeading" className="text-center pt-16 text-5xl font-black">
          Make your <span className="text-blue-700 text-6xl">Dream</span> career a{" "}
          <span className="text-red-600 text-6xl">Reality</span>
        </h1>
        <div className="row mt-24">
          <div className="col-6">
            <img
              className="w-100 h-100"
              id="homeImgLeft"
              src="https://img.freepik.com/free-vector/team-leader-teamwork-concept_74855-6671.jpg?w=1380&t=st=1688789197~exp=1688789797~hmac=043805bbc532485ac8c8119663ac95feb87a93227cf2df0839ce8ad62c0c53b1"
              alt="img"
            />
          </div>
          <div className="col-6">
            <img
              id="homeImgRight"
              className="w-100 h-100"
              src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1688789371~exp=1688789971~hmac=b5af4b0ff0148be2e95c5fc809e9ccb292dcd2849a4a4b686f2d2e18913edb9f"
              alt="img"
            />
          </div>
        </div>

        <div id="incNum" className="flex justify-center mt-32 mb-48 text-center">
          <div className="col-3 left">
            <h1 className="font-black text-5xl text-red-700"><IncrementingNumber number={300} speed={5}/>K+ </h1>
            <p className="font-medium text-gray-700">companies hiring</p>
          </div>
          <div className="col-3 left">
            <h1 className="font-black text-5xl text-red-700"><IncrementingNumber number={10} speed={170}/>K+ </h1>
            <p className="font-medium text-gray-700">new openings everyday</p>
          </div>
          <div className="col-3 right">
            <h1 className="font-black text-5xl text-red-700"><IncrementingNumber number={21} speed={80}/>M+</h1>
            <p className="font-medium text-gray-700">active students</p>
          </div>
          <div className="col-3 right">
            <h1 className="font-black text-5xl text-red-700"><IncrementingNumber number={600} speed={2}/>K+ </h1>
            <p className="font-medium text-gray-700">learners</p>
          </div>
        </div>

        <h1 id="latestJob" className="text-center mt-48 font-extrabold right">
          Latest <span className="text-blue-700">Jobs</span> on{" "}
          <span className="text-red-600">JobHub</span>
        </h1>

        <OwlCarousel className="flex owl-carousel owl-theme mt-8" {...options}>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px"}}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[0].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[0].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[0].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[0]["min-ctc"] +
                            "-" +
                            Data[0].jobs[0]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[0]["min-experience"] +
                            "-" +
                            Data[0].jobs[0]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[0].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[0].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[0].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px" }}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[5].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[5].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[5].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[5]["min-ctc"] +
                            "-" +
                            Data[0].jobs[5]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[5]["min-experience"] +
                            "-" +
                            Data[0].jobs[5]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[5].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[5].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[5].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px" }}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[11].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[11].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[11].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[11]["min-ctc"] +
                            "-" +
                            Data[0].jobs[11]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[11]["min-experience"] +
                            "-" +
                            Data[0].jobs[11]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[11].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[11].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[11].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px" }}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[19].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[19].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[19].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[19]["min-ctc"] +
                            "-" +
                            Data[0].jobs[19]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[19]["min-experience"] +
                            "-" +
                            Data[0].jobs[19]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[19].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[19].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[19].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px" }}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[15].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[15].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[15].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[15]["min-ctc"] +
                            "-" +
                            Data[0].jobs[15]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[15]["min-experience"] +
                            "-" +
                            Data[0].jobs[15]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[15].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[15].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[15].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px" }}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[17].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[17].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[17].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[17]["min-ctc"] +
                            "-" +
                            Data[0].jobs[17]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[17]["min-experience"] +
                            "-" +
                            Data[0].jobs[17]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[17].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[17].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[17].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px" }}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[7].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[7].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[7].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[7]["min-ctc"] +
                            "-" +
                            Data[0].jobs[7]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[7]["min-experience"] +
                            "-" +
                            Data[0].jobs[7]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[7].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[7].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[7].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px" }}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[14].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[14].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[14].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[14]["min-ctc"] +
                            "-" +
                            Data[0].jobs[14]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[14]["min-experience"] +
                            "-" +
                            Data[0].jobs[14]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[14].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[14].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[14].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div
              class="card mb-3"
              id="mainCard"
              style={{ minWidth: "270px", minHeight: "250px" }}
            >
              <div  class="flex no-gutters cardcol">
                <div class="col-md-10">
                  <div class="card-body">
                    <h6 class="card-title font-medium text-xs">
                      {Data[0].jobs[8].name}
                    </h6>
                    <p className="text-xs">{Data[0].jobs[8].company}</p>
                    <div className="flex items-center">
                      <i class="fa-sharp fa-solid fa-location-dot fa mb-2"></i>
                      <span className="text-xs mb-2 mx-1">
                        {Data[0].jobs[8].location}
                      </span>
                    </div>
                    <div className="flex-col items-center justify-between text-xs">
                      <div className="flex items-start justify-start text-xs">
                        <span>
                          <i class="far fa-money-bill-alt fa"></i>
                          <span className="icontitles">&nbsp;CTC</span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[8]["min-ctc"] +
                            "-" +
                            Data[0].jobs[8]["max-ctc"] +
                            " LPA"}
                        </span>
                      </div>

                      <div className="flex items-start justify-start">
                        <span>
                          <i class="far fa-money-bill-alt fa "></i>
                          <span className="icontitles text-xs">
                            &nbsp;EXPERIENCE
                          </span>
                        </span>
                        <span className="text-xs mx-2">
                          {Data[0].jobs[8]["min-experience"] +
                            "-" +
                            Data[0].jobs[8]["max-experience"] +
                            " years"}
                        </span>
                      </div>
                    </div>
                    <div class="card-text my-2">
                      <small id="homeTetimecard" class="text-muted text-xs">
                        {Data[0].jobs[8].postTime}
                      </small>
                      <small
                        id="homeTetimecard"
                        class="text-muted text-xs mx-2"
                      >
                        {Data[0].jobs[8].status}
                      </small>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobs/${Data[0].jobs[0].id}`}>
                        <button className=" homeViewbtn text-xs">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div id="cardLogo"  class="col-md-2">
                  <img
                    src={Data[0].jobs[8].image.slice(1,)}
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>


        

        <h1 id="companyH1" className="text-center mt-48 font-extrabold right">
          Top <span className="text-blue-700">Companies</span> trust{" "}
          <span className="text-red-600">JobHub</span>
        </h1>
        <OwlCarousel className="flex owl-carousel owl-theme mt-16 pb-24" {...options2}>
          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/file-mobile-apps-development-company-logo-25.png"
            ></img>
          </div>

          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/logos-and-photos-envoy-air-company-brand-30.png"
            ></img>
          </div>

          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/file-american-broadcasting-company-logo-svg-8.png"
            ></img>
          </div>

          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/hbc-company-logo-hudson-bay-company-11.png"
            ></img>
          </div>

          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-simmons-bedding-company-wikipedia-15.png"
            ></img>
          </div>

          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-yamato-transport-brand-28.png"
            ></img>
          </div>

          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/company-dole-food-company-16.png"
            ></img>
          </div>

          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/bmw-car-company-logo-png-7.png"
            ></img>
          </div>
          <div className="Hitem">
            <img
              className="HomeCompanyIMG"
              alt="team"
              src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-brand-apple-ios-logo-png-transparent-apple-ios-logo-images-26.png"
            ></img>{" "}
          </div>
        </OwlCarousel>

        
      </div>)}
      
    </div>
  );
};

export default Home;
