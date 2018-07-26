import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App
