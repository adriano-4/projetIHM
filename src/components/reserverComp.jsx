import { useState } from "react";
import "../css/reserverComp.css";
import { Link, useLocation } from "react-router-dom";
import fontLog from "../assets/fontLog.jpg";
import Voiture_dispo from "./voiture_dispo";

function ReserverComp() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [timeOfDay, setTimeOfDay] = useState("morning");

  const cities = [
    "Antananarivo",
    "Antsirabe",
    "Ambositra",
    "Fianarantsoa",
    "Antsiranana",
    "Mahajanga",
  ];

  const handleTravelerChange = (operation) => {
    if (operation === "increment" && travelers < 10) {
      setTravelers(travelers + 1);
    } else if (operation === "decrement" && travelers > 1) {
      setTravelers(travelers - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      departure,
      arrival,
      reservationDate,
      travelers,
      timeOfDay,
    });
  };

  return (
    <div className="centrereserver">
      <div className="centrereserver_1">
        <h2>Choisissez votre itinéraire</h2>
        <form>
          <div className="form-group">
            <label htmlFor="departure">Départ:</label>
            <select
              id="departure"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            >
              <option value="">Sélectionnez une ville</option>
              {cities.map((city) => (
                <option key={`dep-${city}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="arrival">Arrivée:</label>
            <select
              id="arrival"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            >
              <option value="">Sélectionnez une ville</option>
              {cities.map((city) => (
                <option key={`arr-${city}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="reservationDate">Date de réservation:</label>
            <input
              type="date"
              id="reservationDate"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Nombre de voyageurs:</label>
            <div className="travelers-control">
              <button
                type="button"
                className="travelers-btn"
                onClick={() => handleTravelerChange("decrement")}
              >
                -
              </button>
              <span className="travelers-count">{travelers}</span>
              <button
                type="button"
                className="travelers-btn"
                onClick={() => handleTravelerChange("increment")}
              >
                +
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Heure de départ:</label>
            <div className="time-options">
              <label>
                <input
                  type="radio"
                  name="timeOfDay"
                  value="morning"
                  checked={timeOfDay === "morning"}
                  onChange={() => setTimeOfDay("morning")}
                />
                Matin
              </label>
              <label>
                <input
                  type="radio"
                  name="timeOfDay"
                  value="afternoon"
                  checked={timeOfDay === "afternoon"}
                  onChange={() => setTimeOfDay("afternoon")}
                />
                Midi
              </label>
              <label>
                <input
                  type="radio"
                  name="timeOfDay"
                  value="evening"
                  checked={timeOfDay === "evening"}
                  onChange={() => setTimeOfDay("evening")}
                />
                Soir
              </label>
            </div>
          </div>

          <button className="submit-btn">
            <span>Recherche </span>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="centrereserver_2">
        <div className="cover">
          <div className="cov1">
            <div className="cube"></div>
            <p>Place Libre</p>
          </div>
          <div className="cov2">
            <div className="cube"></div>
            <p>Place occupé</p>
          </div>
          <div className="cov3">
            <div className="cube"></div>
            <p>Vos places</p>
          </div>
          <div className="cov4">
            <div className="cube">
              <i className="fa fa-user"></i>
            </div>
            <p>Chauffeur</p>
          </div>
        </div>
        <Voiture_dispo />
        <Voiture_dispo />
        <Voiture_dispo />
        <Voiture_dispo />
      </div>
    </div>
  );
}

export default ReserverComp;
