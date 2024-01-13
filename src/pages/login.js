import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Using useNavigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const instance = axios.create({ baseURL: 'http://localhost:8080' });
      const response = await instance.post('/api/users/login', {
        email, password
      });

      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(response.data));

      // Redirect to the home page after successful login
      navigate('/'); // Using useNavigate to redirect

      setMessage('Connexion réussie');
    } catch (err) {
      console.error(err);
      setError("Identifiants invalides");
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
                  <h4>Bonjour! Commençons?</h4>
                  <h6 className="font-weight-light">Connectez-vous pour continuer.</h6>
                  <form className="pt-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-lg" id="email" placeholder="Nom d'utilisateur" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" id="password" placeholder="Mot de passe" />
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">Se connecter</button>
                    </div>
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <Link to="/" className="auth-link text-black">Mot de passe oublié?</Link>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Vous n'avez pas encore un compte? <Link to="/signup" className="text-primary">Créer un compte</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
