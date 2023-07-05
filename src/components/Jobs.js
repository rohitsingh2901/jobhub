import React, { useEffect, useState } from "react";
import data from "../Jobs.json";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";


const Jobs = () => {
  const itemsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setid] = useState(null)
  const [file, setfile] = useState(null);
  const [file2, setfile2] = useState(null);
  const [SearchText, setSearchText] = useState(null)
  const [searched, setsearched] = useState(false)
  const [filter, setfilter] = useState(null)
  const [len, setlen] = useState(data.jobs.length)
  const [inputchecked, setinputchecked] = useState({})
  const handleApply = (eid)=>{
    setid(eid);
  }
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  const renderData = data.jobs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
  const handleSearchChange = (e)=>{
    e.preventDefault()
    setSearchText(e.target.value)
  }
  const handleSearch = (e)=>{
    const filteredData= data.jobs.filter((job) =>{
      return (
        job.name.toLowerCase().includes(SearchText.toLowerCase())
      );
    }
    );
    setfilter(filteredData)
    setlen(filteredData.length)
    e.preventDefault()
    console.log(SearchText)
    if(SearchText){
      setsearched(true)
    }

  }

  const handleCheck = (event)=>{
    const { name, checked } = event.target;
    setinputchecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));    
  }

  
  const [CheckCheck, setCheckCheck] = useState(false)

  useEffect(() => {
    const text1 = document.getElementById('Checkbox1').nextSibling.innerHTML; 
    const text2 = document.getElementById('Checkbox2').nextSibling.innerHTML; 
    const text3 = document.getElementById('Checkbox3').nextSibling.innerHTML; 
    const text4 = document.getElementById('Checkbox4').nextSibling.innerHTML; 
    const text5 = document.getElementById('Checkbox5').nextSibling.innerHTML; 
    const text6 = document.getElementById('Checkbox6').nextSibling.innerHTML; 
    const filteredData= data.jobs.filter((job) =>{
      return (
        (inputchecked.Checkbox1 && inputchecked.Checkbox1===true ?job.name.toLowerCase().includes(text1.toLowerCase()):'')||
        (inputchecked.Checkbox2 && inputchecked.Checkbox2===true ?job.name.toLowerCase().includes(text2.toLowerCase()):'')||
        (inputchecked.Checkbox3 && inputchecked.Checkbox3===true ?job.name.toLowerCase().includes(text3.toLowerCase()):'')||
        (inputchecked.Checkbox4 && inputchecked.Checkbox4===true ?job.name.toLowerCase().includes(text4.toLowerCase()):'')||
        (inputchecked.Checkbox5 && inputchecked.Checkbox5===true ?job.name.toLowerCase().includes(text5.toLowerCase()):'')||
        (inputchecked.Checkbox6 && inputchecked.Checkbox6===true ?job.name.toLowerCase().includes(text6.toLowerCase()):'')
      );
    }
    );
    setlen(filteredData.length)
      const renderData1 = filteredData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      setfilter(renderData1)
 if((inputchecked.Checkbox1===undefined ||  inputchecked.Checkbox1===false)  &&
    (inputchecked.Checkbox2===undefined ||  inputchecked.Checkbox2===false)  &&
    (inputchecked.Checkbox3===undefined ||  inputchecked.Checkbox3===false)  &&
    (inputchecked.Checkbox4===undefined ||  inputchecked.Checkbox4===false)  &&
    (inputchecked.Checkbox5===undefined ||  inputchecked.Checkbox5===false)  &&
    (inputchecked.Checkbox6===undefined ||  inputchecked.Checkbox6===false)  ){
      setCheckCheck(false); 
      setlen(data.jobs.length)
    }
    else{
      setCheckCheck(true);
      setlen(filteredData.length)
      const renderData2 = filteredData.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
      );
      setfilter(renderData2)
      console.log(currentPage)
    }
    

  }, [inputchecked]);






  return (
    
    <div className="mt-16">
      <div id="search">
      <div>
        <div class="form-check form-check-inline">
      <input class="form-check-input" name="Checkbox1" onChange={handleCheck} checked={setinputchecked.Checkbox1} type="checkbox" id="Checkbox1" />
      <label class="form-check-label" for="inlineCheckbox1">Front End Development</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" name="Checkbox2" onChange={handleCheck} checked={setinputchecked.Checkbox2} type="checkbox" id="Checkbox2" />
        <label class="form-check-label" for="inlineCheckbox2">Back End Development</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" name="Checkbox3" onChange={handleCheck} checked={setinputchecked.Checkbox3} type="checkbox" id="Checkbox3" />
        <label class="form-check-label" for="inlineCheckbox3">Data Analyst</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" name="Checkbox4" onChange={handleCheck} checked={setinputchecked.Checkbox4} type="checkbox" id="Checkbox4" />
        <label class="form-check-label" for="inlineCheckbox4">Mobile App Development</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" name="Checkbox5" onChange={handleCheck} checked={setinputchecked.Checkbox5} type="checkbox" id="Checkbox5" />
        <label class="form-check-label" for="inlineCheckbox5">Full Stack Development</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" name="Checkbox6" onChange={handleCheck} checked={setinputchecked.Checkbox6} type="checkbox" id="Checkbox6" />
        <label class="form-check-label" for="inlineCheckbox6">UI/UX Designer</label>
      </div>
        </div>
        <div>
          <form onSubmit={handleSearch} class="search">
            <input type="text" onChange={handleSearchChange} placeholder="Search Job" name="search2"/>
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
      <h1 className="text-center font-extrabold">About {len} <span className="sp"> Job </span>results</h1>
      { !searched && !CheckCheck ? 
      (
        renderData.map((element) =>( 
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
                    <button onClick={()=>{handleApply(element.id)}} className="btn btn-sm view2btn" data-toggle="modal"
                data-target="#exampleModalLong">Apply Now</button>
                    </div>
                    
                  </div>
                </div>
                <div class="col-md-2">
                  <img style={{"width":"60px", "height" : "60px", "marginTop" : "5px"}} src={element.image} alt="Logo" />
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
            <form>
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
      ))):(
        filter.map((element)=>
        (
       (<div key={element.id} className="flex justify-center mt-8">
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
                <button onClick={()=>{handleApply(element.id)}} className="btn btn-sm view2btn" data-toggle="modal"
            data-target="#exampleModalLong">Apply Now</button>
                </div>
                
              </div>
            </div>
            <div class="col-md-2">
              <img style={{"width":"60px", "height" : "60px", "marginTop" : "5px"}} src={element.image} alt="Logo" />
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
        <form>
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





      </div>)
      )))}

      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(len/ itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        previousClassName={len===0 ? 'd-none':'pagination__button  mx-4' }
        nextClassName={len===0 ? 'd-none':'pagination__button mx-4'}
        disabledClassName={'pagination__button--disabled'}
        pageClassName={'pagination__page'}
        pageLinkClassName={'pagination__link'}
        activeLinkClassName={'pagination__link--active'}
      />
    </div>
  );
};

export default Jobs;
