import React from "react";
import { Link } from "react-router-dom";
function AddEmployeeForm(){
return(
  
  <div>
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper">    
      <div >        
        <div className="content-wrapper">
          <div className="row">
           <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Fiche employé</h4>
                  <form className="form-sample">
                    <p className="card-description">
                      Informations personnelle
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Code</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" required>Nom et prénom</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Sexe</label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>Masculin</option>
                              <option>Féminin</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Date Inscription</label>
                          <div className="col-sm-9">
                            <input className="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">N ID</label>
                          <div className="col-sm-9">
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" required>N Employé</label>
                          <div className="col-sm-9">
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Membership</label>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" />
                                Free
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2"/>
                                Professional
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" required>N Carte</label>
                          <div className="col-sm-9">
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" required>Nationalité</label>
                          <div className="col-sm-9">
                            <input type="texte" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" required>Téléphone</label>
                          <div className="col-sm-9">
                            <input type="tel" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Titre</label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>Responsable</option>
                              <option>Cadre</option>
                              <option>Ouvrier</option>
                              <option>Technicien</option>
                              <option>Magasinier</option>
                              <option>Etude</option>
                              <option>Sécrétaire</option>
                              <option>Commercial</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">                  
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Privilége</label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>Administrateur</option>
                              <option>Utilisateur</option>                             
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Date Naissance</label>
                          <div className="col-sm-9">
                            <input className="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>
                    </div>

                <div className="row">
                <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Date d'embauche</label>
                          <div className="col-sm-9">
                            <input className="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label" required>Salaire</label>
                          <div className="col-sm-9">
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>
                </div>

                 <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Addresse </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                    </div> 

                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Remarque </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                    </div>

                 </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Département</label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>Service aprés vente</option>
                              <option>Commercial</option> 
                              <option>Technique</option>
                              <option>Administration</option>
                              <option>Etude</option>                                                       
                            </select>
                          </div>
                          
                        </div>
                      
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">CIN </label>
                          <div className="col-sm-9">
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">N CNSS </label>
                          <div className="col-sm-9">
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Echellon </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>

                    </div>



                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Catégorie </label>
                          <div className="col-sm-9">
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">Nombre d'enfant </label>
                          <div className="col-sm-9">
                            <input type="number" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>       
          </div>
        </div>         
      </div>
    </div>
  </div>


  <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>





  </div>




)

}

export default AddEmployeeForm