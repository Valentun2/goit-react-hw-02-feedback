import { Component } from 'react';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hadleClick = evt => {
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }
    this.setState(prevState => {
      return { [evt.target.name]: prevState[evt.target.name] + 1 };
    });
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100 || 0;
  }

  render() {
    return (
      <>
      <Section title="Please leave feedback"> <FeedbackOptions options={this.state} onLeaveFeedback={this.hadleClick}/></Section>
       
       <Section title="Statistics">  <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        /></Section>
      </>
    );
  }
}
