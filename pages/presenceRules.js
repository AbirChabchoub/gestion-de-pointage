import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function PresenceRules() {

  //fetch presence rules data
  const [presenceRules, setPresenceRules] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({ baseURL: 'http://localhost:8080' });
        const { data } = await instance.get('/api/regle-presence/get-all-regle-presence');
        console.log(data);
        setPresenceRules(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

//delete presence rule
  const handleDelete = async (e, idReglePresence) => {
    e.preventDefault();

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const { data } = await instance.delete(`/api/regle-presence/delete/${idReglePresence}`);      // Handle the response data or any UI updates as needed
      console.log(`Presence Rule with ID ${idReglePresence} deleted successfully.`);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error(`Error deleting presence Rule: ${error.message}`);
    }
  };


  //add new work-cycle
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmitPresenceRules = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Get the form data from the input fields of departments
    const nomRegle = e.target.nomRegle.value;
    const debutRegle = e.target.debutRegle.value;
    const finRegle = e.target.finRegle.value;
    const margeRetard = e.target.margeRetard.value;
    const margeDebut = e.target.margeDebut.value;
    const debutEntree = e.target.debutEntree.value;
    const finEntree = e.target.finEntree.value;
    const debutSortie = e.target.debutSortie.value;
    const finSortie = e.target.finSortie.value;
    const jourTravaille = e.target.jourTravaille.value;
    const travHoraire = e.target.travHoraire.value;
    const pointageEntree = e.target.pointageEntree.value;
    const pointageSortie = e.target.pointageSortie.value;
    const refRegle = e.target.refRegle.value;
    const dateDeb = e.target.dateDeb.value;
    const dateFin = e.target.dateFin.value;
    const joursRepos = e.target.joursRepos.value;
    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/regle-presence/add-regle-presence', {
        nomRegle, debutRegle, finRegle, margeRetard, margeDebut,finEntree, debutEntree, debutSortie, finSortie,
        jourTravaille, travHoraire, pointageEntree, pointageSortie, refRegle, dateDeb, dateFin, joursRepos
      });

      console.log(response.data);
      setMessage('Cycle de travail créé avec succès');
    } catch (err) {
      console.error(err);
      setError('Le cycle existe déjà');
    }
  };


  return (
    <div>

      <Nav />


      <Sidebar />

      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <table>
              <thead>
                <tr>
                  <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>
                  <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" ><i className="ti-printer btn-icon-prepend"></i> Imprimer</button></td>
                  <td> <button type="button" className="btn btn-outline-info btn-icon-text marge">Synchroniser base pointeuse<i className="ti-reload btn-icon-append"></i> </button></td>
                  <td> <button type="button" className="btn btn-outline-info btn-icon-text marge"> Transféré employé vers pointeuse<i className="ti-upload btn-icon-append"></i></button> </td>
                </tr>
              </thead>
            </table>

            <br />
            <div className="row" >
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">Table des régles de présence</p>
                    <div className="row">
                      <div className="col-12">
                        <div className="table-responsive">
                          <table id="example" className="display expandable-table" style={{ "width": "100%" }}>
                            <thead>
                              <tr role="row">
                                <th className="select-checkbox sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Nom</th>
                                <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px" }} aria-sort="ascending">Début</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Fin</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Marge retard</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Marge départ</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Début entrée</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Fin entrée</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Début sortie</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Fin sortie</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Jour travaillé</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Min_trav_horaire</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Pointage entrée</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Pointage Sortie</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Ref régle</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Date_deb</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Date_fin</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Jour repos1</th>
                                <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px" }}>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                presenceRules.map((presenceRule, index) => {
                                  return <tr className="odd" key={index}>
                                    <td>{presenceRule.nomRegle}</td>
                                    <td>{presenceRule.debutRegle}</td>
                                    <td>{presenceRule.finRegle}</td>
                                    <td>{presenceRule.margeRetard}</td>
                                    <td>{presenceRule.margeDebut}</td>
                                    <td>{presenceRule.debutEntree}</td>
                                    <td>{presenceRule.finEntree}</td>
                                    <td>{presenceRule.debutSortie}</td>
                                    <td>{presenceRule.finSortie}</td>
                                    <td>{presenceRule.jourTravaille}</td>
                                    <td>{presenceRule.travHoraire}</td>
                                    <td>{presenceRule.pointageEntree}</td>
                                    <td>{presenceRule.pointageSortie}</td>
                                    <td>{presenceRule.refRegle}</td>
                                    <td>{presenceRule.dateDeb}</td>
                                    <td>{presenceRule.dateFin}</td>
                                    <td>{presenceRule.joursRepos}</td>
                                    <td>
                                      <button className="btn btn-inverse-info btn-icon" data-toggle="modal" data-target="#exampleModalUpdateDep"><i className="ti-pencil text-primary"></i></button>
                                      <button type="button" onClick={(e) => handleDelete(e, presenceRule?.idReglePresence)} className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button>
                                    </td>
                                  </tr>
                                })}
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






      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Fiche cycle travail</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmitPresenceRules} className="form-sample">
                <div className="row">
                  <div className="col-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="nomRegle">Nom</label>
                              <div className="col-sm-9">
                                <input id="nomRegle" name="nomRegle" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="debutRegle" >Début</label>
                              <div className="col-sm-9">
                                <input id="debutRegle" name="debutRegle" type="date" className="form-control" placeholder="dd/mm/yyyy" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="finRegle">Fin</label>
                              <div className="col-sm-9">
                                <input id="finRegle" name="finRegle" className="form-control" placeholder="dd/mm/yyyy" type="date" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="margeRetard">Marge retard</label>
                              <div className="col-sm-9">
                                <input id="margeRetard" name="margeRetard" className="form-control" type="number" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="margeDebut">Marge départ</label>
                              <div className="col-sm-9">
                                <input id="margeDebut" name="margeDebut" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="finEntree">Fin entrée</label>
                              <div className="col-sm-9">
                                <input id="finEntree" name="finEntree" type="date" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="finSortie">Fin sortie</label>
                              <div className="col-sm-9">
                                <input id="finSortie" name="finSortie" type="date" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="debutSortie">Début sortie</label>
                              <div className="col-sm-9">
                                <input id="debutSortie" name="debutSortie" className="form-control" placeholder="dd/mm/yyyy" type="date" />
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="jourTravaille">Jour travaillé</label>
                              <div className="col-sm-9">
                                <input id="jourTravaille" name="jourTravaille" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="travHoraire">Min_trav_horaire</label>
                              <div className="col-sm-9">
                                <input id="travHoraire" name="travHoraire" type="number" className="form-control" />
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor='pointageEntree'>Pointage entrée</label>
                              <div className="col-sm-9">
                                <select className="form-control">
                                  <option value="true">True</option>
                                  <option value="false">False</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="pointageSortie">Pointage sortie</label>
                              <div className="col-sm-9">
                                <select className="form-control">
                                  <option value="true">True</option>
                                  <option value="false">False</option>
                                </select>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="refRegle">Réf régle</label>
                              <div className="col-sm-9">
                                <input id="refRegle" name="refRegle" className="form-control" placeholder="dd/mm/yyyy" type="text" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="dateDeb">Date début</label>
                              <div className="col-sm-9">
                                <input id="dateDeb" name="dateDeb" className="form-control" placeholder="dd/mm/yyyy" type="date" />
                              </div>
                            </div>
                          </div>

                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="dateFin">Date fin</label>
                              <div className="col-sm-9">
                                <input id="dateFin" name="dateFin" type="date" className="form-control" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label" htmlFor="joursRepos">Jour repos 1 </label>
                              <div className="col-sm-9">
                                <input id="joursRepos" name="joursRepos" type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                          <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {message && <div className="alert alert-success">{message}</div>}
              {error && <div className="alert alert-danger">{error}</div>}
            </div>
          </div>
        </div>
      </div>

      <Foot />
    </div>
  );
}



export default PresenceRules;

