import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function Employee() {

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

  //add new employee
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data from the input fields of departments
    const nomEmp = e.target.nomEmp.value;
    const prenomEmp = e.target.prenomEmp.value;
    const sexeEmp = e.target.sexeEmp.value;
    const dateInscrit = e.target.dateInscrit.value;
    const numIdEmp = e.target.numIdEmp.value;
    const numEmp = e.target.numEmp.value;
    const numCarte = e.target.numCarte.value;
    const nationalite = e.target.nationalite.value;
    const numTelEmp = e.target.numTelEmp.value;
    const dateNaissance = e.target.dateNaissance.value;
    const dateEmbauche = e.target.dateEmbauche.value;
    const salaireEmp = e.target.salaireEmp.value;
    const adresseEmp = e.target.adresseEmp.value;
    const remarqueEmp = e.target.remarqueEmp.value;
    const CIN = e.target.CIN.value;
    const numCNSS = e.target.numCNSS.value;
    const ECH = e.target.ECH.value;
    const CAT = e.target.CAT.value;
    const nbEnfant = e.target.nbEnfant.value;
    const email = e.target.email.value;
    const mdp = e.target.mdp.value;
    const departement = e.target.departement.value;




    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/employee/add-employee', {
        nomEmp, prenomEmp, sexeEmp, dateInscrit, numIdEmp, numEmp, numCarte, nationalite, numTelEmp, dateNaissance, dateEmbauche, salaireEmp,
        adresseEmp, remarqueEmp, CIN, numCNSS, ECH, CAT, nbEnfant, email, mdp,departement
      });

      console.log(response.data);
      setMessage('Employé créé avec succès');
    } catch (err) {
      console.error(err);
      setError("l'employé existe déjà");
    }
  };


  //display cycles into select 
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

  const[value,setValue]=useState('');
  function handleSelect(event){
    setValue(event.target.value)
  }
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
                      <p className="card-title">Table des employés</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ "width": "100%" }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Code</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Nom et prénom</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "51px" }}>Sexe</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Policy holder: activate to sort column ascending" style={{ "width": "43px" }}>Date inscription</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Premium: activate to sort column ascending" style={{ "width": "49px" }}>Num ID Employé</th>
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
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Photo</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Département</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>CIN</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Num CNSS</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }} >ECH</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>CAT</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }}>Nombre d'enfant</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px" }} >Action</th>

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

                                      <td>{employee.privilege}</td>
                                      <td>{employee.dateNaissance}</td>

                                      <td>{employee.dateEmbauche}</td>
                                      <td>{employee.salaireEmp}</td>

                                      <td>{employee.adresseEmp}</td>

                                      <td>{employee.remarqueEmp}</td>
                                      <td>{employee.photo}</td>

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




      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Fiche Employé</h5>
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
                              <label className="col-sm-3 col-form-label" htmlFor="nomEmp">Nom </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" id="nomEmp" name="nomEmp" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="prenomEmp"> Prénom</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" id="prenomEmp" name="prenomEmp" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="sexeEmp">Sexe</label>
                              <div className="col-sm-9">
                                <select className="form-control"  onChange={handleSelect}>
                                  <option>Masculin</option>
                                  <option>Féminin</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="dateInscrit">Date Inscription</label>
                              <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" id="dateInscrit" name="dateInscrit" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numIdEmp">N ID</label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" id="numIdEmp" name="numIdEmp" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numEmp">N Employé</label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" id="numEmp" name="numEmp" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numCarte">N Carte</label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" id="numCarte" name="numCarte" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="nationalite">Nationalité</label>
                              <div className="col-sm-9">
                                <input type="texte" className="form-control" id="nationalite" name="nationalite" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numTelEmp">Téléphone</label>
                              <div className="col-sm-9">
                                <input type="tel" className="form-control" id="numTelEmp" name="numTelEmp" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label"  >Titre</label>
                              <div className="col-sm-9">
                                <select className="form-control" onChange={handleSelect}>
                                  <option>Responsable</option>
                                  <option>Cadre</option>
                                  <option>Ouvrier</option>
                                  <option>Technicien</option>
                                  <option>Magasinier</option>
                                  <option>Etude</option>
                                  <option>Sécrétaire</option>
                                  <option>Commercial</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Privilége</label>
                              <div className="col-sm-9">
                                <select className="form-control" onChange={handleSelect}>
                                  <option>Administrateur</option>
                                  <option>Utilisateur</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="dateNaissance">Date Naissance</label>
                              <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" id="dateNaissance" name="dateNaissance" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="dateEmbauche">Date d'embauche</label>
                              <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" id="dateEmbauche" name="dateEmbauche" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="salaireEmp">Salaire</label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" id="salaireEmp" name="salaireEmp" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="adresseEmp">Addresse </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" id="adresseEmp" name="adresseEmp" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="remarqueEmp">Remarque </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" id="remarqueEmp" name="remarqueEmp" />
                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="departement">Département</label>
                              <div className="col-sm-9">
                                <select className="form-control" onChange={handleSelect}>
                                {options.map((option) => (
                          <option key={option.idDept} value={option.value}>
                            {option.nomDept}
                          </option>  ))}
                                </select>
                              </div>

                            </div>

                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="CIN">CIN </label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" id="CIN" name="CIN" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="numCNSS">N CNSS </label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" id="numCNSS" name="numCNSS" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="ECH">Echellon </label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" id="ECH" name="ECH" />
                              </div>
                            </div>
                          </div>

                        </div>



                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="CAT">Catégorie </label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" id="CAT" name="CAT" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="nbEnfant">Nombre d'enfant </label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" id="nbEnfant" name="nbEnfant" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="email">Email </label>
                              <div className="col-sm-9">
                                <input type="email" className="form-control" id="email" name="email" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="mdp">Mot de passe </label>
                              <div className="col-sm-9">
                                <input type="password" className="form-control" id="mdp" name="mdp" />
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

      <Foot />

    </div>
  );
}



export default Employee;

