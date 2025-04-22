import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/crud.css";

function Crud({ titre, headers = [] }) {
  return (
    <div className="crud_cont">
      <div className="entete">
        <div className="entete_1">
          <p>Listes des {titre}s:</p>
        </div>
        <div className="entete_2">
          <input type="text" placeholder="recherche..." />
          <button>
            <i className="fa fa-plus"></i> <span>Ajouter</span>
          </button>
        </div>
      </div>
      <div className="bas">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th id="action" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>fzef</td>
              <td>fzef</td>
              <td>fzef</td>
              <td>fzef</td>
              <td>fzef</td>
              <td id="butt">
                <button className="modifier">
                  <i className="fa fa-edit"></i>
                </button>
              </td>
              <td id="butt">
                <button className="supprimer">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
