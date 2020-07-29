import './App.css';
import React, { Component } from 'react'
import Form from './components/Form'
import Manager from './components/Manager'
import Home from './components/Home'
import {Route,HashRouter,Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/form" component={Form}></Route>
          <Route path="/manager" component={Manager}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default App;
