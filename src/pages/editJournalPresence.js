import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";

const EditJournalPresence = ({ theJournal }) => {
  // Define state variables for the input fields
  const [codeCycle, setCodeCycle] = useState('');
  const [libelleCycle, setLibelleCycle] = useState('');
  const [nbJourCycle, setNbJourCycle] = useState('');
  const [message, setMessage] = useState(''); // Define message state
  const [error, setError] = useState('');     // Define error state

  // Use theJournal props to set the default values of the input fields
  useEffect(() => {
    if (theJournal) {
      setCodeCycle(theJournal.codeCycle || '');
      setLibelleCycle(theJournal.libelleCycle || '');
      setNbJourCycle(theJournal.nbJourCycle || '');
    }
  }, [theJournal]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data from the input fields
    const updatedCycle = {
      
      codeCycle,
      libelleCycle,
      nbJourCycle,
    };

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.put(
        `/api/cycle-travail/update-cycle/${theJournal.idCycle}`, // Assuming you have an ID property
        updatedCycle);
      console.log(response.data);
      setMessage('Cycle de travail modifié avec succès');
    } catch (err) {
      console.error(err);
      setError('Le cycle existe déjà');
    }
  };

  // Rest of your component code...

  return (
    <div>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"> Fiche Cycle de travail </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="form-sample" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label"  htmlFor="codeCycle">Employé</label>
                    <div className="col-sm-9">
                      <input id="codeCycle" name="codeCycle" type="text" className="form-control"  value={codeCycle}  onChange={(e) => setCodeCycle(e.target.value)}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label" htmlFor="libelleCycle"> Date début </label>
                    <div className="col-sm-9">
                      <input id="libelleCycle" name="libelleCycle" type="date" className="form-control" value={libelleCycle} onChange={(e) => setLibelleCycle(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label" htmlFor="nbJourCycle"> Heure</label>
                    <div className="col-sm-9">
                      <input id="nbJourCycle" name="nbJourCycle" type="number" className="form-control"
                        value={nbJourCycle}
                        onChange={(e) => setNbJourCycle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>             
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" > Fermer</button>
                <button type="submit" className="btn btn-primary">Modifier</button>
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

export default EditJournalPresence;
