import React from "react";
import RegistrationInfo from "../../Components/RegistrationInfo/RegistrationInstruction";
import Registration_form from "../../Registration_form";
import "./Registration.css";
export default function Registration() {
  return (
    <div class="reg">
      <RegistrationInfo />
      <Registration_form />
    </div>
  );
}
