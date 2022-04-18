import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddPlayer() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const addPlayer = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/players", {
      username: username,
      email: email,
      password: password,
    });
    navigate("/api/players");
  };

  return (
    <>
      <div className="card mt-5 col-md-6 mx-auto">
        <div className="card-header text-center">
          <h5 className="card-title">Form Create a New Player</h5>
        </div>
        <div className="card-body">
          <form onSubmit={addPlayer}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button type="submt" className="btn btn-success">
                Create
              </button>
              <h6 className="mt-3">Submit data to API</h6>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPlayer;
