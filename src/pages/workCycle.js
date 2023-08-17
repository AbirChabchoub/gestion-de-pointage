import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";
function WorkCycle() {
    return (
      <div>
<Nav/>
<Sidebar/>

<div>
<div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">

                    <div className="row" >
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-title">Table de cycle de travail</p>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table id="example" className="display expandable-table" style={{ 'width': '100%' }}>
                                                    <thead>
                                                        <tr role="row">
                                                            <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ "width": "70px;" }}>Code</th>
                                                            <th className="sorting_asc" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Libellé</th>
                                                            <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px;" }}>Nombre de jours</th>

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

<Foot/>
</div>
    );
  }
  
  
  
  export default WorkCycle;