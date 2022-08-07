import { useAppContext } from "./calculatorState";

const Button = ({ type, value }) => {
  const calculator = useAppContext();

  function handleClick() {
    switch (type) {
      case "number":
        calculator.addNumber(parseInt(value));
        break;

      case "operator":
        calculator.addOperation(value);
        break;

      case "action":
        calculator.executeAction(value);
        break;

      default:
    }
  }

  return (
    <button className="calculatorButton" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
