import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clientFeedback = feedbackType => {
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const totalFeedbacks =
      this.state.good + this.state.neutral + this.state.bad;

    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const positiveFeedbacks = (100 * (this.state.good / total)).toFixed(2);
    return Number(positiveFeedbacks);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
          padding: 40,
        }}
      >
        <section>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.clientFeedback}
            />
          </Section>
          <Section title="Statistics">
            {!total ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            )}
          </Section>
        </section>
      </div>
    );
  }
}
export { App };
