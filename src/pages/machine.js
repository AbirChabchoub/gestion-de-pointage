import React from "react";
import EmployeesTable from "../components/EmployeesTable";
import Nav from "../components/Nav";


import Sidebar from "../components/Sidebar";
import Foot from "../components/Foot";

function Machine(){
  return (
    <div>
       
    <Nav/>
     <Sidebar/>
  <EmployeesTable/>
   <Foot/>

  </div>

  );
}

  
  export default Machine;