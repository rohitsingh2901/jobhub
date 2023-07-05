import React, { useEffect, useState } from "react";
import data from "../Jobs.json";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import Select from "react-select";

const Jobs = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setid] = useState(null);
  const [file, setfile] = useState(null);
  const [file2, setfile2] = useState(null);
  const [filter, setfilter] = useState(null);
  const [len, setlen] = useState(data.jobs.length);
  // const [inputchecked, setinputchecked] = useState({})
  const [inputchecked, setinputchecked] = useState(null);
  const [inputchecked1, setinputchecked1] = useState(null);
  const [inputchecked2, setinputchecked2] = useState(null);
  const [inputchecked3, setinputchecked3] = useState(null);
  const handleApply = (eid) => {
    setid(eid);
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  const renderData = data.jobs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handdleFile = (event) => {
    setfile(event.target.files[0]);
    document.getElementById("fileLabel").innerHTML = event.target.files[0].name;
  };
  const handleUpload = () => {
    if (file) {
      console.log(file);
      const formData = new FormData();
      formData.append("file", file);
      // console.log(formData)

      // TODO : send data

      setfile(null);
    }
  };

  const handdleFile2 = (event) => {
    setfile2(event.target.files[0]);
    document.getElementById("fileLabel2").innerHTML =
      event.target.files[0].name;
  };
  const handleUpload2 = () => {
    if (file2) {
      console.log(file2);
      const formData = new FormData();
      formData.append("file", file2);
      // console.log(formData)

      // TODO : send data

      setfile2(null);
    }
  };

  const handleCheck = (event) => {
    setinputchecked(event.value);
  };
  const handleCheck1 = (event) => {
    setinputchecked1(event.value);
  };
  const handleCheck2 = (event) => {
    setinputchecked2(event.value);
  };
  const handleCheck3 = (event) => {
    console.log(event)
    setinputchecked3(parseInt(event.target.value));
  };

  const [CheckCheck, setCheckCheck] = useState(false);

  const options = [
    { value: "", label: "Select" },
    { value: "Front End Development", label: "Front End Development" },
    { value: "Back End Development", label: "Back End Development" },
    { value: "Data Analyst", label: "Data Analyst" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Full Stack Development", label: "Full Stack Development" },
    { value: "UI/UX Designer", label: "UI/UX Designer" },
  ];
  const options2 = [
    { value: "", label: "Select" },
    { value: "New Delhi", label: "New Delhi" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Pune", label: "Pune" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Chennai", label: "Chennai" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bangalore", label: "Bangalore" },
  ];
  const options3 = [
    { value: "Fresher", label: "Fresher" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5+", label: "5+" },
  ];

  useEffect(() => {
    const text0 = options[0].value;
    const text1 = options[1].value;
    const text2 = options[2].value;
    const text3 = options[3].value;
    const text4 = options[4].value;
    const text5 = options[5].value;
    const text6 = options[6].value;
    const text11 = options2[1].value;
    const text12 = options2[2].value;
    const text13 = options2[3].value;
    const text14 = options2[4].value;
    const text15 = options2[5].value;
    const text16 = options2[6].value;
    const text17 = options2[7].value;
    const text00 = options2[0].value;
    const text000 = options3[0].value;
    const text111 = options3[1].value;
    const text122 = options3[2].value;
    const text133 = options3[3].value;
    const text144 = options3[4].value;
    const text155 = options3[5].value;

    const filteredData = data.jobs.filter((job) => {
      if (inputchecked) {
        return (
          (inputchecked === text0
            ? job.name.toLowerCase().includes(text0.toLowerCase())
            : "") ||
          (inputchecked === text1
            ? job.name.toLowerCase().includes(text1.toLowerCase())
            : "") ||
          (inputchecked === text2
            ? job.name.toLowerCase().includes(text2.toLowerCase())
            : "") ||
          (inputchecked === text3
            ? job.name.toLowerCase().includes(text3.toLowerCase())
            : "") ||
          (inputchecked === text4
            ? job.name.toLowerCase().includes(text4.toLowerCase())
            : "") ||
          (inputchecked === text5
            ? job.name.toLowerCase().includes(text5.toLowerCase())
            : "") ||
          (inputchecked === text6
            ? job.name.toLowerCase().includes(text6.toLowerCase())
            : "")
        );
      } else {
        return job;
      }
    });

    const filteredData1 = data.jobs.filter((job) => {
      if (inputchecked1) {
        return (
          (inputchecked1 === text00
            ? job.location.toLowerCase().includes(text00.toLowerCase())
            : "") ||
          (inputchecked1 === text11
            ? job.location.toLowerCase().includes(text11.toLowerCase())
            : "") ||
          (inputchecked1 === text12
            ? job.location.toLowerCase().includes(text12.toLowerCase())
            : "") ||
          (inputchecked1 === text13
            ? job.location.toLowerCase().includes(text13.toLowerCase())
            : "") ||
          (inputchecked1 === text14
            ? job.location.toLowerCase().includes(text14.toLowerCase())
            : "") ||
          (inputchecked1 === text15
            ? job.location.toLowerCase().includes(text15.toLowerCase())
            : "") ||
          (inputchecked1 === text16
            ? job.location.toLowerCase().includes(text16.toLowerCase())
            : "") ||
          (inputchecked1 === text17
            ? job.location.toLowerCase().includes(text17.toLowerCase())
            : "")
        );
      } else {
        return job;
      }
    });

    const filteredData2 = data.jobs.filter((job) => {
      if (inputchecked2) {
        return (
          (inputchecked2 === text000 ? job["min-experience"] >= 0 : "") ||
          (inputchecked2 === text111 ? job["min-experience"] >= 1 : "") ||
          (inputchecked2 === text122 ? job["min-experience"] >= 2 : "") ||
          (inputchecked2 === text133 ? job["min-experience"] >= 3 : "") ||
          (inputchecked2 === text144 ? job["min-experience"] >= 4 : "") ||
          (inputchecked2 === text155 ? job["min-experience"] >= 5 : "")
        );
      } else {
        return job;
      }
    });
    const filteredData3 = data.jobs.filter((job) => {
      if (inputchecked3) {
        return (
          (inputchecked3 === 0 ? job["min-ctc"] >= 0 : "") ||
          (inputchecked3 === 1 ? job["min-ctc"] >= 1 : "") ||
          (inputchecked3 === 2 ? job["min-ctc"] >= 2 : "") ||
          (inputchecked3 === 3 ? job["min-ctc"] >= 3 : "") ||
          (inputchecked3 === 4 ? job["min-ctc"] >= 4 : "") ||
          (inputchecked3 === 5 ? job["min-ctc"] >= 5 : "")
        );
      } else {
        return job;
      }
    });
    const combinedResult = filteredData.filter((item) => filteredData1.includes(item) && filteredData2.includes(item) && filteredData3.includes(item));



    if (
      inputchecked === null &&
      inputchecked1 === null &&
      inputchecked2 === null &&
      inputchecked3 === null
    ) {
      setCheckCheck(false);
      setlen(data.jobs.length);
    } else {
      setCheckCheck(true);
      const renderData2 = combinedResult.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      setlen(combinedResult.length);
      setfilter(renderData2);
      setCurrentPage(currentPage);
    }
  }, [inputchecked, currentPage, inputchecked1, inputchecked2,inputchecked3]);

  return (
    <div className="flex justify-center">
      <div className="col-2 flex justify-center items-start mt-24">
        <div className="">
          <h5 className="text-center font-bold">Filter</h5>
          <div className="mx-4">
            <h6>Profile</h6>
            <Select
              className="jobSelectoption"
              options={options}
              placeholder="e.g. Web development"
              onChange={handleCheck}
              defaultValue={inputchecked}
            />
          </div>

          <div className="mx-4">
            <h6>Location</h6>
            <Select
              className="jobSelectoption"
              options={options2}
              placeholder="e.g. Delhi"
              onChange={handleCheck1}
              defaultValue={inputchecked}
            />
          </div>

          <div className="mx-4">
            <h6>Min Experience</h6>
            <Select
              className="jobSelectoption"
              options={options3}
              placeholder="Select Year of Experience"
              onChange={handleCheck2}
              defaultValue={inputchecked}
            />
          </div>

          <div className="mx-4 mt-3">
            <h6 className="my-3">CTC</h6>
            <form >
  <div class="form-group">
  <h6><label for="formControlRange">Select minimum CTC in LPA</label></h6>
    <input type="range" class="form-control-range"  onChange={handleCheck3} defaultValue={0} min="0" max="5" step="1" id="formControlRange"/>
    <div className="flex justify-between">
      <span>0</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5+</span>
    </div>
  </div>
</form>
          </div>
        </div>
      </div>
      <div className="mt-16 col-8">
        <h1 className="text-center font-extrabold">
          About {len} <span className="sp"> Job </span>results
        </h1>
        {!CheckCheck
          ? renderData.map((element) => (
              <div key={element.id} className="flex justify-center mt-8">
                <div class="card mb-3" id="mainCard">
                  <div class="row no-gutters">
                    <div class="col-md-10">
                      <div class="card-body">
                        <h5 class="card-title font-medium">{element.name}</h5>
                        <p>{element.company}</p>
                        <div className="flex items-center">
                          <i class="fa-sharp fa-solid fa-location-dot mr-2 fa"></i>
                          <span>{element.location}</span>
                        </div>
                        <div className="flex items-center justify-between my-2">
                          <div className="flex flex-col items-start justify-start">
                            <span>
                              <i class="far fa-play-circle fa mr-2"></i>
                              <span className="icontitles">START DATE</span>
                            </span>
                            <span>{element.startDate}</span>
                          </div>

                          <div className="flex flex-col items-start justify-start">
                            <span>
                              <i class="far fa-money-bill-alt fa mr-2"></i>
                              <span className="icontitles">CTC</span>
                            </span>
                            <span>
                              {element["min-ctc"] +
                                "-" +
                                element["max-ctc"] +
                                " LPA"}
                            </span>
                          </div>

                          <div className="flex flex-col items-start justify-start">
                            <span>
                              <i class="far fa-money-bill-alt fa mr-2"></i>
                              <span className="icontitles">EXPERIENCE</span>
                            </span>
                            <span>
                              {element["min-experience"] +
                                "-" +
                                element["max-experience"] +
                                " years"}
                            </span>
                          </div>
                        </div>
                        <div class="card-text my-3">
                          <small id="timecard" class="text-muted">
                            {element.postTime}
                          </small>
                          <small id="timecard" class="text-muted mx-3">
                            {element.status}
                          </small>
                        </div>
                        <hr></hr>
                        <div className="flex justify-between">
                          <Link to={`/jobs/${element.id}`}>
                            <button className="btn btn-sm view1btn">
                              View details
                            </button>
                          </Link>
                          <button
                            onClick={() => {
                              handleApply(element.id);
                            }}
                            className="btn btn-sm view2btn"
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <img
                        style={{
                          width: "60px",
                          height: "60px",
                          marginTop: "5px",
                        }}
                        src={element.image}
                        alt="Logo"
                      />
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
                            <h5
                              class="modal-title font-bold"
                              id="exampleModalLongTitle"
                            >
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
                              <label
                                className="font-medium text-gray-700"
                                htmlfor="fn"
                              >
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
                              <label
                                className="font-medium text-gray-700"
                                htmlfor="ln"
                              >
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
                              <label
                                className="font-medium text-gray-700"
                                htmlfor="email"
                              >
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
                              <label
                                className="font-medium text-gray-700"
                                htmlfor="phn"
                              >
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
                            <label
                              className="font-medium text-gray-700"
                              htmlfor="exampleInputName1"
                            >
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
                            <label
                              className="font-medium text-gray-700"
                              htmlfor="exampleInputName1"
                            >
                              Kindly provide an latest version of your resume
                              for our records.
                            </label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend cursor-pointer">
                                <span
                                  class="input-group-text btn btn-primary"
                                  onClick={handleUpload}
                                >
                                  Upload
                                </span>
                              </div>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile01"
                                  onChange={handdleFile}
                                />
                                <label
                                  id="fileLabel"
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="form-group mt-5 col-12">
                            <h5 className="font-medium mb-3">
                              Upload Documents
                            </h5>
                            <label
                              className="font-medium text-gray-700"
                              htmlfor="exampleInputName1"
                            >
                              Please provide any relevant certificates,
                              hackathon wins, or awards related to this job?
                            </label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend cursor-pointer">
                                <span
                                  class="input-group-text btn btn-primary"
                                  onClick={handleUpload2}
                                >
                                  Upload
                                </span>
                              </div>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile02"
                                  onChange={handdleFile2}
                                />
                                <label
                                  id="fileLabel2"
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                >
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
            ))
          : filter.map((element) => (
              <div key={element.id} className="flex justify-center mt-8">
                <div class="card mb-3" id="mainCard">
                  <div class="row no-gutters">
                    <div class="col-md-10">
                      <div class="card-body">
                        <h5 class="card-title font-medium">
                          {element.name}
                        </h5>
                        <p>{element.company}</p>
                        <div className="flex items-center">
                          <i class="fa-sharp fa-solid fa-location-dot mr-2 fa"></i>
                          <span>{element.location}</span>
                        </div>
                        <div className="flex items-center justify-between my-2">
                          <div className="flex flex-col items-start justify-start">
                            <span>
                              <i class="far fa-play-circle fa mr-2"></i>
                              <span className="icontitles">START DATE</span>
                            </span>
                            <span>{element.startDate}</span>
                          </div>

                          <div className="flex flex-col items-start justify-start">
                            <span>
                              <i class="far fa-money-bill-alt fa mr-2"></i>
                              <span className="icontitles">CTC</span>
                            </span>
                            <span>
                              {element["min-ctc"] +
                                "-" +
                                element["max-ctc"] +
                                " LPA"}
                            </span>
                          </div>

                          <div className="flex flex-col items-start justify-start">
                            <span>
                              <i class="far fa-money-bill-alt fa mr-2"></i>
                              <span className="icontitles">EXPERIENCE</span>
                            </span>
                            <span>
                              {element["min-experience"] +
                                "-" +
                                element["max-experience"] +
                                " years"}
                            </span>
                          </div>
                        </div>
                        <div class="card-text my-3">
                          <small id="timecard" class="text-muted">
                            {element.postTime}
                          </small>
                          <small id="timecard" class="text-muted mx-3">
                            {element.status}
                          </small>
                        </div>
                        <hr></hr>
                        <div className="flex justify-between">
                          <Link to={`/jobs/${element.id}`}>
                            <button className="btn btn-sm view1btn">
                              View details
                            </button>
                          </Link>
                          <button
                            onClick={() => {
                              handleApply(element.id);
                            }}
                            className="btn btn-sm view2btn"
                            data-toggle="modal"
                            data-target="#exampleModalLong"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <img
                        style={{
                          width: "60px",
                          height: "60px",
                          marginTop: "5px",
                        }}
                        src={element.image}
                        alt="Logo"
                      />
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
                            <h5
                              class="modal-title font-bold"
                              id="exampleModalLongTitle"
                            >
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
                              <label
                                className="font-medium text-gray-700"
                                htmlfor="fn"
                              >
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
                              <label
                                className="font-medium text-gray-700"
                                htmlfor="ln"
                              >
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
                              <label
                                className="font-medium text-gray-700"
                                htmlfor="email"
                              >
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
                              <label
                                className="font-medium text-gray-700"
                                htmlfor="phn"
                              >
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
                            <label
                              className="font-medium text-gray-700"
                              htmlfor="exampleInputName1"
                            >
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
                            <label
                              className="font-medium text-gray-700"
                              htmlfor="exampleInputName1"
                            >
                              Kindly provide an latest version of your resume
                              for our records.
                            </label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend cursor-pointer">
                                <span
                                  class="input-group-text btn btn-primary"
                                  onClick={handleUpload}
                                >
                                  Upload
                                </span>
                              </div>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile01"
                                  onChange={handdleFile}
                                />
                                <label
                                  id="fileLabel"
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                >
                                  Choose file
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="form-group mt-5 col-12">
                            <h5 className="font-medium mb-3">
                              Upload Documents
                            </h5>
                            <label
                              className="font-medium text-gray-700"
                              htmlfor="exampleInputName1"
                            >
                              Please provide any relevant certificates,
                              hackathon wins, or awards related to this job?
                            </label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend cursor-pointer">
                                <span
                                  class="input-group-text btn btn-primary"
                                  onClick={handleUpload2}
                                >
                                  Upload
                                </span>
                              </div>
                              <div class="custom-file">
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile02"
                                  onChange={handdleFile2}
                                />
                                <label
                                  id="fileLabel2"
                                  class="custom-file-label"
                                  for="inputGroupFile01"
                                >
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
            ))}

        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(len / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          previousClassName={len === 0 ? "d-none" : "pagination__button  mx-4"}
          nextClassName={len === 0 ? "d-none" : "pagination__button mx-4"}
          disabledClassName={"pagination__button--disabled"}
          pageClassName={"pagination__page"}
          pageLinkClassName={"pagination__link"}
          activeLinkClassName={"pagination__link--active"}
        />
      </div>
    </div>
  );
};

export default Jobs;
