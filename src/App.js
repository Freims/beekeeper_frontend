import React from "react";
import Test from "./components/test/Test";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/Layout";
import LoginPage from "../src/pages/login-page/LoginPage";

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/pepe" component={Test} />
    <Layout>
      <Route path="/freims">
        <Test pepe={"esto funciona freims!!!"} />
      </Route>
    </Layout>
  </Switch>
);
export default App;
