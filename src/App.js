import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.scss";

import Layout from "./components/layout/Layout";
import LoginPage from "../src/pages/login-page/LoginPage";
import Test from "./components/test/Test";
import HomePage from "./pages/home-page/HomePage";
import ClassesPage from "./pages/classes-page/ClassesPage";

const App = () => {
  let location = useLocation();

  return (
    <Switch location={location}>
      <Route exact path="/login" component={LoginPage} />
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/clases" component={ClassesPage} />
        <Route exact path="/freims2">
          <Test pepe={"esto funciona freims!!!"} />
        </Route>
      </Layout>
    </Switch >
  )
}
export default App;
