import React from "react";
import "./Main.css";
import Image from "../../assets/img.png";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className="main_page">
      <section className="main_section">
        <h1>SDV 4.0</h1>
        <h3>The Self Driving Vehicle Workshop</h3>

        <button className="main_reg_btn">
          <Link
            to="registration"
            style={{ textDecoration: "none", color: "white" }}
          >
            Registration
          </Link>
        </button>
      </section>
      <div className="img_container">
        <img src={Image} className="main_img" />
      </div>
    </div>
  );
}
