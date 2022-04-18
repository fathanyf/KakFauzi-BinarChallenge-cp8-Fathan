import { useState } from "react";
import { useNavigate } from "react-router-dom";
import players from "./data/players.json";

const SubmitPlayer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newPlayer = {
      username: username,
      email: email,
      experience: experience,
    };
    players.push(newPlayer);
    navigate("/");
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card mt-3 mx-auto">
            <div className="card-header text-center">
              <h5 className="card-title">Form Create a New Player</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                  <label>Experience</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter Experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button type="submt" className="btn btn-success">
                    Create
                  </button>
                  <h6 className="mt-3">Submit data to JSON</h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPlayer;