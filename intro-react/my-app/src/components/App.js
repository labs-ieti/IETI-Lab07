import React from 'react';
import{ BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import TaskNew from '../pages/TaskNew'
import NotFound from '../pages/NotFound'

const App =() => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/newTask" component={TaskNew}/>
        <Route component={NotFound}/>
      </Switch>
  </BrowserRouter>
)

export default App;