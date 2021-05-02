import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Inicio from '../containers/Inicio'
import Miproyecto from '../containers/Miproyecto'
import Fase from '../containers/Fase'
import Layout from '../components/Layout'

import '../assets/styles/App.scss'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Inicio} />
        <Route exact path='/miproyecto' component={Miproyecto} />
        <Route exact path='/fase' component={Fase} />
      </Switch>
    </Layout>
  </BrowserRouter>
)
export default App
