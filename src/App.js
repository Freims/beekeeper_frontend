import React from 'react';
import Test from './components/test/Test';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import Layout from './components/layout/Layout';


const App = () =>
  <Switch>
      <Route exact path="/pepe" component={Test} />
      <Layout>
        <Route path="/">
          <Test pepe={"esto funciona!!!"} />
        </Route>
        <Route path="/freims">
          <Test pepe={"esto funciona freims!!!"} />
        </Route>
      </Layout>
  </Switch>

export default App;
