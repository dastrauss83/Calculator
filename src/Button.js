const Button = ({ value, onClick, variant }) => {
  return (
    <div
      className={`Button ${variant}`}
      value={value}
      onClick={() => onClick(value, variant)}
    >
      {value}
    </div>
  );
};

export default Button;
