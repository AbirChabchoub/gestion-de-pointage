import React from "react";
function blocButtons(){
return(
<div>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">          
        <div class="content-wrapper">
          <div class="row">            
            <div class="col-md-4 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-description">Add class <code>.btn-block</code></p>
                  <div class="template-demo">
                    <button type="button" class="btn btn-info btn-lg btn-block">Nouveau
                      <i class="ti-menu float-right"></i>
                    </button>
                    <button type="button" class="btn btn-dark btn-lg btn-block">Modifier</button>
                    <button type="button" class="btn btn-primary btn-lg btn-block"> <i class="ti-user"></i> Supprimer </button>
                    <button type="button" class="btn btn-outline-secondary btn-lg btn-block">Imprimer</button>
                    <button type="button" class="btn btn-dark btn-lg btn-block">Synchroniser base pointeuse</button>
                    <button type="button" class="btn btn-dark btn-lg btn-block">Transféré employés vers pointeuse</button>
                    <button type="button" class="btn btn-dark btn-lg btn-block">Fermé</button>

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


)

}

export default blocButtons