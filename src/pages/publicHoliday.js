import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
function PublicHoliday() {
  return (
    <div>

<Nav/>


<Sidebar/>


<div>
<div className="container-fluid page-body-wrapper">
  <div className="main-panel">
    <div className="content-wrapper">  
      <div className="row" >
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <p className="card-title">Table des jours fériés</p>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table id="example" className="display expandable-table" style={{'width':'100%'}}>
                  <thead>
                  <tr role="row">
                    <th className="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{"width": "70px;"}}>Jour férié</th>
                    <th className="sorting_asc" tabIndex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px;"}} aria-sort="ascending">Date</th>
                  
                  </tr>    
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td className=" select-checkbox">Incs234</td>
                      <td className="sorting_1">Car insurance</td>
                  
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
<Foot/>
</div>
  );
}



export default PublicHoliday;

