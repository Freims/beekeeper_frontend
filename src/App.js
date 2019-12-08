import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import "./App.scss";

import Layout from "./components/layout/Layout";
import LoginPage from "../src/pages/login-page/LoginPage";
import Test from "./components/test/Test";
import HomePage from "./pages/home-page/HomePage";
import ClassesPage from "./pages/classes-page/ClassesPage";
import ClassPage from "./pages/class-page/ClassPage";
import { setCurrentUser } from "./redux/user/user-actions";
import AuthGuard from "./components/auth-guard/AuthGuard";

const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    let user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    console.log("localStorage user", user)
    if (user != null) {
      setCurrentUser({
        id: user.id,
        dbId: user.dbId,
        name: user.name,
        program: user.program,
        role: user.role
      })
    }
  }, [setCurrentUser])

  return (
    <Switch>
      <Route exact path="/login"
        render={() => currentUser.id ? (<Redirect to='/' />) : (<LoginPage />)}
      />
      <Layout>
        <AuthGuard>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/clases" component={ClassesPage} />
          <Route path="/clases/:classId" component={ClassPage} />
          <Route exact path="/freims2">
            <Test pepe={"esto funciona freims!!!"} />
          </Route>
        </AuthGuard>
      </Layout>
    </Switch >
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
