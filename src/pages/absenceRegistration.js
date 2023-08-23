import EmployeesTable from "../components/EmployeesTable";
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
function AbsenceRegistration() {
  return (
    <div>

      <Nav/>

      <Sidebar/>

      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
            <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
                            <td> <button type="button" className="btn btn-outline-info btn-icon-text marge">Synchroniser base pointeuse<i className="ti-printer btn-icon-append"></i> </button></td>
                            <td> <button type="button" className="btn btn-outline-info btn-icon-text marge"> Transféré employé vers pointeuse<i className="ti-printer btn-icon-append"></i></button> </td>
                          <br/>
              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table des inscriptions des abscences</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ 'width': '100%' }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ "width": "70px;" }}>Employé</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Motif</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px;" }}>Date</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px;" }}>Action</th>

                                </tr>
                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td className=" select-checkbox">Incs234</td>
                                  <td className="sorting_1">Car insurance</td>
                                  <td>Business type 1</td>
                                  <td ><button type="button" className="btn btn-inverse-info btn-icon marge"><i className="ti-pencil text-primary"></i></button>
                                        <button type="button" className="btn btn-inverse-info btn-icon marge"><i className="ti-trash text-primary"></i></button></td>
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
        <h5 className="modal-title" id="exampleModalLabel">Fiche abscence</h5>
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
                            <input className="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Date fin</label>
                          <div className="col-sm-9">
                            <input className="form-control" placeholder="dd/mm/yyyy"/>
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

      <Foot/>


    </div>
  );
}



export default AbsenceRegistration;

