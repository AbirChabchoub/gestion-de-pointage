import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditLeave = ({ theLeave }) => {
  // Define state variables for the input fields
  const [dateEcriture, setDateEcriture] = useState('');
  const [dateConge, setDateConge] = useState('');
  const [motif, setMotif] = useState('');
  const [raison, setRaison] = useState('');
  const [observation, setObservation] = useState('');
  const [message, setMessage] = useState(''); // Define message state
  const [error, setError] = useState('');     // Define error state

  // Use theLeave props to set the default values of the input fields
  useEffect(() => {
    if (theLeave) {
        setDateEcriture(theLeave.dateEcriture || '');
        setDateConge(theLeave.dateConge || '');
        setMotif(theLeave.motif || '');
        setRaison(theLeave.raison || '');
        setObservation(theLeave.observation || '');
    }
  }, [theLeave]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data from the input fields
    const updatedLeave = {
        dateEcriture,dateConge,raison,motif,observation
    };

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.put(
        `/api/conge/update-conge/${theLeave.idLeave}`,  updatedLeave);
      console.log(response.data);
      setMessage('Congé modifié avec succès');
    } catch (err) {
      console.error(err);
      setError('Congé existe déjà');
    }
  };

  // Rest of your component code...

  return (
    <div>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Fiche de congé
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="form-sample" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label"  htmlFor="dateEcriture">Date écriture</label>
                    <div className="col-sm-9">
                      <input id="dateEcriture" name="dateEcriture" type="text" className="form-control"  value={dateEcriture}  onChange={(e) => setDateEcriture(e.target.value)}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label" htmlFor="dateConge"> Date congé </label>
                    <div className="col-sm-9">
                      <input id="dateConge" name="dateConge" type="text" className="form-control" value={dateConge} onChange={(e) => setDateConge(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label" htmlFor="motif"> Motif</label>
                    <div className="col-sm-9">
                      <input id="motif" name="motif" type="number" className="form-control" value={motif} onChange={(e) => setMotif(e.target.value)}
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

export default EditLeave;
