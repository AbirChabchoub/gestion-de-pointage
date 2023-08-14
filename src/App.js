
import './App.css';
import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './pages/employee';
import Machine from './pages/machine';
import departementSettings from './pages/departmentSettings';



function App() {
  return (
    <div>

      <Routes>
        <Route exact path="/" element={<Machine />} />
        <Route path="/departmentSettings" element={<departementSettings/>} />
      </Routes>


    </div>
  );
}

export default App;
