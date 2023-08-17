import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function Employee() {
  return (
    <div>

      <Nav />


      <Sidebar />

      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">

              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table des employés</p>
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
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td className=" select-checkbox">Incs234</td>
                                  <td className="sorting_1">Car insurance</td>
                                  <td>Business type 1</td><td>Jesse Thomas</td>
                                  <td>$1200</td><td>In progress</td><td>25/04/2020</td>
                                  <td className=" details-control"></td>
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
        <div>
          <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
              <div className="main-panel">
                <div className="content-wrapper">
                  <div className="row">
                    <div className="col-md-4 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <p className="card-description">Add className <code>.btn-block</code></p>
                          <div className="template-demo">
                            <button type="button" className="btn btn-info btn-lg btn-block">Nouveau
                              <i className="ti-menu float-right"></i>
                            </button>
                            <button type="button" className="btn btn-dark btn-lg btn-block">Modifier</button>
                            <button type="button" className="btn btn-primary btn-lg btn-block"> <i className="ti-user"></i> Supprimer </button>
                            <button type="button" className="btn btn-outline-secondary btn-lg btn-block">Imprimer</button>
                            <button type="button" className="btn btn-dark btn-lg btn-block">Synchroniser base pointeuse</button>
                            <button type="button" className="btn btn-dark btn-lg btn-block">Transféré employés vers pointeuse</button>
                            <button type="button" className="btn btn-dark btn-lg btn-block">Fermé</button>

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

      <Foot />

    </div>
  );
}



export default Employee;

