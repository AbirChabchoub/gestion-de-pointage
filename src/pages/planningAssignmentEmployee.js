import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";

function PlanningAssignmentEmp() {

  //display cycles into select 
  const [cycles, setCycles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/cycle-travail/get-all-cycles');
        console.log(data);
        setCycles(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //display employees into select 
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/employee/get-all-employees');
        console.log(data)
        setEmployees(data);      

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //display departments into select 
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/departement/get-all-departments');
        console.log(data);
        setDepartments(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //display planning into select 
  const [plannings, setPlannings] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/planning/get-all-plannings');
        console.log(data);
        setPlannings(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //fetch employees data
  const [employeesPlan, setEmployeesPlan] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/planning-employe/get-all');
        console.log(data);
        setEmployeesPlan(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //add new employee-departement
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Get the form data from the input fields of departments
    const employee = valueEmp;
    const departement = valueDept;
    const planning = valuePlanning;
    const cycle = valueCycle;
    const dateDeb = e.target?.dateDeb?.value;
    const dateFin = e.target?.dateFin?.value;
    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/planning-employe/add', {
        employee, planning,departement, cycle,dateDeb,dateFin
        
      });
      console.log(employee)
      console.log(response.data);
      setMessage('Employé Assigné avec succès');
    } catch (err) {
      console.error(err);
      setError("L'assignement existe déjà");
    }
  };

  //select inputs
  const [valueEmp, setValueEmp] = useState('');
  const [valueDept, setValueDept] = useState('');
  const [valuePlanning, setValuePlanning] = useState('');
  const [valueCycle, setValueCycle] = useState('');

  const handleSelectEmploye = (e) => {
    const selectedValue = e.target.value;
    setValueEmp(selectedValue);
    console.log("hhhhh",valueEmp)
  };
  const handleSelectDept = (e) => {
    const selectedValue = e.target.value;
    setValueDept(selectedValue);
  };
  const handleSelectPlanning = (e) => {
    const selectedValue = e.target.value;
    setValuePlanning(selectedValue);
  };
  const handleSelectCycle = (e) => {
    const selectedValue = e.target.value;
    setValueCycle(selectedValue);
  };

  //delete item
  const handleDeleteEmpDept = async (e, idPlanEmp) => {
    e.preventDefault();

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.delete(`/api/planning-employe/delete/${idPlanEmp}`);      // Handle the response data or any UI updates as needed
      console.log(`Department with ID ${idPlanEmp} deleted successfully.`);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error(`Error deleting department: ${error.message}`);
    }
  };

  return (
    <div>
      <Nav />
      <Sidebar />

      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <table>
                <thead>
                  <tr>
                    <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
                  </tr>
                </thead>
              </table>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Num employé</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Nom employé</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table d'affectation des plannings aux employés</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ "width": "100%" }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Num employé</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Nom et prénom</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Département</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Code planning</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Planning</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Action</th>
                                </tr>

                              </thead>
                              <tbody>
                                {employeesPlan.map((employeePlan, index) => {
                                 

                                
                                  return (

                                    <tr className="odd" key={index}>
                                    
                                     <td>{employeePlan.dateDeb}</td>
                                     <td>{employeePlan.dateFin}</td>


                                      <td>
                                        <button className="btn btn-inverse-info btn-icon" data-toggle="modal" data-target="#exampleModalUpdateDep"><i className="ti-pencil text-primary"></i></button>
                                        <button type="button" className="btn btn-inverse-info btn-icon" onClick={(e) => handleDeleteEmpDept(e, employeePlan?.idPlanEmp)}><i className="ti-trash text-primary"></i></button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
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
      </div>



      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Affectation planning à employé</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="form-sample" onSubmit={handleSubmit} >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nomEmp">Employé</label>
                      <div className="col-sm-9">
                        <select className="form-control" value={valueEmp} onChange={handleSelectEmploye}>
                          {employees.map((employee) => (
                            <option key={employee.codeEmp} value={employee.value} >
                              {employee.nomEmp}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="departement">Département</label>
                      <div className="col-sm-9">
                        <select className="form-control" value={valueDept} onChange={handleSelectDept}>
                          {departments.map((option) => (
                            <option key={option.idDept} value={option.value}>
                              {option.nomDept}
                            </option>))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="libellePlanning">Planning</label>
                      <div className="col-sm-9">
                        <select className="form-control" id="libellePlanning" name="libellePlanning" value={valuePlanning} onChange={handleSelectPlanning}>
                          {plannings.map((planning) => (
                            <option key={planning.idPlanning} value={planning.value}>
                              {planning.libellePlanning}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="libelleCycle" >Cycle</label>
                      <div className="col-sm-9">
                        <select className="form-control" id="libelleCycle" name="libelleCycle" value={valueCycle} onChange={handleSelectCycle}>
                          {cycles.map((cycle) => (
                            <option key={cycle.idCycle} value={cycle.value}>
                              {cycle.codeCycle}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="debut" >Du</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="date" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="fin" >Au</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="date" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                  <button type="submit" className="btn btn-primary">Ajouter</button>
                </div>
              </form>
              {message && <div className="alert alert-success">{message}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
          </div>
        </div>
      </div>





      <Foot />

    </div>
  );
}



export default PlanningAssignmentEmp;

