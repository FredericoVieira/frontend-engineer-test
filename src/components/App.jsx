import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Ranking from './Ranking'
import Stock from './Stock'
import Footer from './Footer'


const App = () => (
  <main>
    <Switch>
      <Route
        component={() => (
          <div>
            <Header />
            <Ranking />
          </div>
        )}
        exact
        path="/"
      />
      <Route component={Stock} path="/stock/:symbol" />
      <Route component={Ranking} />
    </Switch>
    <Footer />
  </main>
)

export default App
