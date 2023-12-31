import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";
import EditWorkCycle from "../pages/editWorkCycle";

function WorkCycle() {

//add new work-cycle
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the form data from the input fields of departments
  const codeCycle = e.target.codeCycle.value;
  const libelleCycle = e.target.libelleCycle.value;
  const nbJourCycle = e.target.nbJourCycle.value;


  try {
    const instance = axios.create({ baseURL: 'http://localhost:8080' });
    const response = await instance.post('/api/cycle-travail/add-cycle', {
      codeCycle, libelleCycle, nbJourCycle
    });

    console.log(response.data);
    setMessage('Cycle de travail créé avec succès');
  } catch (err) {
    console.error(err);
    setError('Le cycle existe déjà');
  }
};

//fetch cycles
  const [workCycles, setWorkCycles] = useState([]);
  const [selectedCycle, setSelectedCycle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/cycle-travail/get-all-cycles');
        setWorkCycles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

//delete cycles
  const handleDeleteCycles = async (e, idCycle) => {
    e.preventDefault();
    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.delete(`/api/cycle-travail/delete/${idCycle}`);
      console.log(idCycle)
      console.log(`Cycle with ID ${idCycle} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting cycle: ${error.message}`);
    }
  };
//edit cycles
  const handleEditCycle = (cycle) => {
    //get id 
    setSelectedCycle(cycle);
    console.log("Props passed to the modal:", cycle);
  };

  //display presence rules into select 
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/regle-presence/get-all-regle-presence');
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
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <table>
              <thead>
                <tr>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-icon-text marge"
                      data-toggle="modal"
                      data-target="#exampleModal">
                      <i className="ti-plus btn-icon-prepend"></i> Ajouter
                    </button>
                  </td>
                </tr>
              </thead>
            </table>
            <br />
            <div className="row">
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Table de cycle de travail</p>
                    <div className="row">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table id="example" className="display expandable-table" style={{ "width": "100%" }}>
                            <thead>
                              <tr role="row">
                                <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Code</th>
                                <th
                                  className="sorting_asc"
                                  tabIndex="0"
                                  aria-controls="example"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Product: activate to sort column descending"
                                  style={{ "width": "64px" }}
                                  aria-sort="ascending">Libellé</th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="example"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Business type: activate to sort column ascending"
                                  style={{ "width": "58px" }}
                                >
                                  Nombre de jours
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="example"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Business type: activate to sort column ascending"
                                  style={{ "width": "58px" }}
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {workCycles.map((cycle, index) => (
                                <tr className="odd" key={index}>
                                  <td>{cycle.codeCycle}</td>
                                  <td>{cycle.libelleCycle}</td>
                                  <td>{cycle.nbJourCycle}</td>
                                  <td>
                                    <button
                                      className="btn btn-inverse-info btn-icon"
                                      data-toggle="modal"
                                      data-target="#exampleModalUpdateCycle"
                                      onClick={() => handleEditCycle(cycle)}>
                                      <i className="ti-pencil text-primary"></i>
                                    </button>
                                    <button type="button" onClick={(e) => handleDeleteCycles(e, cycle?.idCycle)}  className="btn btn-inverse-info btn-icon"> <i className="ti-trash text-primary"></i>
                                    </button>
                                  </td>
                                </tr>
                              ))}
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

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Fiche Cycle de travail</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="form-sample">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="codeCycle">Code cycle</label>
                      <div className="col-sm-9">
                        <input id="codeCycle" name="codeCycle" type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="libelleCycle" >Libellé</label>
                      <div className="col-sm-9">
                        <input id="libelleCycle" name="libelleCycle" type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle" >Nombre de jours de cycle</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="number" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="libelleCycle" >Libellé</label>
                      <div className="col-sm-9">
                        <input id="libelleCycle" name="libelleCycle" type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle" >Jour</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Horaire</label>
                      <div className="col-sm-9">
                        <select className="form-control" >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.nomRegle}
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
              {message && <div className="alert alert-success">{message}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
          </div>
        </div>
      </div>

      
      <div className="modal fade" id="exampleModalUpdateCycle" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
     
        {selectedCycle && (
          <EditWorkCycle theWorkCycle={selectedCycle} />
        )}
      </div>

      <Foot />
    </div>
  );
}

export default WorkCycle;
