import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'JobHub - Services'
  }, [])
  return (
    <div id="servicesDiv">
    <div  className=" container pt-12">
      <h1 className="text-center font-black text-6xl">Our Services</h1>
      <hr class="my-12" />
    
      <h4 className="font-bold mt-16">Products & Services</h4>
      <p className="font-medium mt-4">
      At <Link to="/">JobHub</Link>, we offer a range of comprehensive services designed to connect job seekers with their ideal employment opportunities.
      </p>

      <p className="font-medium mt-4">Our services include: </p>
      

     
        <li className="font-medium text-gray-700 text-sm">
          <b>Advanced Job Search and Matching:</b> Our powerful search engine allows job seekers to easily find relevant job openings based on industry, location, salary, and other important criteria. We employ intelligent algorithms to match candidates with the most suitable positions, increasing their chances of finding the perfect job.{" "}
        </li>
        <li className="font-medium text-gray-700 text-sm">
          <b> Intelligent Job Matching:</b> We leverage advanced algorithms and artificial intelligence to match job seekers with positions that align with their skills, qualifications, and preferences. By analyzing the information provided in user profiles and job descriptions, our system suggests personalized job recommendations, saving time and effort for both candidates and employers.
        </li>
        <li className="font-medium text-gray-700 text-sm">
         <b> User Profiles:</b> Job seekers can create comprehensive profiles that showcase their skills, work experience, education, and other relevant information. These profiles act as a digital resume, allowing candidates to present themselves effectively to potential employers.
        </li>
        <li className="font-medium text-gray-700 text-sm">
         <b> Resume Builder: </b> We offer a user-friendly resume builder tool that enables job seekers to create professional resumes quickly and easily. Our templates and formatting options ensure that resumes are visually appealing and highlight key qualifications and achievements.
        </li>
        <li className="font-medium text-gray-700 text-sm">
         <b> Job Alerts:</b> Users can set up personalized job alerts based on their specific criteria. They receive notifications via email or within their account whenever new job opportunities that match their preferences are posted on the platform.
        </li>
      
        <p className="font-medium text-gray-700 text-sm mt-8">
        At <Link to="/">JobHub</Link>, our goal is to empower job seekers by providing them with the tools and resources they need to find their dream job. Whether you're a recent graduate, an experienced professional, or someone looking for a career change, we are here to help you navigate the job market and connect with meaningful employment opportunities.
        </p>
    </div>
    </div>
  );
};

export default Services;
