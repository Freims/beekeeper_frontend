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
import ClassPage from "./pages/class-page/ClassPage";

const App = () => {

  return (
    <Switch>
      <AuthGuard>
        <Route exact path="/login" component={LoginPage} />
        <CurrentUserContext.Consumer>
          {({ isLoggedIn, userDetails }) =>
            // isLoggedIn ?
            <Layout userDetails={userDetails}>
              <Route exact path="/">
                <HomePage userDetails={userDetails} />
              </Route>
              <Route exact path="/clases" component={ClassesPage} />
              <Route path="/clases/:classId" component={ClassPage} />
              <Route exact path="/freims2">
                <Test pepe={"esto funciona freims!!!"} />
              </Route>
            </Layout>
            // : <Redirect to='/login' />
          }
        </CurrentUserContext.Consumer>
      </AuthGuard>
    </Switch >
  )
}
export default App;
