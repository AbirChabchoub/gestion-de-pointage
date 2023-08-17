import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function TerminalManagement() {
    return (
        <div>

            <Nav />


           <Sidebar/>
            <div>
                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel download">
                        <div className="content-wrapper">

                            <div className="row" >
                                <div className="col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-title">Table des pointages</p>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="table-responsive">
                                                        <table id="example" className="display expandable-table" style={{ 'width': '100%' }}>
                                                            <thead>
                                                                <tr role="row">
                                                                    <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ "width": "70px;" }}>Numéro Employé</th>
                                                                    <th className="sorting_asc" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Nom et prénom</th>
                                                                    <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Business type: activate to sort column ascending" style={{ "width": "58px;" }}>Département</th>
                                                                    <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Policy holder: activate to sort column ascending" style={{ "width": "43px;" }}>Mode Vérification</th>
                                                                    <th claclassNamess="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Premium: activate to sort column ascending" style={{ "width": "59px;" }}>Entrée/Sortie</th>
                                                                    <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{ "width": "43px;" }}>Date</th>
                                                                    <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Heure</th>
                                                                    <th className="sorting" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Updated at: activate to sort column ascending" style={{ "width": "64px;" }}>Action</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="odd">
                                                                    <td className=" select-checkbox">Incs234</td>
                                                                    <td className="sorting_1">Car insurance</td>
                                                                    <td>Business type 1</td>
                                                                    <td>Jesse Thomas</td>
                                                                    <td>$1200</td>
                                                                    <td>In progress</td>
                                                                    <td>25/04/2020</td>
                                                                    <td ><button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-pencil text-primary"></i></button>
                                                                        <button type="button" className="btn btn-inverse-info btn-icon"><i className="ti-trash text-primary"></i></button></td>
                                                                </tr>

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

           
            <div>
                <div >
                    <div className="container-fluid page-body-wrapper">
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-4 grid-margin stretch-card">
                                        <div >
                                            <div className=" card-body">
                                                <div className="template-demo">
                                                    <table>
                                   
                                                        <tr>

                                                            <td><button type="button" className="btn btn-dark btn-sm btn-block"style={{ "width": "90px;" }}>Synchroniser base pointeuse</button></td>
                                                            <td><button type="button" className="btn btn-dark btn-sm btn-block"style={{ "width": "70px;" }}>Transféré employés vers pointeuse</button> </td>
                                                            <td> <button type="button" className="btn btn-danger btn-sm btn-block">Fermé</button></td>
                                                        </tr>
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

<Foot/>
        </div>
    );
}



export default TerminalManagement;

