import { useState } from "react";
import "../css/acceuilComp.css";
import { Link, useLocation } from "react-router-dom";
import fontLog from "../assets/fontLog.jpg";

function AcceuilComp() {
  return (
    <div className="centreacceuil">
      <div className="noir"></div>
      <div className="centreacceuil_1">
        <h2 id="titre1">Voyager en paix</h2>
        <p>Le bonheur de voyager se trouve <br />à votre disposition
        </p>
        <Link to="/Reserver">
        <button id="btn_reserver">Réserver </button>
        </Link>
      </div>
    </div>
  );
}

export default AcceuilComp;
