import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div className="container-fluid page-body-wrapper">

        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="icon-grid menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <i className="ti-desktop menu-icon"></i>
                <span className="menu-title">Machine</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className="nav-link" to="/downloadPT">Téléchargé pointages</Link></li>
                  <li className="nav-item"> <Link className="nav-link" to="/terminalManagement">Gestion des terminaux</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                <i className="ti-user menu-icon"></i>
                <span className="menu-title">Employés</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="form-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><Link className="nav-link" to="/departmentSettings">Paramètres des départements</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/employees">Employés</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/abscenceRegistration" active="true">Inscription abscence</Link></li>
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
                <i className="ti-calendar menu-icon"></i>
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
                <i className="ti-hand-stop menu-icon"></i>
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
                <i className="ti-agenda menu-icon"></i>
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


  )

}

export default Sidebar