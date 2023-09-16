import React from "react";
function publicHoliday(){
return(

    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modifier un planning</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="form-sample">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor="libellePlanning" >Libellé planning</label>
                  <div className="col-sm-9">
                    <input id="libellePlanning" name="libellePlanning" type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor="cachePlanning" >Caché</label>
                <div className="col-sm-9">
                  <input id="cachePlanning" name="cachePlanning" type="text" className="form-control" />
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


);
}

export default publicHoliday