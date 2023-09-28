import EmployeesTable from "../components/EmployeesTable";
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
function Login() {
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
                                    <form className="pt-3">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Nom d'utilisateur" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Mot de passe" />
                                        </div>
                                        <div className="mt-3">
                                            <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/">S'inscrire</Link>
                                        </div>
                                        <div className="my-2 d-flex justify-content-between align-items-center">
                                        
                                            <Link to="/" className="auth-link text-black">Mot de passe oublié?</Link>
                                        </div>          
                                        <div className="text-center mt-4 font-weight-light">
                                            Vous n'avez pas encore un compte? <Link to="/signup" className="text-primary">Créer-un</Link>
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

