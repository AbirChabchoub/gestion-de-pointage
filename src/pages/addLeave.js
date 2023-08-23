import React from "react";
import { Link } from "react-router-dom";
function AddLeave(){
return(
  
  <div>

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


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




)

}

export default AddLeave