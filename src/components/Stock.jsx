import React from 'react'

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      symbol: props.match.params.symbol
    };
  }

  componentDidMount() {
    fetch(`https://api.iextrading.com/1.0/stock/${this.state.symbol}/batch?types=quote,news,chart&range=1m&last=1`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.news.map(item => (
            <li key={item.related}>
              {item.related}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Stock

