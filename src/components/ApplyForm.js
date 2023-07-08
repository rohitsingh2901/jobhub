import React from 'react'
import data from '../Jobs.json'

const ApplyForm = (props) => {
  return (
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
                    <form id="form" onSubmit={(e)=>{
                      console.log(document.getElementById('inputGroupFile01').value)
                      if(document.getElementById('inputGroupFile01').value){
                        props.handleApplyForm(e,data.jobs.at(props.id - 1).id,data.jobs.at(props.id - 1).name)
                      }
                      else{
                        document.getElementById('inputGroupFile01').reportValidity();
                      }
                      }}>
                        <div class="modal-header bg-gray-100">
                          <div>
                            <h5
                              class="modal-title font-bold"
                              id="exampleModalLongTitle"
                            >
                              Applying for {data.jobs.at(props.id - 1).name}
                            </h5>
                            <small>{data.jobs.at(props.id - 1).company}</small>
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
                                name="fname"
                                value={props.cred.fname}
                                onChange={props.handleInputChange}
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
                              name="lname"
                              value={props.cred.lname}
                              onChange={props.handleInputChange}
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
                              name="email"
                              value={props.cred.email}
                              onChange={props.handleInputChange}
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
                              name="phone"
                              value={props.cred.phone}
                              onChange={props.handleInputChange}
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
                              name="coverletter"
                              value={props.cred.coverletter}
                              onChange={props.handleInputChange}
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
                              
                              <div class="custom-file">
                                <input
                                required
                                  accept=".pdf,.doc,.docx"
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile01"
                                  onChange={props.handdleFile}
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
                              
                              <div class="custom-file">
                                <input
                                  accept=".pdf,.doc,.docx,.img,.jpg"
                                  type="file"
                                  class="custom-file-input"
                                  id="inputGroupFile02"
                                  onChange={props.handdleFile2}
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
                          <button type="button" onClick={props.handleFormReset} className="btn mt-2 view2btn">Reset form</button>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
  )
}

export default ApplyForm
