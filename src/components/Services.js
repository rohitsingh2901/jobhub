import React from "react";

const Services = () => {
  return (
    <div className=" container mt-16">
      <h1 className="text-center font-black text-6xl">Our Services</h1>
      <h4 className="font-bold mt-16">Products & Services</h4>
      <p className="font-medium mt-4">
      At JobHub, we offer a range of comprehensive services designed to connect job seekers with their ideal employment opportunities.
      </p>

      <p className="font-medium mt-4">Our services include: </p>
      

     
        <li className="font-medium text-gray-700 text-sm">
          <b>Advanced Job Search and Matching:</b> Our powerful search engine allows job seekers to easily find relevant job openings based on industry, location, salary, and other important criteria. We employ intelligent algorithms to match candidates with the most suitable positions, increasing their chances of finding the perfect job.{" "}
        </li>
        <li className="font-medium text-gray-700 text-sm">
          <b>Job and job search:</b> job and job seekers from all over
          India can search and apply for internships and jobs relevant to their
          coursework and interest free of cost. Visit JobHub Student
          Section to know more.
        </li>
        <li className="font-medium text-gray-700 text-sm">
         <b> JobHub Trainings: </b> JobHub offers a variety of online training
          programs across multiple disciplines (Machine Learning, Web
          Development, Digital Marketing, Java, French and several others) which
          students can do from the comfort of their homes and learn the skills
          needed in today’s industry. Visit JobHub Trainings to know more.
        </li>
      
        <p className="font-medium text-gray-700 text-sm mt-8">
          JobHub reserves the right to add/remove any product and service
          at its sole discretion or change the price charged for such offerings.
        </p>
    </div>
  );
};

export default Services;
