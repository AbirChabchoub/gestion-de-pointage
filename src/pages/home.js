import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function Home() {



// Store a reference to the <p> element
const employeeCountElement = document.getElementById('employeeCount');
// Make a GET request to fetch the employee count
axios.get('http://localhost:8080/api/employee/quantity')
  .then((response) => {
    // Assuming the response is in JSON format
    const { count } = response.data;

    // Update the content of the <p> element with the count
    employeeCountElement.textContent = ` ${count}`;
  })
  .catch((error) => {
    console.error(error);
  });

  





  return (
    <div>

    <Nav/>
    
    
    <Sidebar/>
    
   <div>
   <div className="container-fluid page-body-wrapper">
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">Welcome Abir</h3>
                  <h6 className="font-weight-normal mb-0">All systems are running smoothly! You have <span className="text-primary">3 unread alerts!</span></h6>
                </div>
                <div className="col-12 col-xl-4">
                 <div className="justify-content-end d-flex">
                  <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                     <i className="mdi mdi-calendar"></i> Today (10 Jan 2021)
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                      <a className="dropdown-item" href="#">January - March</a>
                      <a className="dropdown-item" href="#">March - June</a>
                      <a className="dropdown-item" href="#">June - August</a>
                      <a className="dropdown-item" href="#">August - November</a>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card tale-bg">
                <div className="card-people mt-auto">
                  <img src="/assets/images/dashboard/people.svg" alt="people"/>
                  <div className="weather-info">
                    <div className="d-flex">
                      <div>
                        <h2 className="mb-0 font-weight-normal"><i className="icon-sun mr-2"></i>31<sup>C</sup></h2>
                      </div>
                      <div className="ml-2">
                        <h4 className="location font-weight-normal">Bangalore</h4>
                        <h6 className="font-weight-normal">India</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin transparent">
              <div className="row">
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4">Nombre des employés</p>
                      <p className="fs-30 mb-2" id="employeeCount"></p>
                   
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <div className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4">Total Bookings</p>
                      <p className="fs-30 mb-2">61344</p>
                      <p>22.00% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <div className="card card-light-blue">
                    <div className="card-body">
                      <p className="mb-4">Number of Meetings</p>
                      <p className="fs-30 mb-2">34040</p>
                      <p>2.00% (30 days)</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 stretch-card transparent">
                  <div className="card card-light-danger">
                    <div className="card-body">
                      <p className="mb-4">Number of Clients</p>
                      <p className="fs-30 mb-2">47033</p>
                      <p>0.22% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>              

        </div>
       
      
      
      </div>
     
    </div>   
   </div>

   <Foot/>

    </div>
  );
}



export default Home;

