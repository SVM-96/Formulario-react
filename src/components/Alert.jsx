import React from "react";

const Alert = ({ success, message }) => {
  return (
    <div className={`alert ${success ? "alert-success" : "null"}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
