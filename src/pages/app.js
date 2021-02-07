import React from 'react';
import { Router } from '@reach/router';
import Profile from '../components/Profile';
import Detail from '../components/Detail';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import DashboardShell from '../components/DashboardShell';

export const isBrowser = () => typeof window !== 'undefined';

const App = (props) => {
  let eventdetails = {};

  isBrowser() && (eventdetails = props.location.state.EventDetails);
  return (
    <DashboardShell>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PrivateRoute
          path="/app/detail"
          component={Detail}
          EventDetails={eventdetails}
        />
        <Login path="/app/login" />
      </Router>
    </DashboardShell>
  );
};

export default App;
