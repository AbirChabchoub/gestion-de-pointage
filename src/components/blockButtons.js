import React from "react";
function blocButtons(){
return(
<div>
<div className="container-scroller">
    <div className="container-fluid page-body-wrapper">
      <div className="main-panel">          
        <div className="content-wrapper">
          <div className="row">            
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-description">Add class <code>.btn-block</code></p>
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


)

}

export default blocButtons