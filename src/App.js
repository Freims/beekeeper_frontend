import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";

import Layout from "./components/layout/Layout";
import LoginPage from "../src/pages/login-page/LoginPage";
import Test from "./components/test/Test";
import HomePage from "./pages/home-page/HomePage";
import ClassesPage from "./pages/classes-page/ClassesPage";
import AuthGuard from "./components/auth-guard/AuthGuard";
import CurrentUserContext from "./contexts/current-user/CurrentUserContext";

const App = () => {

  return (
    <Switch>
      <AuthGuard>
        <Route exact path="/login" component={LoginPage} />
        <CurrentUserContext.Consumer>
          {({ isLoggedIn }) =>
            isLoggedIn ? 
            <Layout>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/clases" component={ClassesPage} />
              <Route exact path="/freims2">
                <Test pepe={"esto funciona freims!!!"} />
              </Route>
            </Layout>
            : <Redirect to='/login' />
          }
        </CurrentUserContext.Consumer>
      </AuthGuard>
    </Switch >
  )
}
export default App;
