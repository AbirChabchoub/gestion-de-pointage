import EmployeesTable from "../components/EmployeesTable";
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/users/signup', {
        firstName, lastName, email, password
      });

      console.log(response.data);
      setMessage('Utilisateur ajouté avec succès');
    } catch (err) {
      console.error(err);
      setError("L'utilisateur existe déjà");
    }
  };

  return (
    <div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="/assets/images/logoEDS.png" alt="logo" />
                  </div>
                  <h4>Nouveau ici?</h4>
                  <form className="pt-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="firstName"
                        placeholder="Nom"
                        name="firstName"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="lastName"
                        placeholder="Prénom"
                        name="lastName"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        placeholder="Adresse mail"
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="password"
                        placeholder="Mot de passe"
                        name="password"
                      />
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">S'inscrire</button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Avez-vous déjà un compte? <Link to="/login" className="text-primary">Se connecter</Link>
                    </div>
                  </form>
                  {message && <div className="text-success">{message}</div>}
                  {error && <div className="text-danger">{error}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
