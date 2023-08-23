import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function DownloadPT() {
  return (
    <div>

      <Nav />
      <Sidebar />
      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel download">
            <div className="content-wrapper">
              <td>
            
              </td>
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal" id="vidageButton"><i className="ti-reload btn-icon-prepend"></i> Synchronisation</button></td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge" >Vidage pointeuse<i className="ti-trash btn-icon-append"></i> </button></td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge " > Supprimer pointage<i className="ti-close btn-icon-append"></i></button> </td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge" > Importer pointage<i className="ti-printer btn-icon-append"></i></button> </td>

              <br />
              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table des pointages</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ 'width': '100%' }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ "width": "70px;" }}>Numéro Employé</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Nom et prénom</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px;" }}>Département</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Policy holder: activate to sort column ascending" style={{ "width": "43px;" }}>Mode Vérification</th>
                                  <th claclassNamess="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Premium: activate to sort column ascending" style={{ "width": "59px;" }}>Entrée/Sortie</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{ "width": "43px;" }}>Date</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Heure</th>
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
                                  <td ><button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-pencil text-primary"></i></button>
                                    <button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button></td>
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



      <div>
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper">
            <div >
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Fiche employé</h4>
                        <form className="form-sample">
                          <p className="card-description">
                            Informations personnelle
                          </p>
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
                                    <option>Masculin</option>
                                    <option>Féminin</option>
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




      </div>





      <Foot />

    </div>
  );
}



export default DownloadPT;

