import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <Box>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </Box>
        <h2>Statistics</h2>
        <Box>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
        </Box>
      </>
    );
  }
}
