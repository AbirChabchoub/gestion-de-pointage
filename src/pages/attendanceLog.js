import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function AttendanceLog() {
  return (
    <div>

      <Nav />
      <Sidebar />

      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" ><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" ><i className="ti-reload btn-icon-prepend"></i> Recharger</button></td>
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-hand-stop btn-icon-prepend"></i> Pointage manuelle</button></td>

              <br></br>
              <div className="row">
              <label className="col-sm-1 col-form-label">Date:</label>

                        <div className="col-md-4">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Du :</label>
                          <div className="col-sm-6">
                            <input className="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Au :</label>
                          <div className="col-sm-6">
                            <input className="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">                   
                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" id="margeLabel">Employé :</label>
                          <div className="col-sm-4">
                            <select className="form-control">
                              <option>Masculin</option>
                              <option>Féminin</option>
                            </select>
                          </div>
                        </div>
                      </div>                       
                       
                        <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" id="depLabel">Département :</label>
                          <div className="col-sm-4">
                            <select className="form-control">
                              <option>Masculin</option>
                              <option>Féminin</option>
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
                            <table id="example" className="display expandable-table" style={{"width": "100%;"}}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{"width": "70px;"}}>Num employé</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{"width": "58px;"}} aria-sort="ascending">Nom et prénom</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Département</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Date</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Heure</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Entrée/Sortie</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}></th>                                
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Action</th>

                                </tr>

                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td className=" select-checkbox">Incs234</td>
                                  <td className="sorting_1">Car insurance</td>
                                  <td>Business type 1</td>
                                  <td>Jesse Thomas</td>
                                  <td>$1200</td>
                                  <td>$1200</td>
                                  <td><input type="checkbox"/></td>

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



    

      <div>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                          <input className="form-control" placeholder="dd/mm/yyyy"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Heure</label>
                        <div className="col-sm-9">
                          <input className="form-control" placeholder="hh/mm"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                  <div className="col-md-6">
                      <div >
                      <div className="form-check form-check-flat form-check-primary">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input"/>
                      Entrée
                    </label>
                  </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div >
                      <div className="form-check form-check-flat form-check-primary">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input"/>
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



      <Foot />

    </div>
  );
}



export default AttendanceLog;

