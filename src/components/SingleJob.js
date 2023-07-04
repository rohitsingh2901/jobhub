import React, { useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import data from "../Jobs.json";

const SingleJob = () => {
  const { id } = useParams();
  const textRef = useRef(null);
  const location = useLocation();

  const  copyToClipboard = ()=>{
    const text = textRef.current.innerText;
    navigator.clipboard.writeText(text).then(()=>{
      alert('Copied');
    }).catch(()=>{
      alert('some error occured')
    })
  }


  return (
    <div className="container mt-32">
      <div class="card w-100">
        <div class="card-body">
          <h5 class="card-title text-center font-extrabold">{data.jobs.at(id-1).name} Job in {data.jobs.at(id-1).location} at {data.jobs.at(id-1).company}</h5>
          <div class="row no-gutters">
                
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title font-bold">{data.jobs.at(id-1).name}</h5>
                    <p>{data.jobs.at(id-1).company}</p>
                    <div className="flex items-center">
                    <i class="fa-sharp fa-solid fa-location-dot mr-2 fa"></i>
                    <span>{data.jobs.at(id-1).location}</span>
                    </div>
                    <div className="flex items-center justify-between my-2">
                    <div className="flex flex-col items-start justify-start">
                    <span><i class='far fa-play-circle fa mr-2'></i><span className="icontitles">START DATE</span></span>
                    <span>{data.jobs.at(id-1).startDate}</span>
                    </div>

                    <div className="flex flex-col items-start justify-start">
                    <span><i class='far fa-money-bill-alt fa mr-2'></i><span className="icontitles">CTC</span></span>
                    <span>{data.jobs.at(id-1)["min-ctc"]+'-'+data.jobs.at(id-1)["max-ctc"]+' LPA'}</span>
                    </div>

                    <div className="flex flex-col items-start justify-start">
                    <span><i class='far fa-money-bill-alt fa mr-2'></i><span className="icontitles">EXPERIENCE</span></span>
                    <span>{data.jobs.at(id-1)["min-experience"]+'-'+data.jobs.at(id-1)["max-experience"]+' years'}</span>
                    </div>
                    </div>
                    <div class="card-text my-3">
                      <small id="timecard" class="text-muted">{data.jobs.at(id-1).postTime}</small>
                      <small id="timecard" class="text-muted mx-3">{data.jobs.at(id-1).status}</small>
                    </div>


                    
                    
                  </div>
                </div>
                <div class="col-md-2" style={{"display": "flex", "flex-direction": "column","justify-content":"space-between","align-items": "center"}}>
                  <img style={{"width":"60px", "height" : "60px", "marginTop" : "5px"}} src={data.jobs.at(id-1).image} alt="Logo" />
                </div>

              </div>
              <div>

              </div>
              <div className="mt-4 mx-3 flex justify-between">
                <div className="flex">
                    <p><i class='fas fa-users fa mr-2'></i><span className="icontitles"></span></p>
                    <p>{data.jobs.at(id-1).applicants} applicants</p>
                    </div>
                    <p><button onClick={copyToClipboard}><i class="fa-solid fa-share fa-lg text-red-900"></i></button>
                    <p hidden ref={textRef}>{location.pathname}</p></p>
              </div>
              <hr></hr>

              <div className="mt-5">
                <h6 className="font-medium">About {data.jobs.at(id-1).company}</h6>
                <p className="text-start">{data.jobs.at(id-1).aboutCompany}</p>
              </div>
              <div className="mt-5">
                <h6 className="font-medium">About the job</h6>
                <p className="text-start">{data.jobs.at(id-1).aboutJob}</p>
              </div>

        </div>
      </div>
    </div>
  );
};

export default SingleJob;
