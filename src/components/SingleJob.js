import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation, } from "react-router-dom";
import data from "../Jobs.json";
import ApplyForm from "./ApplyForm";


const SingleJob = (props) => {
  const { id } = useParams();
  const textRef = useRef(null);
  const location = useLocation();
  const [file, setfile] = useState(null);
  const [file2, setfile2] = useState(null);



  const defaultValue = {"fname": '',
  "lname": '',
  "email": '',
  "phone": '',
  "coverletter": '',
  "resume": '',
  "document": '',
  "companyID" : 0,
  "companyName" : ''
}


  const [cred, setCred] = useState(defaultValue)


  const handdleFile = (event) => {
    if(event.target.files.length===0){
      return
    }
    setfile(event.target.files[0]);
    document.getElementById("fileLabel").innerHTML = event.target.files[0].name;
    setCred((prevFormData) => ({ ...prevFormData, "resume": event.target.files[0].name }));
  };


  const handdleFile2 = (event) => {
    
    if(event.target.files.length===0){
      return
    }
    setfile2(event.target.files[0]);
    document.getElementById("fileLabel2").innerHTML =
      event.target.files[0].name;
      setCred((prevFormData) => ({ ...prevFormData, "document": event.target.files[0].name }));
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'JobHub - Apply Now'
  }, [])
  

  const copyToClipboard = () => {
    const text = textRef.current.innerHTML;
    let modifiedUrl = text.replace("//jobs/", `/jobhub/#/jobs/`);
    console.log(modifiedUrl)
    navigator.clipboard
      .writeText(modifiedUrl)
      .then(() => {
        // alert("Copied");
        // TODO
        props.alert.alert("Link copied successfully",'success')
      })
      .catch(() => {
        // alert("some error occured");
        // TODO
        props.alert.alert("Some error occurred",'danger')

      });
  };


  const handleApplyForm = (event,id,name)=>{
    event.preventDefault();
    document.getElementsByClassName('close')[0].click();
    cred.companyID=id;
    cred.companyName+=name;

    
    fetch('https://brassy-well-trick.glitch.me/apply', {
      method: "POST",
      body: JSON.stringify(cred),
      headers: {"Content-type": "application/json"}
    })
    .then(response => response.json()) 
    .then(json => {
      console.log(json)
      if(json.error){
        props.alert.alert(json.error,'danger')
      }
      else{
        props.alert.alert(json.success,'success')
      }
    })
    .catch(err => {
      console.log(err)
      props.alert.alert("Some error occured",'danger')
    })
    


  }
  
  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setCred((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormReset = ()=>{
    setCred(defaultValue)
    setfile(null)
    setfile2(null)
    document.getElementById('inputGroupFile01').value=null;
    document.getElementById('inputGroupFile02').value=null;
    document.getElementById("fileLabel").innerHTML = 'Choose file'
    document.getElementById("fileLabel2").innerHTML = 'Choose file'

  }


  return (
    <div id="SingleJobDiv" style={{"minHeight":"100vh"}}>
    <div className="container my-32">
      <div class="card w-100" id="singlemaincard">
        <div class="card-body">
          <h5 class="card-title text-2xl text-center font-extrabold py-6">
            {data[0].jobs.at(id - 1).name} Job in {data[0].jobs.at(id - 1).location}{" "}
            at {data[0].jobs.at(id - 1).company}
          </h5>
          <div class="row no-gutters">
            <div class="col-md-10">
              <div class="card-body">
                <h5 class="card-title font-bold">
                  {data[0].jobs.at(id - 1).name}
                </h5>
                <p>{data[0].jobs.at(id - 1).company}</p>
                <div className="flex items-center">
                  <i class="fa-sharp fa-solid fa-location-dot mr-2 fa"></i>
                  <span>{data[0].jobs.at(id - 1).location}</span>
                </div>
                <div className="flex items-center justify-between my-2">
                  <div className="flex flex-col items-start justify-start">
                    <span>
                      <i class="far fa-play-circle fa mr-2"></i>
                      <span className="icontitles">START DATE</span>
                    </span>
                    <span>{data[0].jobs.at(id - 1).startDate}</span>
                  </div>

                  <div className="flex flex-col items-start justify-start">
                    <span>
                      <i class="far fa-money-bill-alt fa mr-2"></i>
                      <span className="icontitles">CTC</span>
                    </span>
                    <span>
                      {data[0].jobs.at(id - 1)["min-ctc"] +
                        "-" +
                        data[0].jobs.at(id - 1)["max-ctc"] +
                        " LPA"}
                    </span>
                  </div>

                  <div className="flex flex-col items-start justify-start">
                    <span>
                      <i class="far fa-money-bill-alt fa mr-2"></i>
                      <span className="icontitles">EXPERIENCE</span>
                    </span>
                    <span>
                      {data[0].jobs.at(id - 1)["min-experience"] +
                        "-" +
                        data[0].jobs.at(id - 1)["max-experience"] +
                        " years"}
                    </span>
                  </div>
                </div>
                <div class="card-text my-3">
                  <small id="timecard" class="text-muted">
                    {data[0].jobs.at(id - 1).postTime}
                  </small>
                  <small id="timecard" class="text-muted mx-3">
                    {data[0].jobs.at(id - 1).status}
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
                src={'/jobhub'+data[0].jobs.at(id - 1).image}
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
              <p>{data[0].jobs.at(id - 1).applicants} applicants</p>
            </div>
            <p>
              <button onClick={()=>copyToClipboard(id-1)}>
                <i class="fa-solid fa-share fa-lg text-red-900"></i>
              </button>
              <p hidden ref={textRef}>
                {'https://rohitsingh2901.github.io/'+location.pathname}
              </p>
            </p>
          </div>
          <hr></hr>

          <div className="container">
            <div className="mt-5">
              <h6 className="font-medium">
                About {data[0].jobs.at(id - 1).company}
              </h6>
              <p className="text-start text-sm">
                {data[0].jobs.at(id - 1).aboutCompany}
              </p>
            </div>
            <div className="mt-5">
              <h6 className="font-medium">About the job</h6>
              <p className="text-start text-sm">
                {data[0].jobs.at(id - 1).aboutJob}
              </p>
            </div>
            <div className="mt-5">
              <h6 className="font-medium">Skill(s) required</h6>
              <ul>
                {data[0].jobs.at(id - 1).skillsRequired.map((item, index) => (
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
                {data[0].jobs.at(id - 1)["min-ctc"] +
                  "-" +
                  data[0].jobs.at(id - 1)["max-ctc"] +
                  " LPA"}
              </p>
            </div>
            <div className="mt-5">
              <h6 className="font-medium">Perk</h6>
              <ul>
                {data[0].jobs.at(id - 1).perks.map((item, index) => (
                  <li className="text-sm" key={index}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <h6 className="font-medium">Number of Opening</h6>
              <p className="text-start text-sm">
                {data[0].jobs.at(id - 1).openings}
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

      <ApplyForm handleApplyForm={handleApplyForm}  id={id} cred={cred} handleInputChange={handleInputChange} handdleFile={handdleFile} handdleFile2={handdleFile2} handleFormReset={handleFormReset} />
    </div>
    </div>
  );
};

export default SingleJob;
