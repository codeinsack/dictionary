import React, { Fragment } from 'react';
import { Switch, Route } from "react-router-dom"

import CssBaseline from "@material-ui/core/CssBaseline";

import WordDefinition from "./pages/WordDefinition";
import Dictionary from "./pages/Dictionary";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";
import Tabs from "./components/UI/Tabs/Tabs";

const App = () => (
  <Fragment>
    <CssBaseline />
    <Tabs />
    <Switch>
      <Route exact path="/" component={WordDefinition} />
      <Route path="/dictionary" component={Dictionary} />
      <Route path="/practice" component={Practice} />
      <Route path="/progress" component={Progress} />
    </Switch>
  </Fragment>
)

export default App;
