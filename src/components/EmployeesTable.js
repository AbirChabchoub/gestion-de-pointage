import React from "react";
function EmployeesTable(){
return(
  <div class="container-fluid page-body-wrapper">
  <div class="main-panel">
    <div class="content-wrapper">
   
      <div class="row" >
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <p class="card-title">Table des employés</p>
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table id="example" class="display expandable-table" style={{'width':'100%'}}>
                  <thead>
                  <tr role="row">
                    <th class="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{"width": "70px;"}}>Code</th>
                    <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px;"}} aria-sort="ascending">Nom et prénom</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Sexe</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Policy holder: activate to sort column ascending" style={{"width": "43px;"}}>Date inscription</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Premium: activate to sort column ascending" style={{"width": "59px;"}}>Num ID Employé</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{"width": "43px;"}}>Num employé</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Num carte</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{"width": "43px;"}}>Nationalité</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Tél</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Titre</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Privilége</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Date naissance</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Date d'embauche</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Salaire</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Adresse</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Remarque</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Photo</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Département</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>CIN</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Num CNSS</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>ECH</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>CAT</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{"width": "64px;"}}>Nombre d'enfant</th>















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
                        <tr class="odd">
                          <td class=" select-checkbox">Incs235</td>
                          <td class="sorting_1">Car insurance</td>
                          <td>Business type 2</td>
                          <td>Jesse Thomas</td>
                          <td>$1200</td>
                          <td>Expired</td>
                          <td>25/04/2020</td>
                          <td class=" details-control"></td>
                          </tr>
                          <tr class="even">
                            <td class=" select-checkbox">Incs235</td>
                            <td class="sorting_1">Car insurance</td>
                            <td>Business type 2</td>
                            <td>Jesse Thomas</td>
                            <td>$1200</td>
                            <td>In progress</td>
                            <td>25/04/2020</td>
                            <td class=" details-control"></td>
                            </tr>
                            <tr class="odd">
                              <td class=" select-checkbox">Incs235</td>
                              <td class="sorting_1">Car insurance</td>
                              <td>Business type 2</td>
                              <td>Jesse Thomas</td>
                              <td>$1200</td>
                              <td>Active</td>
                              <td>25/04/2020</td>
                              <td class=" details-control">
                                </td></tr>
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

export default EmployeesTable;