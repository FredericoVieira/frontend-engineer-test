import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Ranking from './Ranking'
import Stock from './Stock'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Ranking}/>
    <Route path='/stock/:symbol' component={Stock}/>
    <Route component={Ranking}/>
  </Switch>
)

export default Main
