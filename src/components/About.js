import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div style={{"minHeight":"50vw"}}>
    <div className="w-100 h-100" id="aboutDiv">
      <div class="container ">
        <h1 class="font-extrabold text-center text-6xl pt-12">About Us</h1>
        <hr class="my-12" />
      </div>

      <div id="about" className="container">
        <div class="flex items-center justify-content-center my-3">
          <h4 class="text-4xl font-extrabold">Our &nbsp;</h4>
          <h4 class="text-4xl font-extrabold text-red-600">Vision</h4>
        </div>
        <h6 className="font-medium text-center text-gray-700 mt-8 tracking-widest leading-10">
          We are a technology company on a mission to equip students with
          relevant skills & practical exposure to help them get the best
          possible start to their careers. Imagine a world full of freedom and
          possibilities. A world where you can discover your passion and turn it
          into your career. A world where you graduate fully assured, confident,
          and prepared to stake a claim on your place in the world.
        </h6>

        <div className="row mt-24">
          <div className="col-6">
            <div class="card mb-3 visionCard" style={{ maxWidth: "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4 flex justify-center items-center">
                  <img
                    src="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg?w=1380&t=st=1688735201~exp=1688735801~hmac=75d8882ec09317b80180554310fc8ce7e4a137bc8bdbe3c43b43c6b89354dc12"
                    alt="img"
                  />
                </div>
                <div class="col-md-8 ">
                  <div class="card-body ">
                    <h5 class="card-title">Fresher jobs</h5>
                    <p class="card-text">
                      Get premium fresher jobs with a minimum CTC of 2LPA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3 visionCard" style={{ maxWidth: "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4 flex justify-center items-center">
                  <img
                    src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?w=1380&t=st=1688735806~exp=1688736406~hmac=0e308bc07ff949d7b9b8e0553e2540b08a1c60991090011c5f6fe52788122289"
                    alt="img"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Trainings</h5>
                    <p class="card-text">
                      Learn new-age skills on the go with our short-term online
                      trainings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div class="card mb-3 visionCard" style={{ maxWidth: "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4 flex justify-center items-center">
                  <img
                    src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1688754391~exp=1688754991~hmac=87a23e08316e60ace9d4735869caae8a0f0f9b7ec3ee825fa4a4dcf26294d08c"
                    alt="img"
                  />
                </div>
                <div class="col-md-8 ">
                  <div class="card-body ">
                    <h5 class="card-title">Best Job Search Experience</h5>
                    <p class="card-text">
                      Empowering Individuals to Find Their Perfect Career Fit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3 visionCard" style={{ maxWidth: "540px" }}>
              <div class="row no-gutters">
                <div class="col-md-4 flex justify-center items-center">
                  <img
                    src="https://img.freepik.com/free-vector/business-mission-concept-illustration_114360-7295.jpg?w=1380&t=st=1688754713~exp=1688755313~hmac=b0f49f2423502d7e55fd0cef132f5166789aaea7b3862d017e40bace4ba62622"
                    alt="img"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Boundless Growth</h5>
                    <p class="card-text">
                      Unlocking Opportunities for Professionals Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-content-center mt-48">
          <h4 class="text-4xl font-extrabold">In the &nbsp;</h4>
          <h4 class="text-4xl font-extrabold text-red-600">News</h4>
        </div>

        <OwlCarousel
          className="flex owl-carousel owl-theme mt-12"
          items="3"
          loop
          autoplay
          responsiveClass
          margin={10}
          responsive={{
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
          }}
        >
          <div class="card  item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772428.png" alt="img" />
            </div>
          </div>

          <div class="card item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772409.jpg" alt="img" />
            </div>
          </div>
          <div class="card item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772441.jpg" alt="img" />
            </div>
          </div>
          <div class="card item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772481.png" alt="img" />
            </div>
          </div>

          <div class="card item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772470.jpg" alt="img" />
            </div>
          </div>

          <div class="card item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772420.jpg" alt="img" />
            </div>
          </div>

          <div class="card item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772446.png" alt="img" />
            </div>
          </div>

          <div class="card item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772432.jpg" alt="img" />
            </div>
          </div>

          <div class="card item owlCard">
            <div class="col-md-12 flex justify-center items-center ">
              <img src="https://logodix.com/logo/772450.jpg" alt="img" />
            </div>
          </div>
        </OwlCarousel>

          <div className="flex-col my-64">
            
            <h1 className="text-left font-black my-12 text-5xl "><span className="text-red-600">300M+</span> Unique monthly <span className="text-blue-600" >visitors</span></h1>
            
            
            <h1 className="text-center font-black my-12 text-5xl "><span className="text-red-600">245M+</span> Total resumes on <span className="text-blue-600">JobHub</span></h1>
            
            
            <h1 className="text-right font-black my-12 text-5xl "><span className="text-red-600">850M+</span> Total ratings and <span className="text-blue-600">reviews</span></h1>
            
          </div>





        


        <OwlCarousel
          className="flex owl-carousel owl-theme"
          items="3"
          loop
          autoplay
          responsiveClass
          margin={10}
          responsive={{
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
          }}
        >
          <img className="teamIMG" alt="team" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1688763403~exp=1688764003~hmac=aaf85fe88a9cb7144b64c8c3750fc9b80e3d598a5ff89805223b2d75e73af027"></img>

          <img className="teamIMG" alt="team" src="/Team photos/1businessman-character-avatar-isolated_24877-60111-removebg-preview (1).png"></img>

          <img className="teamIMG" alt="team" src="/Team photos/2businessman-character-avatar-isolated_24877-60111-removebg-preview.png"></img>

          <img className="teamIMG" alt="team" src="/Team photos/3businessman-character-avatar-isolated_24877-60111-removebg-preview (7).png"></img>

          <img className="teamIMG" alt="team" src="/Team photos/4businessman-character-avatar-isolated_24877-60111-removebg-preview (6).png"></img>

          <img className="teamIMG" alt="team" src="/Team photos/5businessman-character-avatar-isolated_24877-60111-removebg-preview (5).png"></img>

          <img className="teamIMG" alt="team" src="/Team photos/6businessman-character-avatar-isolated_24877-60111-removebg-preview (4).png"></img>

          <img className="teamIMG" alt="team" src="/Team photos/7businessman-character-avatar-isolated_24877-60111-removebg-preview (3).png"></img>

          <img className="teamIMG" alt="team" src="/Team photos/8businessman-character-avatar-isolated_24877-60111-removebg-preview (2).png"></img>


        </OwlCarousel>
        <div class="flex items-center justify-content-center mt-6 pb-12">
          <h4 class="text-4xl font-extrabold">Meet the &nbsp;</h4>
          <h4 class="text-4xl font-extrabold text-red-600">team</h4>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default About;
