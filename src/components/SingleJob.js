import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation, } from "react-router-dom";
import data from "../Jobs.json";


const SingleJob = () => {
  const { id } = useParams();
  const textRef = useRef(null);
  const location = useLocation();
  const [file, setfile] = useState(null);
  const [file2, setfile2] = useState(null);
  const handdleFile = (event)=>{
    setfile(event.target.files[0])
    document.getElementById('fileLabel').innerHTML = event.target.files[0].name
  }
  const handleUpload = ()=>{
    if(file){
      console.log(file)
      const formData = new FormData();
      formData.append('file', file);
      // console.log(formData)

      // TODO : send data 

      setfile(null);
    }
  }

  const handdleFile2 = (event)=>{
    setfile2(event.target.files[0])
    document.getElementById('fileLabel2').innerHTML = event.target.files[0].name
  }
  const handleUpload2 = ()=>{
    if(file2){
      console.log(file2)
      const formData = new FormData();
      formData.append('file', file2);
      // console.log(formData)

      // TODO : send data 

      setfile2(null);
    }
  }



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  const copyToClipboard = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // alert("Copied");
        // TODO
      })
      .catch(() => {
        // alert("some error occured");
        // TODO
      });
  };
  

  return (
    <div className="container my-32">
      <div class="card w-100" id="singlemaincard">
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
              <p className="text-start text-sm">
                {data.jobs.at(id - 1).aboutCompany}
              </p>
            </div>
            <div className="mt-5">
              <h6 className="font-medium">About the job</h6>
              <p className="text-start text-sm">
                {data.jobs.at(id - 1).aboutJob}
              </p>
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
              <p className="text-start text-sm">
                Annual CTC:{" "}
                {data.jobs.at(id - 1)["min-ctc"] +
                  "-" +
                  data.jobs.at(id - 1)["max-ctc"] +
                  " LPA"}
              </p>
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
              <p className="text-start text-sm">
                {data.jobs.at(id - 1).openings}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="btn btn-sm view2btn"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade bd-example-modal-lg"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
          <form id="form">
              <div class="modal-header bg-gray-100">
                <div>
                  <h5 class="modal-title font-bold" id="exampleModalLongTitle">
                    Applying for {data.jobs.at(id - 1).name}
                  </h5>
                  <small>{data.jobs.at(id - 1).company}</small>
                </div>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h5 className="font-medium container mb-3">
                  Contact Information
                </h5>
                <div id="fnln">
                  <div className="form-group my-2 col-6">
                    <label className="font-medium text-gray-700" htmlfor="fn">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="fn"
                      placeholder="John"
                    />
                  </div>
                  <div className="form-group my-2 col-6">
                    <label className="font-medium text-gray-700" htmlfor="ln">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="ln"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div id="fnln">
                  <div className="form-group my-2 col-6">
                    <label className="font-medium text-gray-700" htmlfor="email">
                      Email address
                    </label>
                    <input
                      required
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="john@example.cpm"
                    />
                  </div>

                  <div className="form-group my-2 col-6">
                    <label className="font-medium text-gray-700" htmlfor="phn">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      className="form-control"
                      id="phn"
                      placeholder="9999999999"
                    />
                  </div>
                </div>
                <div className="form-group mt-5 col-12">
                  <h5 className="font-medium mb-3">Cover Letter</h5>
                  <label className="font-medium text-gray-700" htmlfor="exampleInputName1">
                    Why should you be hired for this role?
                  </label>
                  <textarea
                    required
                    type="text"
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Mention in detail what relevant skill or past experience you have for this job. What excites you about this job? Why would you be a good fit?"
                    rows={4}
                  />
                </div>

                <div className="form-group mt-5 col-12">
                  <h5 className="font-medium mb-3">Upload Resume</h5>
                  <label className="font-medium text-gray-700" htmlfor="exampleInputName1">
                    Kindly provide an latest version of your resume for our
                    records.
                  </label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend cursor-pointer">
                      <span class="input-group-text btn btn-primary"  onClick={handleUpload}>Upload</span>
                    </div>
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile01"
                        onChange={handdleFile}
                      />
                      <label id="fileLabel" class="custom-file-label" for="inputGroupFile01">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>



                <div className="form-group mt-5 col-12">
                  <h5 className="font-medium mb-3">Upload Documents</h5>
                  <label className="font-medium text-gray-700" htmlfor="exampleInputName1">
                  Please provide any relevant certificates, hackathon wins, or awards related to this job?
                  </label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend cursor-pointer">
                      <span class="input-group-text btn btn-primary"  onClick={handleUpload2}>Upload</span>
                    </div>
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile02"
                        onChange={handdleFile2}
                      />
                      <label id="fileLabel2" class="custom-file-label" for="inputGroupFile01">
                        Choose file
                      </label>
                    </div>
                  </div>
                </div>




                <div className="my-1">
                  <small className="form-text text-muted"></small>
                </div>
                <div></div>
              </div>

              <div class="modal-footer bg-gray-100">
                <button type="submit" className="btn mt-2 view2btn">
                  Submit application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
