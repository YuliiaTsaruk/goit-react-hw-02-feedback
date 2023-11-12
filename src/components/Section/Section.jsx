import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

export const Section = ({
  title,
  state,
  total,
  countPositiveFeedback,
  onLeaveFeedback,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      {title === 'Please leave feedback' ? (
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      ) : (
        <Statistics
          state={state}
          total={total}
          countPositiveFeedback={countPositiveFeedback}
        ></Statistics>
      )}
    </div>
  );
};
