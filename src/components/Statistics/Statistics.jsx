import { Notification } from '../Notification/Notification';
export const Statistics = ({
  state: { good, neutral, bad },
  countPositiveFeedback,
  total,
}) => {
  return (
    <div>
      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {countPositiveFeedback}%</p>
        </div>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
