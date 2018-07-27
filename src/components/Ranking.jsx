import React from 'react'
import { Link } from 'react-router-dom'

class Ranking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch('https://api.iextrading.com/1.0/tops')
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
    const { error, isLoaded, items } = this.state

    if (error) return <div>Error: {error.message}</div>
    if (!isLoaded) return <div className="loading ranking">Loading...</div>

    items.sort((a, b) => parseFloat(a.lastSalePrice) - parseFloat(b.lastSalePrice)).reverse()
    const sortedItems = items.slice(0, 20)

    return (
      <section className="section-ranking">
        <div className="ranking-table-wrapper">
          <h1 className="ranking-table__title">
            Most daily valuable stocks
          </h1>
          <table className="ranking-table">
            <thead>
              <tr className="ranking-table__header">
                <th className="">
                  Symbol
                </th>
                <th className="">
                  Sector
                </th>
                <th className="">
                  Last Sale Size
                </th>
                <th className="">
                  Last Sale Price
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map(item => (
                <tr key={item.symbol}>
                  <td>
                    <Link className="symbol-link" to={`/stock/${item.symbol}`}>
                      {item.symbol}
                    </Link>
                  </td>
                  <td>
                    {item.sector}
                  </td>
                  <td>
                    {item.lastSaleSize}
                  </td>
                  <td>
                    {item.lastSalePrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  }
}

export default Ranking
