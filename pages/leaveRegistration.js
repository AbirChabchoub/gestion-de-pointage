import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function LeaveRegistration() {

  //fetch employees data
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/conge/get-all-conges');
        console.log(data);
        setLeaves(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //delete cycles 
  const handleDeleteCycles = async (e, codeCycle) => {
    e.preventDefault();

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.delete(`/api/cycle-travail/delete/${codeCycle}`);      // Handle the response data or any UI updates as needed
      console.log(`Department with ID ${codeCycle} deleted successfully.`);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error(`Error deleting department: ${error.message}`);
    }
  };

  //add new work-cycle
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data from the input fields of departments
    const dateEcriture = e.target.dateEcriture.value;
    const dateConge = e.target.dateConge.value;
    const motif = e.target.motif.value;
    const raison = e.target.raison.value;
    const observation = e.target.observation.value;


    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/conge/add-conge', {
        observation, raison, motif, dateConge, dateEcriture
      });

      console.log(response.data);
      setMessage('Congé créé avec succès');
    } catch (err) {
      console.error(err);
      setError('Le congé existe déjà');
    }
  };

  //display cycles into select 

  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/employee/get-all-employees');
        console.log(data);
        setOptions(data);

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
              <table>
                <thead>
                  <tr>
                    <th> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></th>
                    <th> <button type="button" className="btn btn-outline-primary btn-icon-text marge" ><i className="ti-printer btn-icon-prepend"></i> Imprimer</button></th>
                    <th> <button type="button" className="btn btn-outline-info btn-icon-text marge">Synchroniser base pointeuse<i className="ti-reload btn-icon-append"></i> </button></th>
                    <th> <button type="button" className="btn btn-outline-info btn-icon-text marge"> Transféré employé vers pointeuse<i className="ti-upload btn-icon-append"></i></button> </th>
                  </tr>
                </thead>
              </table>
              <br />
              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table d'inscription des congés</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ "width": "100%" }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Date écriture</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Employé</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Date congé</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Motif</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Raison</th>

                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Observation</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Action</th>

                                </tr>

                              </thead>
                              <tbody>
                                {
                                  leaves.map((leave, index) => {
                                    return <tr className="odd" key={index}>


                                      <td>{leave.dateEcriture}</td>

                                      <td>{leave.dateConge}</td>
                                      <td>{leave.motif}</td>
                                      <td>{leave.raison}</td>
                                      <td>{leave.observation}</td>




                                      <td><button className="btn btn-inverse-info btn-icon" data-toggle="modal" data-target="#exampleModalUpdateDep"><i className="ti-pencil text-primary"></i></button>
                                        <button type="button" onClick={(e) => handleDeleteCycles(e, leave?.idConge)} className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button>
                                      </td>
                                    </tr>
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
              <h5 className="modal-title" id="exampleModalLabel">Fiche congé</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <form className="form-sample">

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Employé</label>
                              <div className="col-sm-9">
                                <select className="form-control">
                                  {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                      {option.nomEmp}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Motif</label>
                              <div className="col-sm-9">
                                <select className="form-control">
                                  <option>Maladie</option>
                                  <option>Accident de travail</option>
                                  <option>Congé de travail</option>
                                  <option>Jour férié chomé non payé</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Date début</label>
                              <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Date fin</label>
                              <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" required>Raison</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" required>Observation</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="button" className="btn btn-primary">Ajouter</button>
            </div>
          </div>
        </div>
      </div>





      <Foot />

    </div>


  );
}



export default LeaveRegistration;

