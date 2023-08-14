import React from "react";
function Sidebar(){
return(
<div>
<div class="container-fluid page-body-wrapper">

    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <i class="icon-grid menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i class="icon-layout menu-icon"></i>
            <span class="menu-title">Machine</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="./public/pages/ui-features/buttons.html">Téléchargé pointages</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/ui-features/dropdowns.html">Gestion des terminaux</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
            <i class="icon-columns menu-icon"></i>
            <span class="menu-title">Employés</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="form-elements">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><a class="nav-link" href="/departmentSettings">Paramétres des départements</a></li>
              <li class="nav-item"><a class="nav-link" href="./public/pages/forms/basic_elements.html">Employés</a></li>
              <li class="nav-item"><a class="nav-link" href="./public/pages/forms/basic_elements.html">Inscription abscence</a></li>
              <li class="nav-item"><a class="nav-link" href="./public/pages/forms/basic_elements.html">Inscription congé</a></li>
              <li class="nav-item"><a class="nav-link" href="./public/pages/forms/basic_elements.html">Démissions</a></li>
              <li class="nav-item"><a class="nav-link" href="./public/pages/forms/basic_elements.html">Jours fériés</a></li>
              <li class="nav-item"><a class="nav-link" href="./public/pages/forms/basic_elements.html">Téléchargé/Transféré Employés</a></li>
              <li class="nav-item"><a class="nav-link" href="./public/pages/forms/basic_elements.html">Téléchargé/Transféré Employés par bloc</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
            <i class="icon-bar-graph menu-icon"></i>
            <span class="menu-title">Planification</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="charts">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="./public/pages/charts/chartjs.html">Régle de présence/Horaires</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/charts/chartjs.html">Cycle de travail</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/charts/chartjs.html">Liste des Planing</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/charts/chartjs.html">Affectation planing au employés</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/charts/chartjs.html">Affectation planing au départements</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
            <i class="icon-grid-2 menu-icon"></i>
            <span class="menu-title">Pointage et calcul</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="tables">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="./public/pages/tables/basic-table.html">Journal de présence</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/tables/basic-table.html">Pointage manuelle</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/tables/basic-table.html">Cumul personnel</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/tables/basic-table.html">Cumul par département</a></li>

            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
            <i class="icon-contract menu-icon"></i>
            <span class="menu-title">Rapports</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="icons">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="./public/pages/icons/mdi.html">Rapport journalier/Départements</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/icons/mdi.html">Rapport journalier/Tous les employés</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/icons/mdi.html">Rapport mensuelle/Département</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/icons/mdi.html">Rapport mensuelle/Tous les employés</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/icons/mdi.html">Rapport heure supp</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/icons/mdi.html">Rapport des abscences/Jour</a></li>
              <li class="nav-item"> <a class="nav-link" href="./public/pages/icons/mdi.html">Rapport des abscences/Employé</a></li>


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