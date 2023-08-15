import EmployeesTable from "../components/EmployeesTable";
import Foot from "../components/Foot";
import Sidebar from "../components/Sidebar";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import publicHoliday from "../components/publicHoliday";
function PublicHoliday() {
  return (
    <div>

<div>
<div className="container-scroller">

  <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="./assets/images/logo.svg" className="mr-2" alt="logo"/></a>
      <a className="navbar-brand brand-logo-mini" href="index.html"><img src="./assets/images/logo-mini.svg" alt="logo"/></a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
        <span className="icon-menu"></span>
      </button>
      <ul className="navbar-nav mr-lg-2">
        <li className="nav-item nav-search d-none d-lg-block">
          <div className="input-group">
            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
              <span className="input-group-text" id="search">
                <i className="icon-search"></i>
              </span>
            </div>
            <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"/>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item dropdown">
          <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
            <i className="icon-bell mx-0"></i>
            <span className="count"></span>
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-success">
                  <i className="ti-info-alt mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">Application Error</h6>
                <p className="font-weight-light small-text mb-0 text-muted">
                  Just now
                </p>
              </div>
            </a>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-warning">
                  <i className="ti-settings mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">Settings</h6>
                <p className="font-weight-light small-text mb-0 text-muted">
                  Private message
                </p>
              </div>
            </a>
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-info">
                  <i className="ti-user mx-0"></i>
                </div>
              </div>
              <div className="preview-item-content">
                <h6 className="preview-subject font-weight-normal">New user registration</h6>
                <p className="font-weight-light small-text mb-0 text-muted">
                  2 days ago
                </p>
              </div>
            </a>
          </div>
        </li>
        <li className="nav-item nav-profile dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
            <img src="./assets/images/faces/face28.jpg" alt="profile"/>
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
            <a className="dropdown-item">
              <i className="ti-settings text-primary"></i>
              Settings
            </a>
            <a className="dropdown-item">
              <i className="ti-power-off text-primary"></i>
              Logout
            </a>
          </div>
        </li>
        <li className="nav-item nav-settings d-none d-lg-flex">
          <a className="nav-link" href="#">
            <i className="icon-ellipsis"></i>
          </a>
        </li>
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span className="icon-menu"></span>
      </button>
    </div>
  </nav>

  <div className="container-fluid page-body-wrapper">
 
    <div className="theme-setting-wrapper">
      <div id="settings-trigger"><i className="ti-settings"></i></div>
      <div id="theme-settings" className="settings-panel">
        <i className="settings-close ti-close"></i>
        <p className="settings-heading">SIDEBAR SKINS</p>
        <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
        <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
        <p className="settings-heading mt-2">HEADER SKINS</p>
        <div clclassNameass="color-tiles mx-0 px-4">
          <div className="tiles success"></div>
          <div className="tiles warning"></div>
          <div className="tiles danger"></div>
          <div className="tiles info"></div>
          <div className="tiles dark"></div>
          <div className="tiles default"></div>
        </div>
      </div>
    </div>
    <div id="right-sidebar" className="settings-panel">
      <i className="settings-close ti-close"></i>
      <ul className="nav nav-tabs border-top" id="setting-panel" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab" aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab" aria-controls="chats-section">CHATS</a>
        </li>
      </ul>
      <div className="tab-content" id="setting-content">
        <div className="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel" aria-labelledby="todo-section">
          <div className="add-items d-flex px-3 mb-0">
            <form className="form w-100">
              <div className="form-group d-flex">
                <input type="text" className="form-control todo-list-input" placeholder="Add To-do"/>
                <button type="submit" className="add btn btn-primary todo-list-add-btn" id="add-task">Add</button>
              </div>
            </form>
          </div>
          <div className="list-wrapper px-3">
            <ul className="d-flex flex-column-reverse todo-list">
              <li>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox"/>
                    Team review meeting at 3.00 PM
                  </label>
                </div>
                <i className="remove ti-close"></i>
              </li>
              <li>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox"/>
                    Prepare for presentation
                  </label>
                </div>
                <i class="remove ti-close"></i>
              </li>
              <li>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox"/>
                    Resolve all the low priority tickets due today
                  </label>
                </div>
                <i className="remove ti-close"></i>
              </li>
              <li className="completed">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox" checked/>
                    Schedule meeting for next week
                  </label>
                </div>
                <i className="remove ti-close"></i>
              </li>
              <li className="completed">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="checkbox" type="checkbox" checked/>
                    Project review
                  </label>
                </div>
                <i className="remove ti-close"></i>
              </li>
            </ul>
          </div>
          <h4 className="px-3 text-muted mt-5 font-weight-light mb-0">Events</h4>
          <div className="events pt-4 px-3">
            <div className="wrapper d-flex mb-2">
              <i className="ti-control-record text-primary mr-2"></i>
              <span>Feb 11 2018</span>
            </div>
            <p className="mb-0 font-weight-thin text-gray">Creating component page build a js</p>
            <p className="text-gray mb-0">The total number of sessions</p>
          </div>
          <div className="events pt-4 px-3">
            <div className="wrapper d-flex mb-2">
              <i className="ti-control-record text-primary mr-2"></i>
              <span>Feb 7 2018</span>
            </div>
            <p className="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
            <p className="text-gray mb-0 ">Call Sarah Graves</p>
          </div>
        </div>
     
        <div className="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
          <div className="d-flex align-items-center justify-content-between border-bottom">
            <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
            <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See All</small>
          </div>
          <ul className="chat-list">
            <li className="list active">
              <div className="profile"><img src="./assets/images/faces/face1.jpg" alt="image"/><span className="online"/></div>
              <div className="info">
                <p>Thomas Douglas</p>
                <p>Available</p>
              </div>
              <small className="text-muted my-auto">19 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="./assets/images/faces/face2.jpg" alt="image"/><span className="offline"/></div>
              <div className="info">
                <div className="wrapper d-flex">
                  <p>Catherine</p>
                </div>
                <p>Away</p>
              </div>
              <div className="badge badge-success badge-pill my-auto mx-2">4</div>
              <small className="text-muted my-auto">23 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="./assets/images/faces/face3.jpg" alt="image"/><span className="online"></span></div>
              <div className="info">
                <p>Daniel Russell</p>
                <p>Available</p>
              </div>
              <small className="text-muted my-auto">14 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="./assets/images/faces/face4.jpg" alt="image"/><span className="offline"></span></div>
              <div className="info">
                <p>James Richardson</p>
                <p>Away</p>
              </div>
              <small className="text-muted my-auto">2 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="./assets/images/faces/face5.jpg" alt="image"/><span className="online"></span></div>
              <div className="info">
                <p>Madeline Kennedy</p>
                <p>Available</p>
              </div>
              <small className="text-muted my-auto">5 min</small>
            </li>
            <li className="list">
              <div className="profile"><img src="./assets/images/faces/face6.jpg" alt="image"/><span className="online"></span></div>
              <div className="info">
                <p>Sarah Graves</p>
                <p>Available</p>
              </div>
              <small className="text-muted my-auto">47 min</small>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
</div>
</div>
</div>


<div>
<div className="container-fluid page-body-wrapper">

  <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
      <li className="nav-item">
      <Link className="nav-link" to="/home">
                <i className="icon-grid menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i className="icon-layout menu-icon"></i>
          <span className="menu-title">Machine</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="ui-basic">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <a className="nav-link" href="./public/pages/ui-features/buttons.html">Téléchargé pointages</a></li>
            <li className="nav-item"> <a className="nav-link" href="./public/pages/ui-features/dropdowns.html">Gestion des terminaux</a></li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
          <i className="icon-columns menu-icon"></i>
          <span className="menu-title">Employés</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="form-elements">
        <ul className="nav flex-column sub-menu">
            <li className="nav-item"><Link className="nav-link" to="/departmentSettings">Paramètres des départements</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/employees">Employés</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/abscenceRegistration" active>Inscription abscence</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/leaveRegistration">Inscription congé</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/leaveRequest">Démissions</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/publicHoliday">Jours fériés</Link></li>
            <li className="nav-item"><Link className="nav-link" to="./public/pages/forms/basic_elements.html">Téléchargé/Transféré Employés</Link></li>
            <li className="nav-item"><Link className="nav-link" to="./public/pages/forms/basic_elements.html">Téléchargé/Transféré Employés par bloc</Link></li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
          <i className="icon-bar-graph menu-icon"></i>
          <span className="menu-title">Planification</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="charts">
        <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <Link className="nav-link" to="/presenceRules">Régle de présence/Horaires</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/workCycle">Cycle de travail</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/planingList">Liste des Planing</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/AssignmentPlaningToEmployees">Affectation planing au employés</Link></li>
              <li className="nav-item"> <Link className="nav-link" to="/AssignmentPlaningToDepartments">Affectation planing au départements</Link></li>
            </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
          <i className="icon-grid-2 menu-icon"></i>
          <span className="menu-title">Pointage et calcul</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="tables">
        <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <Link className="nav-link" to="/attendanceLog">Journal de présence</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/manualPointing">Pointage manuelle</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/personalCumul">Cumul personnel</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/departmentCumul">Cumul par département</Link></li>

          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
          <i className="icon-contract menu-icon"></i>
          <span className="menu-title">Rapports</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="icons">
        <ul className="nav flex-column sub-menu">
            <li className="nav-item"> <Link className="nav-link" to="/DailyReportDepartments">Rapport journalier/Départements</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/DailyReportEmployees">Rapport journalier/Tous les employés</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/DailyMonthDepartments">Rapport mensuelle/Département</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/DailyMonthEmployees">Rapport mensuelle/Tous les employés</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/DailySuppHours">Rapport heure supp</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/DailyAbsenceDay">Rapport des abscences/Jour</Link></li>
            <li className="nav-item"> <Link className="nav-link" to="/DailyAbsenceEmployees">Rapport des abscences/Employé</Link></li>


          </ul>
        </div>
      </li>
 
    </ul>
  </nav>
</div>



</div>


<div>
<div class="container-fluid page-body-wrapper">
  <div class="main-panel">
    <div class="content-wrapper">  
      <div class="row" >
    <div class="col-md-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <p class="card-title">Table des jours fériés</p>
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table id="example" class="display expandable-table" style={{'width':'100%'}}>
                  <thead>
                  <tr role="row">
                    <th class="select-checkbox sorting_disabled" rowspan="1" colspan="1" aria-label="Quote#" style={{"width": "70px;"}}>Jour férié</th>
                    <th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Product: activate to sort column descending" style={{"width": "51px;"}} aria-sort="ascending">Date</th>
                  
                  </tr>    
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td class=" select-checkbox">Incs234</td>
                      <td class="sorting_1">Car insurance</td>
                  
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
</div>
  );
}



export default PublicHoliday;

