import { Component } from 'react';
import { Button } from './FeedbackBtn/FeedbackBtn';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <Button value={good} onUpdate={this.updateGood} name="Good" />
          <Button
            value={neutral}
            onUpdate={this.updateNeutral}
            name="Neutral"
          />
          <Button value={bad} onUpdate={this.updateBad} name="Bad" />
        </div>

        <h2>Statistics</h2>
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}
