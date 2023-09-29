import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
function DepartementSettings() {
  // fetch departments data
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

  //fetch employees data
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

  //delete department
  const handleDelete = async (e, departmentId) => {
    e.preventDefault();

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.delete(`/api/departement/delete/${departmentId}`);      // Handle the response data or any UI updates as needed
      console.log(`Department with ID ${departmentId} deleted successfully.`);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error(`Error deleting department: ${error.message}`);
    }
  };

  const handleUpdate = async (e, departmentId) => {
    e.preventDefault();

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.delete(`/api/departement/delete/${departmentId}`);      // Handle the response data or any UI updates as needed
      console.log(`Department with ID ${departmentId} deleted successfully.`);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error(`Error deleting department: ${error.message}`);
    }
  };

  //delete employees 
  const handleDeleteEmployees = async (e, codeEmp) => {
    e.preventDefault();

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.delete(`/api/employee/delete/${codeEmp}`);      // Handle the response data or any UI updates as needed
      console.log(`Department with ID ${codeEmp} deleted successfully.`);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error(`Error deleting department: ${error.message}`);
    }
  };
  // add new department
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data from the input fields of departments
    const nomDept = e.target.nomDept.value;
    const descriptionDept = e.target.descriptionDept.value;

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/departement/add-departement', {
        nomDept,
        descriptionDept,
      });

      console.log(response.data);
      setMessage('Département créé avec succès');
    } catch (err) {
      console.error(err);
      setError('Le département existe déjà');
    }
  };
  // add new employee
  const [messageEmp, setMessageEmp] = useState("");
  const [errorEmp, setErrorEmp] = useState("");
  const handleSubmitEmployee = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Get the form data from the input fields
    const nomEmp = e.target.nomEmp.value;
    const prenomEmp = e.target.prenomEmp.value;
    const sexeEmp = e.target.sexeEmp.value;
    const dateInscrit = e.target.dateInscrit.value;
    const numIdEmp = e.target.numIdEmp.value;
    const numEmp = e.target.numEmp.value;
    const numCarte = e.target.numCarte.value;
    const nationalite = e.target.nationalite.value;
    const numTelEmp = e.target.numTelEmp.value;
    // const privilege = e.target.privilege.value;
    const remarqueEmp = e.target.remarqueEmp.value;
    const CIN = e.target.CIN.value;
    const numCNSS = e.target.numCNSS.value;
    const ECH = e.target.ECH.value;
    const CAT = e.target.CAT.value;
    const nbEnfant = e.target.nbEnfant.value;
    //const adresseEmp = e.target.adresseEmp.value;

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/employee/add-employee', {
        nomEmp,
        prenomEmp, dateInscrit, numIdEmp, numEmp, numCarte, nationalite, numTelEmp, sexeEmp, remarqueEmp, CIN, numCNSS, ECH, CAT, nbEnfant
      });

      console.log(response.data);
      setMessageEmp('Employé ajouté avec succès');
    } catch (err) {
      console.error(err);
      setErrorEmp("L'employé existe déjà");
    }
  };

  //display depts into select 
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/departement/get-all-departments');
        console.log(data);
        setOptions(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);



  const [valuePrivilege, setValuePrivilege] = useState('Utilisateur');
  const [valueDept, setValueDept] = useState('Développement');
  const [valueSexe, setValueSexe] = useState('Masculin');
  const [valueTitre, setValueTitre] = useState('Responsable');

  const handleSelectPrivilege = (e) => {
    const selectedValue = e.target.value;
    console.log('Selected Privilege:', selectedValue);
    setValuePrivilege(selectedValue);
  };

  const handleSelectDept = (e) => {
    const selectedValue = e.target.value;
    setValueDept(selectedValue);
  };
  const handleSelectSexe = (e) => {
    const selectedValue = e.target.value;
    setValueSexe(selectedValue);
  };

  const handleSelectTitre = (e) => {
    const selectedValue = e.target.value;
    setValueTitre(selectedValue);
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
                    <th> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></th>
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
                      <p className="card-title">Paramétres des départements</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ 'width': '100%' }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "170px" }}>Nom</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Description</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Action</th>

                                </tr>
                              </thead>
                              <tbody>

                                {
                                  departments.map((department, index) => {
                                    return <tr className="odd" key={index}>


                                      <td>{department.nomDept}</td>

                                      <td>{department.descriptionDept}</td>



                                      <td><button className="btn btn-inverse-info btn-icon" data-toggle="modal" data-target="#exampleModalUpdateDep"><i className="ti-pencil text-primary"></i></button>
                                        <button type="button" onClick={(e) => handleDelete(e, department?.idDept)} className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button>
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

              <table>
                <thead>
                  <tr>
                    <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModalEmploye"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>

                  </tr>
                </thead>
              </table>
              <br></br>
              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Liste des employés du département</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ 'width': '100%' }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Code</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Nom</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Prénom</th>

                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Sexe</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Policy holder: activate to sort column ascending" style={{ "width": "43px" }}>Date inscription</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Premium: activate to sort column ascending" style={{ "width": "59px" }}>Num ID Employé</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={{ "width": "43px" }}>Num employé</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Num carte</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={{ "width": "43px" }}>Nationalité</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Téléphone</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Titre</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Privilége</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Date naissance</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Date d'embauche</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Salaire</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Adresse</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Remarque</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Département</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>CIN</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Num CNSS</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>ECH</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>CAT</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Nombre d'enfant</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Action</th>

                                </tr>
                              </thead>
                              <tbody>


                                {
                                  employees.map((employee, index) => {
                                    return <tr className="odd" key={index}>


                                      <td className=" select-checkbox">{employee.codeEmp}</td>

                                      <td className="sorting_1">{employee.nomEmp}</td>
                                      <td>{employee.prenomEmp}</td>

                                      <td>{employee.sexeEmp}</td>
                                      <td>{employee.dateInscrit}</td>

                                      <td>{employee.numIdEmp}</td>
                                      <td>{employee.numEmp}</td>

                                      <td>{employee.numCarte}</td>
                                      <td>{employee.nationalite}</td>
                                      <td>{employee.numTelEmp}</td>
                                      <td>{valueTitre}</td>
                                      <td>{valuePrivilege}</td>
                                      <td>{employee.dateNaissance}</td>

                                      <td>{employee.dateEmbauche}</td>
                                      <td>{employee.salaireEmp}</td>

                                      <td>{employee.adresseEmp}</td>

                                      <td>{employee.remarqueEmp}</td>
                                      <td>{valueDept}</td>

                                      <td>{employee.CIN}</td>
                                      <td>{employee.numCNSS}</td>

                                      <td>{employee.ECH}</td>
                                      <td>{employee.CAT}</td>

                                      <td>{employee.nbEnfant}</td>

                                      <td><button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-pencil text-primary"></i></button>
                                        <button type="button" onClick={(e) => handleDeleteEmployees(e, employee?.codeEmp)} className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button>
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


      <div className="modal fade" id="exampleModalEmploye" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Fiche Employé</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitEmployee} className="form-sample">
                <div className="row">
                  <div className="col-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="nomEmp">Nom</label>
                              <div className="col-sm-9">
                                <input id="nomEmp" name="nomEmp" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="prenomEmp" >Prénom</label>
                              <div className="col-sm-9">
                                <input id="prenomEmp" name="prenomEmp" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="sexeEmp">Sexe</label>
                              <div className="col-sm-9">
                                <select className="form-control" name="sexeEmp" id='sexeEmp' value={valueSexe} onChange={handleSelectSexe}>
                                  <option value="Masculin">Masculin</option>
                                  <option value="Feminin">Féminin</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="dateInscrit">Date Inscription</label>
                              <div className="col-sm-9">
                                <input id="dateInscrit" name="dateInscrit" className="form-control" placeholder="dd/mm/yyyy" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numIdEmp">N ID</label>
                              <div className="col-sm-9">
                                <input id="numIdEmp" name="numIdEmp" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numEmp">N Employé</label>
                              <div className="col-sm-9">
                                <input id="numEmp" name="numEmp" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numCarte">N Carte</label>
                              <div className="col-sm-9">
                                <input id="numCarte" name="numCarte" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="nationalite">Nationalité</label>
                              <div className="col-sm-9">
                                <input id="nationalite" name="nationalite" type="texte" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numTelEmp">Téléphone</label>
                              <div className="col-sm-9">
                                <input id="numTelEmp" name="numTelEmp" type="tel" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="titre">Titre</label>
                              <div className="col-sm-9">
                                <select className="form-control" name="titre" id="titre" value={valueTitre} onChange={handleSelectTitre}>
                                  <option value="Responsable">Responsable</option>
                                  <option value="Cadre">Cadre</option>
                                  <option value="Ouvrier">Ouvrier</option>
                                  <option value="Technicien">Technicien</option>
                                  <option value="Magasinier">Magasinier</option>
                                  <option value="Etude">Etude</option>
                                  <option value="Secretaire">Sécrétaire</option>
                                  <option value="Commercial">Commercial</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="privilege" >Privilége</label>
                              <div className="col-sm-9">
                                <select className="form-control" name="privilege" id="privilege" value={valuePrivilege} onChange={handleSelectPrivilege}>
                                  <option value="Administrateur">Administrateur</option>
                                  <option value="Utilisateur">Utilisateur</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="dateNaissance">Date Naissance</label>
                              <div className="col-sm-9">
                                <input id="dateNaissance" name="dateNaissance" className="form-control" placeholder="dd/mm/yyyy" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="dateEmbauche">Date d'embauche</label>
                              <div className="col-sm-9">
                                <input id="dateEmbauche" name="dateEmbauche" className="form-control" placeholder="dd/mm/yyyy" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="salaireEmp">Salaire</label>
                              <div className="col-sm-9">
                                <input id="salaireEmp" name="salaireEmp" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="adresseEmp">Adresse </label>
                              <div className="col-sm-9">
                                <input id="adresseEmp" name="adresseEmp" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="remarqueEmp">Remarque </label>
                              <div className="col-sm-9">
                                <input id="remarqueEmp" name="remarqueEmp" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="departement">Département</label>
                              <div className="col-sm-9">
                                <select className="form-control" value={valueDept} onChange={handleSelectDept}>
                                  {options.map((option) => (
                                    <option key={option.idDept} value={option.value}>
                                      {option.nomDept}
                                    </option>))}
                                </select>
                              </div>

                            </div>

                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="CIN">CIN </label>
                              <div className="col-sm-9">
                                <input id="CIN" name="CIN" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numCNSS">N CNSS </label>
                              <div className="col-sm-9">
                                <input id="numCNSS" name="numCNSS" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="ECH">Echellon </label>
                              <div className="col-sm-9">
                                <input id="ECH" name="ECH" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>

                        </div>



                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="CAT">Catégorie </label>
                              <div className="col-sm-9">
                                <input id="CAT" name="CAT" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="nbEnfant">Nombre d'enfant </label>
                              <div className="col-sm-9">
                                <input id="nbEnfant" name="nbEnfant" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">



                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                          <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
              {messageEmp && <div className="alert alert-success">{messageEmp}</div>}
              {errorEmp && <div className="alert alert-danger">{errorEmp}</div>}
            </div>

          </div>
        </div>
      </div>




      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Fiche département</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="form-sample">


                < div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nomDept">Nom</label>
                      <div className="col-sm-9">
                        <input id="nomDept" name="nomDept" type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="descriptionDept" >Déscription</label>
                      <div className="col-sm-9">
                        <input id="descriptionDept" name="descriptionDept" type="text" className="form-control" />
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


      <div className="modal fade" id="exampleModalUpdateDep" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modifier un département</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div >
                <div >
                  <div >
                    <div >
                      <div className="row">
                        <div className="col-12 grid-margin">
                          <div className="card">
                            <div className="card-body">
                              <form className="form-sample">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Nom département</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Déscription département</label>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="button" className="btn btn-primary">Modifier</button>
            </div>
          </div>
        </div>
      </div>



      <Foot />

    </div>
  );
}



export default DepartementSettings;