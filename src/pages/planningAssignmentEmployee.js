import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function PlanningAssignmentEmp() {

//display cycles into select 
const [Cycles, setCycles] = useState([]);
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
      console.log(data);
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

//display cycles into select 
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



  return (
    <div>
      <Nav />
      <Sidebar />

      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
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
                    <label className="col-sm-3 col-form-label" required>Nom employé</label>
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
                                <tr className="odd">
                                  <td className=" select-checkbox">Incs234</td>
                                  <td className="sorting_1">Car insurance</td>
                                  <td>Business type 1</td><td>Jesse Thomas</td>
                                  <td>$1200</td>

                                  <td><button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-pencil text-primary" data-toggle="modal" data-target="#exampleModal"></i></button>
                                    <button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button>
                                  </td>
                                </tr>
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
              <h5 className="modal-title" id="exampleModalLabel">Modification affectation planning</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form  className="form-sample">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Employé</label>
                      <div className="col-sm-9">
                        <select className="form-control" >  {employees.map((employee) => (
                          <option key={employee.value} value={employee.value}>
                            {employee.nomEmp}
                          </option>
                        ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Département</label>
                      <div className="col-sm-9">
                        <select className="form-control" > 
                         {departments.map((departement) => (
                          <option key={departement.value} value={departement.value}>
                            {departement.nomDept}
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
                      <label className="col-sm-3 col-form-label" >Planning</label>
                      <div className="col-sm-9">
                        <select className="form-control" >
                          {plannings.map((planning) => (
                            <option key={planning.value} value={planning.value}>
                              {planning.libellePlanning}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Cycle</label>
                      <div className="col-sm-9">
                        <select className="form-control" >  {Cycles.map((cycle) => (
                          <option key={cycle.value} value={cycle.value}>
                            {cycle.libelleCycle}
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
                      <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle" >Du</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="time" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Au</label>
                      <div className="col-sm-9">
                      <input id="nbJourCycle" name="nbJourCycle" type="time" className="form-control" />

                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle" >Début</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="time" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="libelleCycle" >Fin</label>
                      <div className="col-sm-9">
                        <input id="libelleCycle" name="libelleCycle" type="time" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle" >Base</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="number" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Fermer
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Ajouter
                  </button>
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>





      <Foot />

    </div>
  );
}



export default PlanningAssignmentEmp;

