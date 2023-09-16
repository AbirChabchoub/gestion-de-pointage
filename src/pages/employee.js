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
    const { data } =  await instance.delete(`/api/employee/delete/${codeEmp}`);      // Handle the response data or any UI updates as needed
    console.log(`Department with ID ${codeEmp} deleted successfully.`);
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
                            <table id="example" className="display expandable-table" style={{"width": "100%"}}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{"width": "70px"}}>Code</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px"}} aria-sort="ascending">Nom et prénom</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "51px"}}>Sexe</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Policy holder: activate to sort column ascending" style={{"width": "43px"}}>Date inscription</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Premium: activate to sort column ascending" style={{"width": "49px"}}>Num ID Employé</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={{"width": "43px"}}>Num employé</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Num carte</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={{"width": "43px"}}>Nationalité</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Tél</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Titre</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Privilége</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Date naissance</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Date d'embauche</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Salaire</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Adresse</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Remarque</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending"style={{"width": "64px"}}>Photo</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Département</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>CIN</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Num CNSS</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}} >ECH</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>CAT</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Nombre d'enfant</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}} >Action</th>

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
                                          <button type="button"  onClick={(e) => handleDeleteEmployees(e, employee?.codeEmp)} className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button>
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




      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Fiche Employé</h5>
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
                                      <label className="col-sm-3 col-form-label">Code</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Nom et prénom</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Sexe</label>
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
                                      <label className="col-sm-3 col-form-label">Date Inscription</label>
                                      <div className="col-sm-9">
                                        <input className="form-control" placeholder="dd/mm/yyyy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">N ID</label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>N Employé</label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Membership</label>
                                      <div className="col-sm-4">
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" />
                                            Free
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-sm-5">
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2" />
                                            Professional
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>N Carte</label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Nationalité</label>
                                      <div className="col-sm-9">
                                        <input type="texte" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Téléphone</label>
                                      <div className="col-sm-9">
                                        <input type="tel" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Titre</label>
                                      <div className="col-sm-9">
                                        <select className="form-control">
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
                                        <select className="form-control">
                                          <option>Administrateur</option>
                                          <option>Utilisateur</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Date Naissance</label>
                                      <div className="col-sm-9">
                                        <input className="form-control" placeholder="dd/mm/yyyy" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Date d'embauche</label>
                                      <div className="col-sm-9">
                                        <input className="form-control" placeholder="dd/mm/yyyy" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Salaire</label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Addresse </label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Remarque </label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Département</label>
                                      <div className="col-sm-9">
                                        <select className="form-control">
                                          <option>Service aprés vente</option>
                                          <option>Commercial</option>
                                          <option>Technique</option>
                                          <option>Administration</option>
                                          <option>Etude</option>
                                        </select>
                                      </div>

                                    </div>

                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">CIN </label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">N CNSS </label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Echellon </label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                </div>



                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Catégorie </label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Nombre d'enfant </label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
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
              <button type="button" className="btn btn-primary">Ajouter</button>
            </div>
          </div>
        </div>
      </div>

      <Foot />

    </div>
  );
}



export default Employee;

