import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function PlanningAssignmentDep() {
  return (
    <div>

      <Nav />


      <Sidebar />

      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Département</label>
                    <div className="col-sm-9">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>

              </div>
              <br />
              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table d'affectation des plannings aux départements</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ "width": "100%" }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Département</th>
                                  <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Ref régle</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Régle de présence</th>
                                  <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Action</th>

                                </tr>

                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td className=" select-checkbox">Incs234</td>
                                  <td className="sorting_1">Car insurance</td>

                                  <td>$1200</td>

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



      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modification affectation planning</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="form-sample">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Employé</label>
                      <div className="col-sm-9">
                        <select className="form-control" >  {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.nomRegle}
                          </option>
                        ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Département</label>
                      <div className="col-sm-9">
                        <select className="form-control" >  {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.nomRegle}
                          </option>
                        ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Planning</label>
                      <div className="col-sm-9">
                        <select className="form-control" >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.nomRegle}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Cycle</label>
                      <div className="col-sm-9">
                        <select className="form-control" >  {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.nomRegle}
                          </option>
                        ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle" >Du</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="time" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" >Au</label>
                      <div className="col-sm-9">
                      <input id="nbJourCycle" name="nbJourCycle" type="time" className="form-control" />

                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle" >Début</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="time" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="libelleCycle" >Fin</label>
                      <div className="col-sm-9">
                        <input id="libelleCycle" name="libelleCycle" type="time" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle" >Base</label>
                      <div className="col-sm-9">
                        <input id="nbJourCycle" name="nbJourCycle" type="number" className="form-control" />
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





      <Foot />

    </div>
  );
}



export default PlanningAssignmentDep;

