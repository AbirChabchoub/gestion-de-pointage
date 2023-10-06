
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Employee from './components/employee';
import Machine from './components/machine';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Machine" element={<Machine/>} />
        <Route path="/Employee" element={<Employee/>} />
        {/* Additional routes */}
      </Switch>
    </Router>
  );
};

export default Routes;
