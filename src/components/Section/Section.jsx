import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Container, Title } from './Section.styled';

export const Section = ({
  title,
  state,
  total,
  countPositiveFeedback,
  onLeaveFeedback,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
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
    </Container>
  );
};
