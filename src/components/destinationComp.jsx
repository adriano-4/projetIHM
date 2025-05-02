import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fontLog from "../assets/fontLog.jpg";
import "../css/destinationComp.css";
import Desti from "./desti";
import Footer from "./footer";

function DestinationComp() {
  const positions = [
    "Antananarivo",
    "Fianarantsoa",
    "Antsirabe",
    "Ambositra",
    "Antsiranana",
    "Mahajanga",
  ];

  return (
    <div className="centredestination">
      <h3>Plusieurs destinations disponibles</h3>
      <p>Choisissez celle qui vous convient</p>
      <div className="centredestination_1">
        {positions.map((position, index) => (
          <Desti key={index} destination_titre={position} />
        ))}
      </div>
    </div>
  );
}

export default DestinationComp;
