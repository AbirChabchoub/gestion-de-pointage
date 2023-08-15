import './App.css';
import ReactDOM from "react-dom/client";
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Employee from './pages/employee';
import Machine from './pages/machine';
import DepartementSettings from "./pages/departmentSettings"
import AbsenceRegistration from './pages/absenceRegistration';
import LeaveRegistration from './pages/leaveRegistration';
import PublicHoliday from './pages/publicHoliday';
import PresenceRules from './pages/presenceRules';
import WorkCycle from './pages/workCycle';
import PlanningList from './pages/planingList';
import LeaveRequest from './pages/leaveRequest';
import Home from './pages/home';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/departmentSettings" element={<DepartementSettings />} />
        <Route path="/employees" element={<Employee/>}/>
        <Route path="/abscenceRegistration" element={<AbsenceRegistration/>}/>
        <Route path="/leaveRegistration" element={<LeaveRegistration/>}/>
        <Route path="/leaveRequest" element={<LeaveRequest/>}/>
        <Route path="/publicHoliday" element={<PublicHoliday/>}/>
        <Route path="/presenceRules" element={<PresenceRules/>}/>
        <Route path="/workCycle" element={<WorkCycle/>}/>
        <Route path="/planingList" element={<PlanningList/>}/>







      </Routes>

  
    </div>
  );
}

export default App;