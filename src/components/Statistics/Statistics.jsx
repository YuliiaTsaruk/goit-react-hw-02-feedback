export const Statistics = ({
  state: { good, neutral, bad },
  countPositiveFeedback,
  total,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {countPositiveFeedback}%</p>
    </div>
  );
};
