import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.scss";

import Layout from "./components/layout/Layout";
import LoginPage from "../src/pages/login-page/LoginPage";
import Test from "./components/test/Test";

const App = () => {
  let location = useLocation();

  return (
      <Switch location={location}>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/pepe" component={Test} />
        <Layout>
          <Route exact path="/freims">
            <Test pepe={"esto funciona freims!!!"} />
          </Route>
          <Route exact path="/freims2">
            <Test pepe={"esto funciona freims!!!"} />
          </Route>
        </Layout>
      </Switch>
  )
}
export default App;
