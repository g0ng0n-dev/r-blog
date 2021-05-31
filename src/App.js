import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout/Layout";
import { PostsPage } from "./pages";
import theme from '../src/theme/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path="/" exact render={() => <Redirect to={ROUTES.main} />} />
            <Route exact path={ROUTES.main} component={PostsPage} />
          </Switch>
        </Layout>
      </ThemeProvider>
  );
}

export default App;
