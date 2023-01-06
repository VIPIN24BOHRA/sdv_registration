import React from "react";
import "./RegInfo.css";
export default function RegistrationInfo() {
  return (
    <div className="reg_info">
      <h1>Registration Instruction.</h1>
      <ol>
        <li>Scan the QR provided for the payment</li>
        <li>Pay the amount decided by the organisation members</li>
        <li>Fill the information of your Team.</li>
        <li>
          Also upload the screenshot of your payment for verification and
          confirming your participation.
        </li>
      </ol>
    </div>
  );
}
