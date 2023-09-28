import EmployeesTable from "../components/EmployeesTable";
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Validation from "../validation/validation";
function Signup() {

  //const [codeEmp, setCodeEmp] = useState('');
 // const [nomEmp, setNomEmp] = useState("");
 // const [prenomEmp, setPrenomEmp] = useState("");
 // const [numTelEmp, setNumTelEmp] = useState("");
 // const [email, setEmail] = useState("");
 // const [pwd, setPwd] = useState("");

 // async function save(event) {
//    event.preventDefault();
  //  try {
  //    await axios.post("http://localhost:8085/api/employee/add-employee",
   //     {

   //       nomEmp: nomEmp,
   //       prenomEmp: prenomEmp,
    //      numTelEmp: numTelEmp

   //     });
 //     alert("Employee Registation Successfully");
  //    setCodeEmp("");
  //    setNomEmp("");
  //    setPrenomEmp("");
   //   setNumTelEmp("");


 //   }
 //   catch (err) {
  //    alert("User Registation Failed");
  //  }
//  }

  const [values, setValues] = useState({
    nomEmp: '',
    prenomEmp: '',
    email: '',
    pwd: ''
  })

  function handleInput(event) {
    const newObj = { ...values, [event.target.nomEmp]: event.target.value }
    setValues(newObj)
  }

  const [errors, setErrors] = useState({})
  function handleValidation(event) {
    event.preventDefault();
    setErrors(Validation(values));
  }
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
                  <form className="pt-3" onSubmit={handleValidation}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Nom"
                        onChange={handleInput} /> {errors.nomEmp && <p style={{ color: "red" }}>{errors.nomEmp}</p>}
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" id="exampleInputPrenom1" placeholder="Prénom" 
                        onChange={handleInput} /> {errors.prenomEmp && <p style={{ color: "red" }}>{errors.prenomEmp}</p>}
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Adresse mail" 
                        onChange={handleInput} /> {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                    </div>

                    <div className="form-group">
                      <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Mot de passe"
                        onChange={handleInput} /> {errors.pwd && <p style={{ color: "red" }}>{errors.pwd}</p>}

                    </div>

                    <div className="mt-3">
                      <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >S'inscrire</button>
                    </div>
                    <div className="text-center mt-4 font-weight-light">
                      Avez vous deja un compte? <Link to="/login" className="text-primary">Se connecter</Link>
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



export default Signup;

