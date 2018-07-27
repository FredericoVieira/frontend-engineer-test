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
            items: result.slice(0, 20),
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
    if (!isLoaded) return <div>Loading...</div>
    return (
      <section className="section-ranking">
        <div className="ranking-table-wrapper">
          <table className="ranking-table">
            <thead>
              <tr className="ranking-table__header">
                <th className="">
                  a
                </th>
                <th className="">
                  b
                </th>
              </tr>
            </thead>
            <tbody> 
              {items.map(item => (
                <tr key={item.symbol}>
                  <td>
                    <Link className="symbol-link" to={`/stock/${item.symbol}`}>{item.symbol}</Link>
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
