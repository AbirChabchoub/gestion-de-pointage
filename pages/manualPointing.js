import React from "react";
import { Link } from "react-router-dom";
function ManualPointing(){
return(
  
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
                        <button type="button" className="btn btn-inverse-info btn-icon"><i className="fa-thin fa-caret-down text-primary"></i></button>
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
                            <input className="form-control" placeholder="HH/mm"/>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                        <div className="form-check form-check-flat form-check-primary">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                        Remember me
                      </label>
                    </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                        <div className="form-check form-check-flat form-check-primary">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"/>
                        Remember me
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




)

}

export default ManualPointing