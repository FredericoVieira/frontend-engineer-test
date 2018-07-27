import React from 'react'
import { Link } from 'react-router-dom'

class Stock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      symbol: props.match.params.symbol,
    }
  }

  componentDidMount() {
    fetch(`https://api.iextrading.com/1.0/stock/${this.state.symbol}/batch?types=company,price,previous,chart&range=1m&last=1`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        },
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) return <div>Error: {error.message}</div>
    if (!isLoaded) return <div>Loading...</div>
    return (
      <section className="section-stock">
        <div className="stock-wrapper">
          <Link className="back-link" to="/">
            &lt; Back
          </Link>
          <h1 className="stock__title">
            {items.company.symbol}
          </h1>
          <div className="stock__infos">
            <div className="stock__text-box">
              <h1 className="heading-stock">
                <span className="heading-stock--main">
                  {items.company.companyName}
                </span>
                <span className="heading-stock--sub">
                  {items.company.sector}
                </span>
              </h1>
            </div>
            <div className="grid">
              <div className="grid__item">
                <span className="grid__item--title">Price</span>
                {items.price}
              </div>
              <div className="grid__item">
                <span className="grid__item--title">Date</span>
                {items.previous.date}
              </div>
              <div className="grid__item">
                <span className="grid__item--title">High</span>
                {items.previous.high}
              </div>
              <div className="grid__item">
                <span className="grid__item--title">Low</span>
                {items.previous.low}
              </div>
              <div className="grid__item">
                <span className="grid__item--title">Change</span>
                {items.previous.change}
              </div>
              <div className="grid__item">
                <span className="grid__item--title">Change %</span>
                {items.previous.changePercent}
              </div>
              <div className="grid__item">
                <span className="grid__item--title">Open</span>
                {items.previous.open}
              </div>
              <div className="grid__item">
                <span className="grid__item--title">Close</span>
                {items.previous.close}
              </div>
              <div className="grid__item">
                <span className="grid__item--title">Volume</span>
                {items.previous.volume}
              </div>
            </div>
            <div className="stock__about">
              <h1 className="stock__about--title">
                About
              </h1>
              <div className="row">
                <div className="column description">
                  <div>{items.company.description}</div>
                </div>
                <div className="column">
                  <div className="column__padding">
                    <span className="column__title">Industry</span>
                    {items.company.industry}
                  </div>
                  <div className="column__padding">
                    <span className="column__title">CEO</span>
                    {items.company.CEO}
                  </div>
                  <div className="column__padding">
                    <span className="column__title">Website</span>
                    {items.company.website}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Stock
