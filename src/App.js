import React, { Fragment } from 'react';
import { Switch, Route, Link, withRouter } from "react-router-dom"

import WordDefinition from "./pages/WordDefinition";
import Dictionary from "./pages/Dictionary";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";
import CssBaseline from "@material-ui/core/CssBaseline";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function App({ location }) {
  return (
    <Fragment>
      <CssBaseline />
      <Tabs
        value={location.pathname}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Word definition" component={Link} to="/" value="/" />
        <Tab label="Dictionary" component={Link} to="/dictionary" value="/dictionary" />
        <Tab label="Practice" component={Link} to="/practice" value="/practice" />
        <Tab label="Progress" component={Link} to="/progress" value="/progress" />
      </Tabs>
      <Switch>
        <Route exact path="/" component={WordDefinition} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/practice" component={Practice} />
        <Route path="/progress" component={Progress} />
      </Switch>
    </Fragment>
  );
}

export default withRouter(App);
