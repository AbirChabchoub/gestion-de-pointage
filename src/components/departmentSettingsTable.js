import React from "react";
function DepartementSettingsTable() {
    return (
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">

                    <div className="row" >
                        <div className="col-md-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <p className="card-title">Paramétres des départements</p>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table id="example" class="display expandable-table" style={{ 'width': '100%' }}>
                                                    <thead>
                                                        <tr role="row">
                                                            <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{ "width": "170px;" }}>Nom</th>
                                                            <th className="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{ "width": "51px;" }} aria-sort="ascending">Description</th>
                                                            <th className="details-control sorting_disabled" rowspan="1" colspan="1" aria-label="" style={{ "width": "22px;" }}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="odd">
                                                            <td className=" select-checkbox">Incs234</td>
                                                            <td className="sorting_1">Car insurance</td>
                                                            <td>Business type 1</td><td>Jesse Thomas</td>
                                                            <td>$1200</td><td>In progress</td><td>25/04/2020</td>
                                                            <td className=" details-control"></td>
                                                        </tr>
                                                        <tr className="even">
                                                            <td className=" select-checkbox">Incs235</td>
                                                            <td className="sorting_1">Car insurance</td>
                                                            <td className=" details-control"></td>
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


    );

}

export default DepartementSettingsTable;