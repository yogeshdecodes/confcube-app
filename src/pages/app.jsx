import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Profile from "../components/Profile"
import Detail from "../components/Detail"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = (props) => {
 const eventdetails="";
  if (typeof window !== 'undefined') {eventdetails=props.location.state.EventDetails}
 
  return(
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/detail" component={Detail} EventDetails={eventdetails} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)}

export default App
