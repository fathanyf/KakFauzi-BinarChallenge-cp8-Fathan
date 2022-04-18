import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPlayer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editPlayer = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/players/${id}`, {
      username: username,
      email: email,
      password: password,
    });
    navigate("/api/players");
  };

  useEffect(() => {
    getPlayerById();
  }, []);

  const getPlayerById = async () => {
    const response = await axios.get(`http://localhost:5000/api/players/${id}`);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setPassword(response.data.password);
  };

  return (
    <>
      <div className="card mt-5 col-md-6 mx-auto">
        <div className="card-header text-center">
          <h5 className="card-title">Form Edit Player</h5>
        </div>
        <div className="card-body">
          <form onSubmit={editPlayer}>
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPlayer;
