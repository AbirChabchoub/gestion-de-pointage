import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditEmployee = ({ theEmployee }) => {
  // Define state variables for the input fields
  const [nomEmp, setNomEmp] = useState('');
  const [prenomEmp, setPrenomEmp] = useState('');
  const [sexeEmp, setSexeEmp] = useState('');
  const [dateInscrit, setDateInscrit] = useState('');
  const [numIdEmp, setNumIdEmp] = useState('');
  const [numEmp, setNumEmp] = useState('');
  const [numCarte, setNumCarte] = useState('');
  const [nationalite, setNationalite] = useState('');
  const [numTelEmp, setNumTelEmp] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [dateEmbauche, setDateEmbauche] = useState('');
  const [salaireEmp, setSalaireEmp] = useState('');
  const [adresseEmp, setAdresseEmp] = useState('');
  const [remarqueEmp, setRemarqueEmp] = useState('');
  const [CIN, setCIN] = useState('');
  const [numCNSS, setNumCNSS] = useState('');
  const [ECH, setECH] = useState('');
  const [CAT, setCAT] = useState('');
  const [nbEnfant, setNbEnfant] = useState('');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [message, setMessage] = useState(''); // Define message state
  const [error, setError] = useState('');     // Define error state

  // Use theWorkCycle props to set the default values of the input fields
  useEffect(() => {
    if (theEmployee) {
      setNomEmp(theEmployee.nomEmp || '');
      setPrenomEmp(theEmployee.prenomEmp || '');
      setSexeEmp(theEmployee.sexeEmp || '');
      setDateInscrit(theEmployee.dateInscrit || '');
      setNumIdEmp(theEmployee.numIdEmp || '');
      setNumEmp(theEmployee.numEmp || '');
      setNumCarte(theEmployee.numCarte || '');
      setNationalite(theEmployee.nationalite || '');
      setNumTelEmp (theEmployee.numTelEmp || '');
      setDateNaissance(theEmployee.dateNaissance || '');
      setDateEmbauche(theEmployee.dateEmbauche || '');
      setSalaireEmp(theEmployee.salaireEmp || '');
      setAdresseEmp(theEmployee.adresseEmp || '');
      setCIN(theEmployee.CIN || '');
      setNumCNSS(theEmployee.numCNSS || '');
      setECH (theEmployee.ECH || '');
      setCAT(theEmployee.CAT || '');
      setNbEnfant(theEmployee.nbEnfant || '');
      setEmail(theEmployee.email || '');
      setMdp(theEmployee.mdp || '');
      

    }
  }, [theEmployee]);

  // Handle form submission
  const handleSubmitEdit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Get the form data from the input fields
    const updatedEmployee = {
      nomEmp, prenomEmp, dateInscrit, numIdEmp, numEmp, numCarte, nationalite, numTelEmp, dateNaissance, dateEmbauche, salaireEmp,
      sexeEmp, remarqueEmp, CIN, numCNSS, ECH, CAT, nbEnfant, adresseEmp, email, mdp

    };

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.put(
        `/api/employee/update-employee/${theEmployee.idEmp}`, updatedEmployee);
      console.log(response.data);
      setMessage('Employé modifié avec succès');
    } catch (err) {
      console.error(err);
      setError("L'employé existe déjà");
    }
  };

  //display departments into select 
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/departement/get-all-departments');
        console.log(data);
        setDepartments(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modifier employé</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="form-sample" onSubmit={handleSubmitEdit}>
              <div className="row">
                <div className="col-12 grid-margin">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="nomEmp">Nom</label>
                            <div className="col-sm-9">
                              <input id="nomEmp" name="nomEmp" type="text" className="form-control" value={nomEmp}
                                onChange={(e) => setNomEmp(e.target.value)} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="prenomEmp" >Prénom</label>
                            <div className="col-sm-9">
                              <input id="prenomEmp" name="prenomEmp" type="text" className="form-control" value={prenomEmp}
                                onChange={(e) => setPrenomEmp(e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="sexeEmp">Sexe</label>
                            <div className="col-sm-9">
                              <select className="form-control" name="sexeEmp" id='sexeEmp' >
                                <option value="Masculin">Masculin</option>
                                <option value="Feminin">Féminin</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="dateInscrit">Date Inscription</label>
                            <div className="col-sm-9">
                              <input id="dateInscrit" name="dateInscrit" className="form-control" placeholder="dd/mm/yyyy" value={dateInscrit}
                                onChange={(e) => setDateInscrit(e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="numIdEmp">N ID</label>
                            <div className="col-sm-9">
                              <input id="numIdEmp" name="numIdEmp" type="number" className="form-control" value={numIdEmp}
                                onChange={(e) => setNumIdEmp(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="numEmp">N Employé</label>
                            <div className="col-sm-9">
                              <input id="numEmp" name="numEmp" type="number" className="form-control" value={numEmp}
                                onChange={(e) => setNumEmp(e.target.value)} />
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="numCarte">N Carte</label>
                            <div className="col-sm-9">
                              <input id="numCarte" name="numCarte" type="number" className="form-control" value={numCarte}
                                onChange={(e) => setNumCarte(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="nationalite">Nationalité</label>
                            <div className="col-sm-9">
                              <input id="nationalite" name="nationalite" type="texte" className="form-control" value={nationalite}
                                onChange={(e) => setNationalite(e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="numTelEmp">Téléphone</label>
                            <div className="col-sm-9">
                              <input id="numTelEmp" name="numTelEmp" type="tel" className="form-control" value={numTelEmp}
                                onChange={(e) => setNumTelEmp(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="titre">Titre</label>
                            <div className="col-sm-9">
                              <select className="form-control" name="titre" id="titre">
                                <option value="Responsable">Responsable</option>
                                <option value="Cadre">Cadre</option>
                                <option value="Ouvrier">Ouvrier</option>
                                <option value="Technicien">Technicien</option>
                                <option value="Magasinier">Magasinier</option>
                                <option value="Etude">Etude</option>
                                <option value="Secretaire">Sécrétaire</option>
                                <option value="Commercial">Commercial</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="privilege" >Privilége</label>
                            <div className="col-sm-9">
                              <select className="form-control" name="privilege" id="privilege" >
                                <option value="Administrateur">Administrateur</option>
                                <option value="Utilisateur">Utilisateur</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="dateNaissance">Date Naissance</label>
                            <div className="col-sm-9">
                              <input id="dateNaissance" name="dateNaissance" className="form-control" placeholder="dd/mm/yyyy" value={dateNaissance}
                                onChange={(e) => setDateNaissance(e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="dateEmbauche">Date d'embauche</label>
                            <div className="col-sm-9">
                              <input id="dateEmbauche" name="dateEmbauche" className="form-control" placeholder="dd/mm/yyyy"  value={dateEmbauche}
                        onChange={(e) => setDateEmbauche(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="salaireEmp">Salaire</label>
                            <div className="col-sm-9">
                              <input id="salaireEmp" name="salaireEmp" type="number" className="form-control"  value={salaireEmp}
                        onChange={(e) => setSalaireEmp(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="adresseEmp">Adresse </label>
                            <div className="col-sm-9">
                              <input id="adresseEmp" name="adresseEmp" type="text" className="form-control"  value={adresseEmp}
                        onChange={(e) => setAdresseEmp(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="remarqueEmp">Remarque </label>
                            <div className="col-sm-9">
                              <input id="remarqueEmp" name="remarqueEmp" type="text" className="form-control"  value={remarqueEmp}
                        onChange={(e) => setRemarqueEmp(e.target.value)}/>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="departement">Département</label>
                            <div className="col-sm-9">
                              <select className="form-control" >
                                {departments.map((option) => (
                                  <option key={option.idDept} value={option.value}>
                                    {option.nomDept}
                                  </option>))}
                              </select>
                            </div>

                          </div>

                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="CIN">CIN </label>
                            <div className="col-sm-9">
                              <input id="CIN" name="CIN" type="number" className="form-control"  value={CIN}
                        onChange={(e) => setCIN(e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="numCNSS">N CNSS </label>
                            <div className="col-sm-9">
                              <input id="numCNSS" name="numCNSS" type="number" className="form-control"  value={numCNSS}
                        onChange={(e) => setNumCNSS(e.target.value)} />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="ECH">Echellon </label>
                            <div className="col-sm-9">
                              <input id="ECH" name="ECH" type="text" className="form-control"  value={ECH}
                        onChange={(e) => setECH(e.target.value)}/>
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="CAT">Catégorie </label>
                            <div className="col-sm-9">
                              <input id="CAT" name="CAT" type="text" className="form-control"  value={CAT}
                        onChange={(e) => setCAT(e.target.value)} />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label" htmlFor="nbEnfant">Nombre d'enfant </label>
                            <div className="col-sm-9">
                              <input id="nbEnfant" name="nbEnfant" type="number" className="form-control"  value={nbEnfant}
                        onChange={(e) => setNbEnfant(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                <button type="submit" className="btn btn-primary"> Modifier</button>
              </div>
            </form>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
