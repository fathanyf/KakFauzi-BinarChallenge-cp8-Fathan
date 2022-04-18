import React from "react";
import players from "./data/players.json";
import { Link } from "react-router-dom";

function PlayerJSON() {
  return (
    <div>
      <div className="form-inline mt-3">
        <h5>To add player data please</h5>
        <Link className="btn btn-primary font-weight-bold" to="/submit">
          add player
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr className="bg-dark text-light">
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.experience}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerJSON;
