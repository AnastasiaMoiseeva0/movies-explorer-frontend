import "./ErrorMessage.css";

function ErrorMessage({message, className}) {
  return (
    <span className={`error-message ${className}`}>{message}</span>
  );
}

export default ErrorMessage;
