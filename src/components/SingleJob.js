import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../Jobs.json";


const SingleJob = () => {
    const{id} = useParams();
  return (
    <div className="mt-64">
      <h1 className='text-center'>This is view details of {data.jobs.at(id-1).name}</h1>
    </div>
  )
}

export default SingleJob
