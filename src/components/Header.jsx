import React from 'react'
import { withRouter } from 'react-router-dom'
import Search from 'react-search-box'
import logo from '../images/logo-white.png'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }

    this.handleSearchSelection = this.handleSearchSelection.bind(this)
  }

  componentDidMount() {
    fetch('https://api.iextrading.com/1.0/ref-data/symbols')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result.map(item => Object.assign({}, { name: item.name }, { symbol: item.symbol })),
          })
        },
      )
  }

  handleSearchSelection(value) {
    const symbol = this.state.data.find(a => a.name === value).symbol
    this.props.history.push(`/stock/${symbol}`)
  }

  render() {
    return (
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
          <div className="header__search">
            <Search
              className="header__search--element"
              data={this.state.data}
              onChange={this.handleSearchSelection}
              placeholder="Search for a name..."
              searchKey="name"
            />
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)
