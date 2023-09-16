import React from "react";
function presenceRulesTables(){
return(

<div className="container-fluid page-body-wrapper">
  <div className="main-panel">
    <div className="content-wrapper">
   
      <div className="row" >
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title">Table des régles de présence</p>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table id="example" className="display expandable-table" style="width: 100%;">
                  <thead>
                  <tr role="row">
                    <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{"width": "70px;"}}>Nom</th>
                    <th className="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending"  style="width: 51px;" aria-sort="ascending">Début</th>
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 58px;">Fin</th> 
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Marge retard</th> 
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Marge départ</th>      
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Fin entrée</th> 
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Début sortie</th> 
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Fin sortie</th>   
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Jour travaillé</th>  
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Min_trav_horaire</th>   
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Pointage entrée</th>    
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Pointage Sortie</th> 
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Ref régle</th>  
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Date_deb</th> 
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Date_fin</th>    
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Jour repos1</th>   
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">Jour repos2</th>   
                    <th className="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style="width: 51px;">valide</th>                   
                
               
                  
                 
                  
               
                
                 
                
                  
                  
             
                  
                  
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

export default presenceRulesTables