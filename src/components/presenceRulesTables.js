import React from "react";
function presenceRulesTables(){
return(

<div class="container-fluid page-body-wrapper">
  <div class="main-panel">
    <div class="content-wrapper">
   
      <div class="row" >
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <p class="card-title">Table des régles de présence</p>
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table id="example" class="display expandable-table" style={{'width':'100%'}}>
                  <thead>
                  <tr role="row">
                    <th class="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{"width": "70px;"}}>Nom</th>
                    <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px;"}} aria-sort="ascending">Début</th>
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Fin</th> 
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Marge retard</th> 
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Marge départ</th>      
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Fin entrée</th> 
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Début sortie</th> 
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Fin sortie</th>   
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Jour travaillé</th>  
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Min_trav_horaire</th>   
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Pointage entrée</th>    
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Pointage Sortie</th> 
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Ref régle</th>  
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Date_deb</th> 
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Date_fin</th>    
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Jour repos1</th>   
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>Jour repos2</th>   
                    <th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{"width": "58px;"}}>valide</th>                   
                
               
                  
                 
                  
               
                
                 
                
                  
                  
             
                  
                  
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

export default presenceRulesTables