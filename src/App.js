import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar";
import Dashboard from "./components/dashboard/dashboard-component/Dashboard";
import EventDetails from "./components/events/event-details/EventDetails";
import SignIn from "./components/auth/sign-in/SignIn";
import SignUp from "./components/auth/sign-up/SignUp";
import CreateEvent from "./components/events/create-event/CreateEvent";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/event/:id" component={EventDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateEvent} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
