import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";
import EditJournalPresence from "../pages/editJournalPresence"

function AttendanceLog() {

  //add new work-journal
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data from the input fields of departments
    //const numEmp = e.target.numEmp.value;
    //const nomEmp = e.target.nomEmp.value;
    const codeEmp = valueEmp;
    const date = selectedDate;
    const heure = selectedHour;
    const entreeSortie = e.target?.entreeSortie?.value;
    //const departement = e.target.departement.value;

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/journal-presence/add-journal', {
        codeEmp, date, heure, entreeSortie
      });

      console.log(response.data);
      setMessage('Journal de présence créé avec succès');
    } catch (err) {
      console.error(err);
      setError('Journal de présence existe déjà');
    }
  };

  //fetch journals
  const [journals, setJournal] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/journal-presence/get-all-journal');
        setJournal(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //delete journals
  const handleDeleteJournal = async (e, idJournalPresence) => {
    e.preventDefault();
    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.delete(`/api/journal-presence/delete/${idJournalPresence}`);
      console.log(idJournalPresence)
      console.log(`Journal with ID ${idJournalPresence} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting journal: ${error.message}`);
    }
  };

  //edit journals
  const handleEditJournal = (journal) => {
    //get id 
    setSelectedJournal(journal);
    console.log("Props passed to the modal:", journal);
  };

  //display employees into select 
  const [valueEmp, setValueEmp] = useState('A');
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/employee/get-all-employees');
        console.log(data);
        setEmployees(data);
        console.log(employees)

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  //display departments into select 
  const [valueDept, setValueDept] = useState('Développement');
  const [valueType, setValueType] = useState('Entree');
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
  //select department
  const handleSelectDept = (e) => {
    const selectedValue = e.target.value;
    setValueDept(selectedValue);
  };

  const handleSelectType = (e) => {
    const selectedValue = e.target.value;
    console.log('Selected type:', selectedValue);
    setValueType(selectedValue);
  };


  //select inputs
  const handleSelectEmploye = (e) => {
    const selectedValue = e.target.value;
    setValueEmp(selectedValue);
  };
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(); // Adjust the format as per your requirement
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
                    <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-hand-stop btn-icon-prepend"></i> Pointage manuelle</button></td>
                    <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" ><i className="ti-reload btn-icon-prepend"></i> Recharger</button></td>
                  </tr>
                </thead>
              </table>
              <br></br>
              <div className="row">
                <label className="col-sm-1 col-form-label">Date:</label>

                <div className="col-md-4">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Du :</label>
                    <div className="col-sm-6">
                      <input className="form-control" placeholder="dd/mm/yyyy" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Au :</label>
                    <div className="col-sm-6">
                      <input className="form-control" placeholder="dd/mm/yyyy" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label" id="margeLabel" htmlFor="nomEmp">Employé :</label>
                    <div className="col-sm-4">
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
                    <label className="col-sm-3 col-form-label" id="depLabel" htmlFor="departement">Département :</label>
                    <div className="col-sm-4">
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
              <br />
              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table de pointage</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ "width": "100%" }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Num employé</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "58px" }} aria-sort="ascending">Nom et prénom</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Département</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Date</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Heure</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Entrée/Sortie</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Action</th>
                                </tr>

                              </thead>
                              <tbody>
                                {journals.map((journal, index) => (
                                  <tr className="odd" key={index}>
                                    <td>{journal.codeEmp}</td>
                                    <td>{journal.nomEmp}</td>
                                    <td>{journal.nomEmp}</td>
                                    <td>{journal.date ? formatDate(journal.date) : ''}</td>
                                    <td>{journal.heure ? `${String(journal.heure).slice(0, 2)}:${String(journal.heure).slice(2)}` : ''}</td>
                                    <td>{journal.entreeSortie}</td>
                                    <td>
                                      <button className="btn btn-inverse-info btn-icon" data-toggle="modal" data-target="#exampleModalUpdatejournal" onClick={() => handleEditJournal(journal)}>
                                        <i className="ti-pencil text-primary"></i>
                                      </button>
                                      <button type="button" onClick={(e) => handleDeleteJournal(e, journal?.idJournalPresence)} className="btn btn-inverse-info btn-icon">
                                        <i className="ti-trash text-primary"></i></button>
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
      </div>


      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Pointage manuelle</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <form className="form-sample" onSubmit={handleSubmit}>
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
                            
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor='date'>Date début</label>
                                <div className="col-sm-9">
                                  <input className="form-control" placeholder="dd/mm/yyyy" type="date" name="date" id="date" value={selectedDate} onChange={handleDateChange} />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label" htmlFor='heure'>Heure</label>
                                <div className="col-sm-9">
                                  <input className="form-control" placeholder="hh/mm" type="time" value={selectedHour} onChange={handleHourChange} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="type">Type</label>
                              <div className="col-sm-9">
                              <select className="form-control" name="type" id="type" value={valueType} onChange={handleSelectType}>
                                  <option value="entree">Entree</option>
                                  <option value="sortie">Sortie</option>
                                </select>
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
              </div>

            </div>
          </div>
        </div>

      </div>


      <div>
        <div className="modal fade" id="exampleModalAdd" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ajouter une régle de présence </h5>
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
                                    <option>Masculin</option>
                                    <option>Féminin</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group row">
                                <button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-pencil text-primary"></i></button>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Date début</label>
                                <div className="col-sm-9">
                                  <input className="form-control" placeholder="dd/mm/yyyy" type="date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Heure</label>
                                <div className="col-sm-9">
                                  <input className="form-control" placeholder="hh/mm" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div >
                                <div className="form-check form-check-flat form-check-primary">
                                  <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />
                                    Entrée
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div >
                                <div className="form-check form-check-flat form-check-primary">
                                  <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />
                                    Sortie
                                  </label>
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
                <button type="button" className="btn btn-primary">Valider</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {selectedJournal && (
        <EditJournalPresence theJournal={selectedJournal} />
      )}


      <Foot />

    </div>
  );

}


export default AttendanceLog;

