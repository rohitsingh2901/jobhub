import React, { useState } from "react";
import data from "../Jobs.json";
import ReactPaginate from 'react-paginate';


const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; 

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const renderData = data.jobs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <div className="mt-48">
      <h1 className="text-center">Jobs</h1>
      {renderData.map((element) => {
        return (
          <div key={element.id} className="flex justify-center ">
            <div class="card mb-3" style={{ "minWidth": "540px","minHeight": "300px" }}>
              <div class="row no-gutters">
                
                <div class="col-md-10">
                  <div class="card-body">
                    <h5 class="card-title">{element.name}</h5>
                    <p>{element.company}</p>
                    <div className="flex items-center">
                    <i class="fa-sharp fa-solid fa-location-dot mr-2 fa"></i>
                    <span>{element.location}</span>
                    </div>
                    <div className="flex items-center justify-between my-2">
                    
                    <span><i class='far fa-play-circle fa mr-2'></i>{element.startDate}</span>
                    
                    <span><i class='far fa-money-bill-alt fa mr-2'></i>{element["min-ctc"]+'-'+element["max-ctc"]+' LPA'}</span>
                    
                    <span><i class='far fa-money-bill-alt fa mr-2'></i>{element["min-experience"]+'-'+element["max-experience"]+' years'}</span>
                    </div>
                    <p class="card-text">
                      <small class="text-muted">{element.postTime}</small>
                    </p>
                  </div>
                </div>
                <div class="col-md-2">
                  <img src={element.image} alt="..." />
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
