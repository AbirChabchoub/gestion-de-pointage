import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function Home() {


  //fetch employees number
  const [employeeCount, setEmployeeCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/employee/quantity');
        console.log(data);
        setEmployeeCount(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

//fetch departments number
const [departmentsCount, setDepartmentsCount] = useState(0);
useEffect(() => {
  const fetchData = async () => {
    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.get('/api/departement/quantity');
      console.log(data);
      setDepartmentsCount(data);

    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);

//fetch cycles number
const [cyclesCount, setCyclesCount] = useState(0);
useEffect(() => {
  const fetchData = async () => {
    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.get('/api/cycle-travail/quantity');
      console.log(data);
      setCyclesCount(data);

    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);

//fetch plannings number
const [planningsCount, setPlanningsCount] = useState(0);
useEffect(() => {
  const fetchData = async () => {
    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.get('/api/planning/quantity');
      console.log(data);
      setPlanningsCount(data);

    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);



  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${'Tunisia'}&appid=${'1aa318382fb1176e3fabfcc22e563c7f'}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract temperature from the received data
        const fetchedTemperature = data.main.temp;
        // Convert temperature from Kelvin to Celsius
        const temperatureCelsius = fetchedTemperature - 273.15;

        // Update the temperature state with the fetched temperature in Celsius
        setTemperature(temperatureCelsius.toFixed(1)); // Round temperature to one decimal place
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <div>
      <Nav />
      <Sidebar />

      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="row">
                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                      <h3 className="font-weight-bold">Bienvenue Abir</h3>
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                  <div className="card tale-bg">
                    <div className="card-people mt-auto">
                      <img src="/assets/images/dashboard/point.png" alt="people" />
                      <div className="weather-info">
                        <div className="d-flex">
                          <div>
                          <h2 className="mb-0 font-weight-normal">
      <i className="icon-sun mr-2"></i>
      {temperature !== null ? (
        <>
          {temperature}
          <sup>C</sup>
        </>
      ) : (
        'Loading...' // Show a loading message until the temperature data is fetched
      )}
    </h2>
                          </div>
                          <div className="ml-2">
                            <h4 className="location font-weight-normal">Tunisie</h4>
                            <h6 className="font-weight-normal">Sfax</h6>
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
                              <p className="fs-30 mb-2" >{employeeCount}</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 stretch-card transparent">
                      <div className="card card-dark-blue">
                        <div className="card-body">
                          <p className="mb-4">Nombre des départements</p>
                          <p className="fs-30 mb-2">{departmentsCount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                      <div className="card card-light-blue">
                        <div className="card-body">
                          <p className="mb-4">Nombre de cyles</p>
                          <p className="fs-30 mb-2">{cyclesCount}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 stretch-card transparent">
                      <div className="card card-light-danger">
                        <div className="card-body">
                          <p className="mb-4">Nombre de planning</p>
                          <p className="fs-30 mb-2">{planningsCount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-md-6 mb-4 stretch-card transparent">
                      <div className="card card-tale">
                        <div className="card-body">
                          <p className="mb-4">Nombre des employés</p>                      
                              <p className="fs-30 mb-2" >{employeeCount}</p>

                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 stretch-card transparent">
                      <div className="card card-dark-blue">
                        <div className="card-body">
                          <p className="mb-4">Nombre des départements</p>
                          <p className="fs-30 mb-2">{departmentsCount}</p>
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

      <Foot />

    </div>
  );





}



export default Home;

