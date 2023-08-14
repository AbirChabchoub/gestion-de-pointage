import React from "react";
function leaveRegistrationTable(){
return(

<div class="container-fluid page-body-wrapper">
  <div class="main-panel">
    <div class="content-wrapper">
   
      <div class="row" >
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <p class="card-title">Table d'inscription des congés'</p>
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table id="example" class="display expandable-table" style={{'width':'100%'}}>
                  <thead>
                  <tr role="row">
                    <th class="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{"width": "70px;"}}>Date écriture</th>
                    <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px;"}} aria-sort="ascending">Employé</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Date congé</th> 
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Motif</th> 
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Raison</th>      
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Observation</th>                   
             
                  
                  
                  </tr>    
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td class=" select-checkbox">Incs234</td>
                      <td class="sorting_1">Car insurance</td>
                      <td>Business type 1</td><td>Jesse Thomas</td>
                      <td>$1200</td><td>In progress</td><td>25/04/2020</td>
                      <td class=" details-control"></td>
                      </tr>
                      <tr class="even">
                        <td class=" select-checkbox">Incs235</td>
                        <td class="sorting_1">Car insurance</td>
                        <td>Business type 2</td>
                        <td>Jesse Thomas</td>
                        <td>$1200</td>
                        <td>Active</td>
                        <td>25/04/2020</td>
                        <td class=" details-control"></td>
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