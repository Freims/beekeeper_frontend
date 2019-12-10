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
import { fetchUserSession } from "./utils/response-handler";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    fetchUserSession(setCurrentUser)
  }, [setCurrentUser])

  return (
    <Switch>
      <Route exact path="/login">
        {currentUser.id ? (<Redirect to='/' />) : (<LoginPage />)}
      </Route>
      <Layout>
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/clases" component={ClassesPage} />
        <ProtectedRoute exact path="/clases/:classId" component={ClassPage} />
        <ProtectedRoute exact path="/test">
          <Test pepe={"esto funciona freims!!!"} />
        </ProtectedRoute>
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
