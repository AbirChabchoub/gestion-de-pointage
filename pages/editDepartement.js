import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditDepartement = ({ theDepartement }) => {
  // Define state variables for the input fields
  const [idDept, setIdDept] = useState('');
  const [nomDept, setNomDept] = useState('');
  const [descriptionDept, setDescriptionDept] = useState('');
  const [message, setMessage] = useState(''); // Define message state
  const [error, setError] = useState('');     // Define error state

  // Use theWorkCycle props to set the default values of the input fields
  useEffect(() => {
    if (theDepartement) {
      setNomDept(theDepartement.nomDept || '');
      setDescriptionDept(theDepartement.descriptionDept|| '');
    }
  }, [theDepartement]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the form data from the input fields
    const updatedDept = {
      nomDept,descriptionDept
      
    };

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.put(
        `/api/departement/update-departement/${theDepartement.idDept}`,  updatedDept);
      console.log(response.data);
      setMessage('Département modifié avec succès');
    } catch (err) {
      console.error(err);
      setError('Le département existe déjà');
    }
  };

  return (
    <div>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"> Modifier un département </h5>
            <button type="button" className="close"  data-dismiss="modal"  aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="form-sample" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label"  htmlFor="nomCycle">Nom département</label>
                    <div className="col-sm-9">
                      <input id="nomCycle" name="nomCycle" type="text" className="form-control"  value={nomDept}  onChange={(e) => setNomDept(e.target.value)}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label" htmlFor="libelleCycle"> description départementt </label>
                    <div className="col-sm-9">
                      <input id="descriptionDept" name="descriptionDept" type="text" className="form-control" value={descriptionDept} onChange={(e) => setDescriptionDept(e.target.value)} />
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

export default EditDepartement;
