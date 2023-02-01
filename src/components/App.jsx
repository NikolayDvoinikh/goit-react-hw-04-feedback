import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedbacks, setVote] = useState({ good: 0, neutral: 0, bad: 0 });

  const clientFeedback = feedbackType => {
    setVote(prevState => {
      return { ...prevState, [feedbackType]: prevState[feedbackType] + 1 };
    });
  };

  const { good, neutral, bad } = feedbacks;
  const totalFeedbacks = good + neutral + bad;

  const positiveFeedbacks = !totalFeedbacks
    ? 0
    : Number((100 * (good / totalFeedbacks)).toFixed(0));

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
            options={Object.keys(feedbacks)}
            onLeaveFeedback={clientFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!totalFeedbacks ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positiveFeedbacks}
            />
          )}
        </Section>
      </section>
    </div>
  );
};

export { App };
