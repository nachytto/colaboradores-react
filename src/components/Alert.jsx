import React from "react";
export const Alert = ({ alertMessage, alertType }) => {
  return (
    <div className={`alert-msj-${alertType}`}>
      {alertMessage && <p>{alertMessage}</p>}
    </div>
  );
};