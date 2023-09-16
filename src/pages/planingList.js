import React, { useEffect, useState } from 'react';
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";
import axios from 'axios';

function PlanningList() {

    //fetch plannings data
    const [plannings, setPlannings] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const instance = axios.create({ baseURL: 'http://localhost:8080' });
                const { data } = await instance.get('/api/planning/get-all-plannings');
                console.log(data);
                setPlannings(data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);


    const handleDelete = async (e, codePlaning) => {
        e.preventDefault();

        try {
            const instance = axios.create({ baseURL: 'http://localhost:8080' });
            const { data } = await instance.delete(`/api/planning/delete/${codePlaning}`);      // Handle the response data or any UI updates as needed
            console.log(`Planning with ID ${codePlaning} deleted successfully.`);
        } catch (error) {
            // Handle errors, e.g., display an error message
            console.error(`Error deleting department: ${error.message}`);
        }
    };



    //add new planning
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Get the form data from the input fields of departments
        const libellePlanning = e.target.libellePlanning.value;
        const cachePlanning = e.target.cachePlanning.value;


        try {
            const instance = axios.create({ baseURL: 'http://localhost:8080' });
            const response = await instance.post('/api/planning/add-planning', {
                libellePlanning, cachePlanning
            });

            console.log(response.data);
            setMessage('Plannig créé avec succès');
        } catch (err) {
            console.error(err);
            setError('Le cycle existe déjà');
        }
    };


    //display cycles into select 

const [options, setOptions] = useState([]);
useEffect(() => {
    const fetchData = async () => {
        try {
            const instance = axios.create({ baseURL: 'http://localhost:8080' });
            const { data } = await instance.get('/api/cycle-travail/get-all-cycles');
            console.log(data);
            setOptions(data);

        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, []);



    return (
        <div>

            <Nav />
            <Sidebar />

            <div>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <td> <button type="button" className="btn btn-outline-primary btn-icon-text marge" data-toggle="modal" data-target="#exampleModal"><i className="ti-plus btn-icon-prepend"></i> Ajouter</button></td>

                                    </tr>

                                </thead>
                            </table>
                            <br />
                            <div className="row" >
                                <div className="col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-title">Table de liste des plannings</p>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="table-responsive">
                                                        <table id="example" className="display expandable-table" style={{ "width": "100%" }}>
                                                            <thead>
                                                                <tr role="row">
                                                                    <th className=" sorting_disabled" rowSpan="1" colSpan="1" aria-label="Quote#" style={{ "width": "70px" }}>Code</th>
                                                                    <th className="sorting_asc" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Product: activate to sort column descending" style={{ "width": "70px" }} aria-sort="ascending">Libellé</th>
                                                                    <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "51px" }}>Caché</th>
                                                                    <th className="sorting" tabIndex="0" aria-controls="example" rowSpan="1" colSpan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "51px" }}>Action</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {
                                                                    plannings.map((planning, index) => {
                                                                        return <tr className="odd" key={index}>

                                                                            <td>{planning.codePlaning}</td>

                                                                            <td>{planning.libellePlanning}</td>

                                                                            <td>{planning.cachePlanning}</td>



                                                                            <td><button className="btn btn-inverse-info btn-icon" data-toggle="modal" data-target="#exampleModalUpdatePlanning"><i className="ti-pencil text-primary"></i></button>
                                                                                <button type="button" onClick={(e) => handleDelete(e, planning?.codePlaning)} className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button>
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
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Fiche des plannings</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="form-sample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label" htmlFor="libellePlanning" >Libellé planning</label>
                                            <div className="col-sm-9">
                                                <input id="libellePlanning" name="libellePlanning" type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label" htmlFor="cachePlanning" >Caché</label>
                                            <div className="col-sm-9">
                                                <input id="cachePlanning" name="cachePlanning" type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                        Fermer
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Ajouter
                                    </button>
                                </div>
                            </form>
                            {message && <div className="alert alert-success">{message}</div>}
                            {error && <div className="alert alert-danger">{error}</div>}
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="exampleModalUpdatePlanning" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modifier un planning</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} className="form-sample">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label" htmlFor="libellePlanning" >Libellé planning</label>
                                            <div className="col-sm-9">
                                                <input id="libellePlanning" name="libellePlanning" type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label" htmlFor="cachePlanning" >Caché</label>
                                            <div className="col-sm-9">
                                                <input id="cachePlanning" name="cachePlanning" type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label" htmlFor="libellePlanning" >Du</label>
                                            <div className="col-sm-9">
                                                <input id="libellePlanning" name="libellePlanning" type="date" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label" htmlFor="cachePlanning" >Au</label>
                                            <div className="col-sm-9">
                                                <input id="cachePlanning" name="cachePlanning" type="date" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group row">
                                            <label className="col-sm-3 col-form-label" >Cycle</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" >
                                                    {options.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.libelleCycle}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                        Fermer
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Ajouter
                                    </button>
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



export default PlanningList;