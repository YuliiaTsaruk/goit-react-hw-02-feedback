export const Button = ({ name, value, onUpdate }) => {
  return (
    <button onClick={onUpdate}>
      {name}: {value}
    </button>
  );
};
