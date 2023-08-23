import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Employee from './pages/employee';
import DepartementSettings from "./pages/departmentSettings"
import AbsenceRegistration from './pages/absenceRegistration';
import LeaveRegistration from './pages/leaveRegistration';
import PublicHoliday from './pages/publicHoliday';
import PresenceRules from './pages/presenceRules';
import WorkCycle from './pages/workCycle';
import PlanningList from './pages/planingList';
import LeaveRequest from './pages/leaveRequest';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import DownloadPT from './pages/downloadPT';
import TerminalManagement from './pages/terminalManagement';
import AddEmployee from './pages/addEmployee';
import AddDepartement from './pages/addDepartement';
import AddAbscence from './pages/addAbscenceForm';
import AddLeave from './pages/addLeave';
import PlanningAssignmentEmp from './pages/planningAssignmentEmployee';
import PlanningAssignmentDep from './pages/planningAssignmentDep';
import AttendanceLog from './pages/attendanceLog';
import ManualPointing from './pages/manualPointing';
import PersonalCumul from './pages/personalCumul';
import DepartementCumul from './pages/departementCumul';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/downloadPT" exact element={<DownloadPT />} />
        <Route path="/terminalManagement"  element={<TerminalManagement />} />
        <Route path="/departmentSettings" element={<DepartementSettings />} />
        <Route path="/employees" element={<Employee/>}/>
        <Route path="/abscenceRegistration" element={<AbsenceRegistration/>}/>
        <Route path="/leaveRegistration" element={<LeaveRegistration/>}/>
        <Route path="/leaveRequest" element={<LeaveRequest/>}/>
        <Route path="/publicHoliday" element={<PublicHoliday/>}/>
        <Route path="/presenceRules" element={<PresenceRules/>}/>
        <Route path="/workCycle" element={<WorkCycle/>}/>
        <Route path="/planingList" element={<PlanningList/>}/>
        <Route path="/addEmployee" element={<AddEmployee/>}/>
        <Route path="/addDepartement" element={<AddDepartement/>}/>
        <Route path="/addAbscence" element={<AddAbscence/>}/>
        <Route path="/addLeave" element={<AddLeave/>}/>
        <Route path="/AssignmentPlaningToEmployees" element={<PlanningAssignmentEmp/>}/>
        <Route path="/AssignmentPlaningToDepartments" element={<PlanningAssignmentDep/>}/>
        <Route path="/AttendanceLog" element={<AttendanceLog/>}/>
        <Route path="/manualPointing" element={<ManualPointing/>}/>
        <Route path="/personalCumul" element={<PersonalCumul/>}/>
        <Route path="/departmentCumul" element={<DepartementCumul/>}/>











      </Routes>

  
    </div>
  );
}

export default App;