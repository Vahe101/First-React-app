export const Button = ({ onClick, value }) => {
  return (
    <button className="button" onClick={onClick}>
      {value}
    </button>
  );
};
