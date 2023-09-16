import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function TerminalManagement() {
  return (
    <div>

      <Nav />
      <Sidebar />
      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel download">
            <div className="content-wrapper">
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal" ><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge" >Connecter<i className="ti-rss btn-icon-append"></i> </button></td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge " > Déconnecter<i className="ti-new-window btn-icon-append"></i></button> </td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge" > Mise à jour<i className="ti-reload btn-icon-append"></i></button> </td>
              <br />
              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table des terminaux</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{"width": "100%"}}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{"width": "70px"}}>Nom</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px"}}aria-sort="ascending">Connécté</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px"}}>Num machine</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Policy holder: activate to sort column ascending" style={{"width": "43px"}}>Connection</th>
                                  <th claclassNamess="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Premium: activate to sort column ascending" style={{"width": "58px"}}>Vitesse</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Status: activate to sort column ascending" style={{"width": "58px"}}>Adresse IP</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Port</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Num Produit</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Utilisateur</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Administrateur</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Empreinte</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Carte</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Mot de passe</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Pointage</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Num série</th>

                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px"}}>Action</th>

                                </tr>
                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td className=" select-checkbox">Incs234</td>
                                  <td><input type="checkbox"/></td>

                                  <td>Business type 1</td>
                                  <td>Jesse Thomas</td>
                                  <td>$1200</td>
                                  <td>In progress</td>
                                  <td>25/04/2020</td>
                                  <td>$1200</td>
                                  <td>In progress</td>
                                  <td>25/04/2020</td>
                                  <td>$1200</td>
                                  <td>In progress</td>
                                  <td>25/04/2020</td>
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


      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Fiche machine</h5>
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
                                      <label className="col-sm-3 col-form-label">Nom</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div >
                                    <div className="form-check form-check-flat form-check-primary">
                                      <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        Connécté
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Type communication</label>
                                      <div className="col-sm-9">
                                        <select className="form-control">
                                          <option>TCP/IP</option>
                                          <option>COM</option>
                                          <option>WIFI</option>

                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Vitesse</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label">Adresse IP</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Port</label>
                                      <div className="col-sm-9">
                                        <input type="number" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Nom produit</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>


                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Utilisateur</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Administrateur</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Empreinte</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Carte</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>


                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Mot de passe</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Pointage</label>
                                      <div className="col-sm-9">
                                        <input type="text" className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group row">
                                      <label className="col-sm-3 col-form-label" required>Num série</label>
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
              <button type="button" className="btn btn-primary">Valider</button>
            </div>
          </div>
        </div>
      </div>

      <Foot />
    </div>
  );
}



export default TerminalManagement;

