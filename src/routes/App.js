import React from 'react'
import Home from '../containers/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
)
export default App
