import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function PublicHoliday() {
  return (
    <div>

<Nav/>


<Sidebar/>


<div>
<div className="container-fluid page-body-wrapper">
  <div className="main-panel">
    <div className="content-wrapper">  
    <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" ><i className="ti-printer btn-icon-prepend"></i> Imprimer</button></td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge">Synchroniser base pointeuse<i className="ti-reload btn-icon-append"></i> </button></td>
              <td> <button type="button" className="btn btn-outline-info btn-icon-text marge"> Transféré employé vers pointeuse<i className="ti-upload btn-icon-append"></i></button> </td>
              <br />
      <div className="row" >
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title">Table des jours fériés</p>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table id="example" className="display expandable-table" style={{"width": "100%"}}>
                  <thead>
                  <tr role="row">
                    <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{"width": "70px"}}>Jour férié</th>
                    <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px"}} aria-sort="ascending">Date</th>
                    <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px"}} aria-sort="ascending">Action</th>                  
                  </tr>    
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td className=" select-checkbox">Incs234</td>
                      <td className="sorting_1">Car insurance</td>
                      <td><button type="button" className="btn btn-inverse-info btn-icon marge"><i className="ti-pencil text-primary"></i></button>
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


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Fiche des jours fériés</h5>
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
                              <label className="col-sm-3 col-form-label" required>Jour férié</label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label">Date férié</label>
                              <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" />
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




<Foot/>
</div>
  );
}



export default PublicHoliday;

