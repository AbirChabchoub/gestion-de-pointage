import React from "react";

function addEmployee(){
return(
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">    
      <div class="main-panel">        
        <div class="content-wrapper">
          <div class="row">
           <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Fiche employé</h4>
                  <form class="form-sample">
                    <p class="card-description">
                      Personal info
                    </p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Code</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label" required>Nom et prénom</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Sexe</label>
                          <div class="col-sm-9">
                            <select class="form-control">
                              <option>Masculin</option>
                              <option>Féminin</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Date Inscription</label>
                          <div class="col-sm-9">
                            <input class="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">N ID</label>
                          <div class="col-sm-9">
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label" required>N Employé</label>
                          <div class="col-sm-9">
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Membership</label>
                          <div class="col-sm-4">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked/>
                                Free
                              </label>
                            </div>
                          </div>
                          <div class="col-sm-5">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2"/>
                                Professional
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label" required>N Carte</label>
                          <div class="col-sm-9">
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label" required>Nationalité</label>
                          <div class="col-sm-9">
                            <input type="texte" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label" required>Téléphone</label>
                          <div class="col-sm-9">
                            <input type="tel" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Titre</label>
                          <div class="col-sm-9">
                            <select class="form-control">
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

                    <div class="row">                  
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Privilége</label>
                          <div class="col-sm-9">
                            <select class="form-control">
                              <option>Administrateur</option>
                              <option>Utilisateur</option>                             
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Date Naissance</label>
                          <div class="col-sm-9">
                            <input class="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>
                    </div>

                <div class="row">
                <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Date d'embauche</label>
                          <div class="col-sm-9">
                            <input class="form-control" placeholder="dd/mm/yyyy"/>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label" required>Salaire</label>
                          <div class="col-sm-9">
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                      </div>
                </div>

                 <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Addresse </label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                    </div> 

                    <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Remarque </label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                    </div>

                 </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Département</label>
                          <div class="col-sm-9">
                            <select class="form-control">
                              <option>Service aprés vente</option>
                              <option>Commercial</option> 
                              <option>Technique</option>
                              <option>Administration</option>
                              <option>Etude</option>                                                       
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">CIN </label>
                          <div class="col-sm-9">
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">N CNSS </label>
                          <div class="col-sm-9">
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Echellon </label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>

                    </div>



                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Catégorie </label>
                          <div class="col-sm-9">
                            <input type="number" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Nombre d'enfant </label>
                          <div class="col-sm-9">
                            <input type="number" class="form-control" />
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





)

}

export default addEmployee()