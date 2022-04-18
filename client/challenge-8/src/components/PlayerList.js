import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PlayerList() {
  const [players, setPlayer] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const response = await axios.get("http://localhost:5000/api/players");
    console.log(response.data.message);
    setPlayer(response.data.message);
  };

  const deletePlayer = async (id) => {
    await axios.delete(`http://localhost:5000/api/players/${id}`);
    getPlayers();
  };

  return (
    <div>
      <div className="mt-3 col align-self-end">
        <h6>
          This data is fetched from the API, if the data is not shown try to run
          it and check the API
        </h6>
      </div>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.email}</td>
                <td>{player.experience}</td>
                <td>{player.lvl}</td>
                <td>
                  <Link to={`/edit/${player.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <button
                    onClick={() => deletePlayer(player.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {players.length === 0 && <span>No records found to display!</span>}
    </div>
  );
}

export default PlayerList;
