import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout/Layout";
import { PostsPage } from "./pages";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact render={() => <Redirect to={ROUTES.main} />} />
        <Route exact path={ROUTES.main} component={PostsPage} />
      </Switch>
    </Layout>
  );
}

export default App;
