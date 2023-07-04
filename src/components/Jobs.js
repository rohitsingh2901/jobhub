import React, { useState } from "react";
import data from "../Jobs.json";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";


const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; 

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  const renderData = data.jobs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <div className="mt-32">
      <h1 className="text-center font-extrabold">About {data.jobs.length} <span className="sp"> Job </span>results</h1>
      {renderData.map((element) => {
        return (
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
                    <span><i class='far fa-play-circle fa mr-2'></i><span className="icontitles">START DATE</span></span>
                    <span>{element.startDate}</span>
                    </div>

                    <div className="flex flex-col items-start justify-start">
                    <span><i class='far fa-money-bill-alt fa mr-2'></i><span className="icontitles">CTC</span></span>
                    <span>{element["min-ctc"]+'-'+element["max-ctc"]+' LPA'}</span>
                    </div>

                    <div className="flex flex-col items-start justify-start">
                    <span><i class='far fa-money-bill-alt fa mr-2'></i><span className="icontitles">EXPERIENCE</span></span>
                    <span>{element["min-experience"]+'-'+element["max-experience"]+' years'}</span>
                    </div>
                    </div>
                    <div class="card-text my-3">
                      <small id="timecard" class="text-muted">{element.postTime}</small>
                      <small id="timecard" class="text-muted mx-3">{element.status}</small>
                    </div>
                    <hr></hr>
                    <div className="flex justify-between">
                    <Link to={`/jobs/${element.id}`}><button className="btn btn-sm view1btn">View details</button></Link>
                    <button className="btn btn-sm view2btn">Apply Now</button>
                    </div>
                    
                  </div>
                </div>
                <div class="col-md-2">
                  <img style={{"width":"60px", "height" : "60px", "marginTop" : "5px"}} src={element.image} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(data.jobs.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        previousClassName={'pagination__button  mx-4'}
        nextClassName={'pagination__button mx-4'}
        disabledClassName={'pagination__button--disabled'}
        pageClassName={'pagination__page'}
        pageLinkClassName={'pagination__link'}
        activeLinkClassName={'pagination__link--active'}
      />
    </div>
  );
};

export default Jobs;
