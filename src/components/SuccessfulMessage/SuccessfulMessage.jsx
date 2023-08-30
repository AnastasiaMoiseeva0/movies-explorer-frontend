import "./SuccessfulMessage.css";

function SuccessfulMessage({message, className}) {
  return (
    <span className={`successful-message ${className}`}>{message}</span>
  );
}

export default SuccessfulMessage;