import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";
import DepartementSettingsTable from "../components/departmentSettingsTable";
import { Link, useNavigate } from "react-router-dom";
function DepartementSettings() {
  return (

    <div>

      <Nav />
      <Sidebar />

      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge">Synchroniser base pointeuse<i className="ti-printer btn-icon-append"></i> </button></td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge"> Transféré employé vers pointeuse<i className="ti-printer btn-icon-append"></i></button> </td>
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
                                  <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ "width": "170px;" }}>Nom</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Description</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Action</th>

                                </tr>
                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td >Incs234</td>
                                  <td className="sorting_1">Car insurance</td>

                                  <td><button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-pencil text-primary"></i></button>
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


              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModalEmploye"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
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
                                  <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ "width": "70px;" }}>Code</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Nom et prénom</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px;" }}>Sexe</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Policy holder: activate to sort column ascending" style={{ "width": "43px;" }}>Date inscription</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Premium: activate to sort column ascending" style={{ "width": "59px;" }}>Num ID Employé</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{ "width": "43px;" }}>Num employé</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Num carte</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{ "width": "43px;" }}>Nationalité</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Tél</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Titre</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Privilége</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Date naissance</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Date d'embauche</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Salaire</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Adresse</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Remarque</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Photo</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Département</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>CIN</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Num CNSS</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>ECH</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>CAT</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Nombre d'enfant</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Action</th>

                                </tr>
                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td className=" select-checkbox">Incs234</td>
                                  <td className="sorting_1">Car insurance</td>
                                  <td>Business type 1</td>
                                  <td>Jesse Thomas</td>
                                  <td>$1200</td>
                                  <td>In progress</td>
                                  <td>25/04/2020</td>
                                  <td>Business type 1</td>
                                  <td>Jesse Thomas</td>
                                  <td>$1200</td>
                                  <td>In progress</td>
                                  <td>25/04/2020</td>
                                  <td>Business type 1</td>
                                  <td>Jesse Thomas</td>
                                  <td>$1200</td>
                                  <td>In progress</td>
                                  <td>25/04/2020</td>
                                  <td>Business type 1</td>
                                  <td>Jesse Thomas</td>
                                  <td>$1200</td>
                                  <td>In progress</td>
                                  <td>25/04/2020</td>
                                  <td>2</td>

                                  <td><button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-pencil text-primary"></i></button>
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
              <div className="row">
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <form className="form-sample">

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Nom</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" required>Déscription</label>
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



export default DepartementSettings;