import { Component } from 'react';
import { Section } from './Section/Section';
import { GlobalStyle } from './GlobalStyled';
import { Container } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    const value = evt.target.textContent.toLowerCase();
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
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
    const total = this.countTotalFeedback();
    const countPositiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section
          title="Please leave feedback"
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Section
          title="Statistics"
          state={this.state}
          total={total}
          countPositiveFeedback={countPositiveFeedback}
        />
        <GlobalStyle />
      </Container>
    );
  }
}
