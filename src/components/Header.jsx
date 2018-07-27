import React from 'react'
import logo from '../images/logo-white.png'


const App = () => (
  <header className="header">
    <div className="header__logo-box">
      <img alt="Logo" className="header__logo" src={logo} />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">
          FDValues
        </span>
        <span className="heading-primary--sub">
          Stock exchange
        </span>
      </h1>

      <div className="header__filter">
        Filter goes here
      </div>
    </div>
  </header>
)

export default App
