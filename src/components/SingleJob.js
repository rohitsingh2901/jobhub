import React, { useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import data from "../Jobs.json";

const SingleJob = () => {
  const { id } = useParams();
  const textRef = useRef(null);
  const location = useLocation();

  const copyToClipboard = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied");
      })
      .catch(() => {
        alert("some error occured");
      });
  };

  return (
    <div className="container mt-32">
      <div class="card w-100">
        <div class="card-body">
          <h5 class="card-title text-center font-extrabold">
            {data.jobs.at(id - 1).name} Job in {data.jobs.at(id - 1).location}{" "}
            at {data.jobs.at(id - 1).company}
          </h5>
          <div class="row no-gutters">
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title font-bold">
                  {data.jobs.at(id - 1).name}
                </h5>
                <p>{data.jobs.at(id - 1).company}</p>
                <div className="flex items-center">
                  <i class="fa-sharp fa-solid fa-location-dot mr-2 fa"></i>
                  <span>{data.jobs.at(id - 1).location}</span>
                </div>
                <div className="flex items-center justify-between my-2">
                  <div className="flex flex-col items-start justify-start">
                    <span>
                      <i class="far fa-play-circle fa mr-2"></i>
                      <span className="icontitles">START DATE</span>
                    </span>
                    <span>{data.jobs.at(id - 1).startDate}</span>
                  </div>

                  <div className="flex flex-col items-start justify-start">
                    <span>
                      <i class="far fa-money-bill-alt fa mr-2"></i>
                      <span className="icontitles">CTC</span>
                    </span>
                    <span>
                      {data.jobs.at(id - 1)["min-ctc"] +
                        "-" +
                        data.jobs.at(id - 1)["max-ctc"] +
                        " LPA"}
                    </span>
                  </div>

                  <div className="flex flex-col items-start justify-start">
                    <span>
                      <i class="far fa-money-bill-alt fa mr-2"></i>
                      <span className="icontitles">EXPERIENCE</span>
                    </span>
                    <span>
                      {data.jobs.at(id - 1)["min-experience"] +
                        "-" +
                        data.jobs.at(id - 1)["max-experience"] +
                        " years"}
                    </span>
                  </div>
                </div>
                <div class="card-text my-3">
                  <small id="timecard" class="text-muted">
                    {data.jobs.at(id - 1).postTime}
                  </small>
                  <small id="timecard" class="text-muted mx-3">
                    {data.jobs.at(id - 1).status}
                  </small>
                </div>
              </div>
            </div>
            <div
              class="col-md-2"
              style={{
                display: "flex",
                "flex-direction": "column",
                "justify-content": "space-between",
                "align-items": "center",
              }}
            >
              <img
                style={{ width: "60px", height: "60px", marginTop: "5px" }}
                src={data.jobs.at(id - 1).image}
                alt="Logo"
              />
            </div>
          </div>
          <div></div>
          <div className="mt-4 mx-3 flex justify-between">
            <div className="flex">
              <p>
                <i class="fas fa-users fa mr-2"></i>
                <span className="icontitles"></span>
              </p>
              <p>{data.jobs.at(id - 1).applicants} applicants</p>
            </div>
            <p>
              <button onClick={copyToClipboard}>
                <i class="fa-solid fa-share fa-lg text-red-900"></i>
              </button>
              <p hidden ref={textRef}>
                {location.pathname}
              </p>
            </p>
          </div>
          <hr></hr>

          <div className="container">

          <div className="mt-5">
            <h6 className="font-medium">
              About {data.jobs.at(id - 1).company}
            </h6>
            <p className="text-start text-sm">{data.jobs.at(id - 1).aboutCompany}</p>
          </div>
          <div className="mt-5">
            <h6 className="font-medium">About the job</h6>
            <p className="text-start text-sm">{data.jobs.at(id - 1).aboutJob}</p>
          </div>
          <div className="mt-5">
            <h6 className="font-medium">Skill(s) required</h6>
            <ul>
              {data.jobs.at(id - 1).skillsRequired.map((item, index) => (
                <li className="text-sm" key={index}>
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <h6 className="font-medium">Salary</h6>
            <p className="text-start text-sm">Annual CTC: {data.jobs.at(id - 1)["min-ctc"] +
                        "-" +
                        data.jobs.at(id - 1)["max-ctc"] +
                        " LPA"}</p>
          </div>
          <div className="mt-5">
            <h6 className="font-medium">Perk</h6>
            <ul>
              {data.jobs.at(id - 1).perks.map((item, index) => (
                <li className="text-sm" key={index}>
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <h6 className="font-medium">Number of Opening</h6>
            <p className="text-start text-sm">{data.jobs.at(id - 1).openings}</p>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-sm view2btn" data-toggle="modal" data-target="#exampleModalLong">Apply Now</button>
          </div>
          </div>
        </div>
      </div>

<div class="modal fade bd-example-modal-lg" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <div>
        <h5 class="modal-title" id="exampleModalLongTitle">Applying for {data.jobs.at(id - 1).name}</h5>
        <small>{data.jobs.at(id - 1).company}</small>
        </div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">




      <form>
          <div id="fnln">
          <div className="form-group my-2 col-6">
            <label className="font-medium" htmlfor="exampleInputName1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              placeholder="John"
            />
          </div>
          <div className="form-group my-2 col-6">
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
            </small>
            </div>
            <div>
          
            </div>
        </form>




      </div>

      <div class="modal-footer">
      <button type="submit" className="btn mt-2 view2btn">
            Submit application
          </button>
      </div>
    </div>
  </div>
</div>
    </div>
    
  );
};

export default SingleJob;
