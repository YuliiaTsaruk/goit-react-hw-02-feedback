export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button onClick={onLeaveFeedback} key={option}>
            {option}
          </button>
        );
      })}
    </div>
  );
};
