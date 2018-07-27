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
            {items.company.companyName}
          </h1>
          <div>{items.company.industry}</div>
          <div>{items.company.website}</div>
          <div>{items.company.CEO}</div>
          <div>{items.company.tags[0]}</div>
          <div>{items.company.description}</div>
          <div className="stock__infos">
            <div className="grid">
              <div className="grid-item"><span>Price</span>{items.price}</div>
              <div className="grid-item"><span>Date</span>{items.previous.date}</div>
              <div className="grid-item"><span>High</span>{items.previous.high}</div>
              <div className="grid-item"><span>Low</span>{items.previous.low}</div>
              <div className="grid-item"><span>Change</span>{items.previous.change}</div>
              <div className="grid-item"><span>Change %</span>{items.previous.changePercent}</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Stock
