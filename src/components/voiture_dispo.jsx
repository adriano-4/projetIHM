import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/voiture_dispo.css";
import "font-awesome/css/font-awesome.min.css";

function Voiture_dispo() {
  const [selectedPlaces, setSelectedPlaces] = useState([]);
   const prixUnitaire = 20000;

  const handlePlaceClick = (e) => {
    const placeDiv = e.target.closest(".place_d");
    if (!placeDiv || placeDiv.id === "non" || placeDiv.id === "chauffeur")
      return;

    const placeNumber = placeDiv.textContent;
    if (!placeNumber) return;

    setSelectedPlaces((prev) => {
      if (prev.includes(placeNumber)) {
        return prev.filter((p) => p !== placeNumber);
      }
      return [...prev, placeNumber];
    });
  };
  const prixTotal = selectedPlaces.length * prixUnitaire;

  return (
    <div className="voiture_dispo">
      <div className="place" onClick={handlePlaceClick}>
        <div className="range">
          <div className="place_d" id="chauffeur">
            <i className="fa fa-user"></i>
          </div>
          <div className="place_d" id="non"></div>
          <div
            className={`place_d ${
              selectedPlaces.includes("1") ? "selected" : ""
            }`}
          >
            1
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("2") ? "selected" : ""
            }`}
          >
            2
          </div>
        </div>
        <div className="range">
          <div
            className={`place_d ${
              selectedPlaces.includes("3") ? "selected" : ""
            }`}
          >
            3
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("4") ? "selected" : ""
            }`}
          >
            4
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("5") ? "selected" : ""
            }`}
          >
            5
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("6") ? "selected" : ""
            }`}
          >
            6
          </div>
        </div>
        <div className="range">
          <div
            className={`place_d ${
              selectedPlaces.includes("7") ? "selected" : ""
            }`}
          >
            7
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("8") ? "selected" : ""
            }`}
          >
            8
          </div>
          <div className="place_d" id="non"></div>
          <div
            className={`place_d ${
              selectedPlaces.includes("9") ? "selected" : ""
            }`}
          >
            9
          </div>
        </div>
        <div className="range">
          <div
            className={`place_d ${
              selectedPlaces.includes("10") ? "selected" : ""
            }`}
          >
            10
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("11") ? "selected" : ""
            }`}
          >
            11
          </div>
          <div className="place_d" id="non"></div>
          <div
            className={`place_d ${
              selectedPlaces.includes("12") ? "selected" : ""
            }`}
          >
            12
          </div>
        </div>
        <div className="range">
          <div
            className={`place_d ${
              selectedPlaces.includes("13") ? "selected" : ""
            }`}
          >
            13
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("14") ? "selected" : ""
            }`}
          >
            14
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("15") ? "selected" : ""
            }`}
          >
            15
          </div>
          <div
            className={`place_d ${
              selectedPlaces.includes("16") ? "selected" : ""
            }`}
          >
            16
          </div>
        </div>
      </div>
      <div className="trajet">
        <div className="traj_1">
          <h3>Antananarivo</h3>
          <i class="fa fa-arrow-right"></i>
          <h3>Fianarantsoa</h3>
        </div>
        <div id="donn" className="donn1">
          <p>Départ :&nbsp;</p> <span>19:00</span>
        </div>
        <div id="donn" className="donn2">
          <p>Prix :&nbsp;</p> <span>{prixUnitaire.toLocaleString()}&nbsp;</span>
          <span>Ar</span>
        </div>
        <div id="donn" className="donn3">
          <p>Place libre :&nbsp;</p> <span>12</span>
        </div>
        <div id="donn" className="donn4">
          <p>A payer :&nbsp;</p> <span>{prixTotal.toLocaleString()}&nbsp;</span>
          <span>Ar</span>
        </div>
      </div>
      <div className="validation">
        <button>
          <p>Valider</p> <i class="fa fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
}

export default Voiture_dispo;
