import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";
function LeaveRequest() {
  return (
    <div>

     <Nav/>


      <Sidebar/>

      <div>
        <div className="container-fluid page-body-wrapper">
          <div clclassNameass="main-panel">
            <div className="content-wrapper">

              <div className="row" >
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title">Table des démissions</p>
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table id="example" className="display expandable-table" style={{ 'width': '100%' }}>
                              <thead>
                                <tr role="row">
                                  <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ "width": "70px;" }}>Date écriture</th>
                                  <th className="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Date</th>
                                  <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px;" }}>Raison</th>
                                  <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px;" }}>Employé</th>




                                </tr>
                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td className=" select-checkbox">Incs234</td>
                                  <td className="sorting_1">Car insurance</td>
                                  <td>Business type 1</td><td>Jesse Thomas</td>
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

      <Foot/>

    </div>
  );
}



export default LeaveRequest;