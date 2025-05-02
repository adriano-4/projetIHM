import { useState } from "react";
import "../css/aide.css";
import { Link, useLocation } from "react-router-dom";
import translogo from "../assets/translogo.png";

function Aide({ setShowAide }) {
  return (
    <div className="centre_aide">
      <button id="btn_next" className="btn_next_1">
        <i className="fa fa-chevron-left"></i>
      </button>
      <div className="centre_aide1">
        <div className="entete_aide">
          <img src={translogo} alt="" />
          <div className="boule">
            <div className="boule1"></div>
            <div className="boule1"></div>
            <div className="boule1"></div>
          </div>
          <button onClick={() => setShowAide(false)}>
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="bas_aide">
          <div className="bas_aide1"></div>
          <div className="bas_aide2"></div>
          <div className="bas_aide3"></div>
        </div>
      </div>
      <button id="btn_next" className="btn_next_2">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Aide;
