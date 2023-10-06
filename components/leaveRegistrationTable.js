import React from "react";
import Foot from "./Foot";
function leaveRegistrationTable(){
return(

<div className="container-fluid page-body-wrapper">
  <div className="main-panel">
    <div className="content-wrapper">
   
      <div className="row" >
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title">Table d'inscription des congés'</p>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table id="example" className="display expandable-table" style='width:100%'>
                  <thead>
                  <tr role="row">
                    <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style="width: 70px;">Date écriture</th>
                    <th className="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style="width: 51px;" aria-sort="ascending">Employé</th>
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 58px;">Date congé</th> 
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 58px;">Motif</th> 
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 58px;">Raison</th>      
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 58px;">Observation</th>                   
             
                  
                  
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
                      <tr className="even">
                        <td className=" select-checkbox">Incs235</td>
                        <td className="sorting_1">Car insurance</td>
                        <td>Business type 2</td>
                        <td>Jesse Thomas</td>
                        <td>$1200</td>
                        <td>Active</td>
                        <td>25/04/2020</td>
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


);
}

export default leaveRegistrationTable