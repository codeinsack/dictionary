import React from 'react';
import { Link, withRouter } from "react-router-dom"

import {
  Tab,
  Tabs as Wrapper,
} from "@material-ui/core";

const Tabs = ({ location }) => {
  return (
    <Wrapper
      value={location.pathname}
      indicatorColor="primary"
      textColor="primary"
    >
      <Tab label="Word definition" component={Link} to="/" value="/" />
      <Tab label="Dictionary" component={Link} to="/dictionary" value="/dictionary" />
      <Tab label="Practice" component={Link} to="/practice" value="/practice" />
      <Tab label="Progress" component={Link} to="/progress" value="/progress" />
    </Wrapper>
  );
};

export default withRouter(Tabs);
