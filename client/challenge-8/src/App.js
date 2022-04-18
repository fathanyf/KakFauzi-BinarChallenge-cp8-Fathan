import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import EditPlayer from "./components/EditPlayer";
import Navbar from "./components/navbar";
import PlayerJSON from "./components/PlayerJSON";
import PlayerList from "./components/PlayerList";
import SearchPage from "./components/SearchPage";
import SubmitPlayer from "./components/SubmitPlayer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <div className="row justify-content-center">
          <div className="col">
            <Routes>
              <Route path="/" element={<PlayerJSON />}></Route>
              <Route path="/submit" element={<SubmitPlayer />}></Route>
              <Route path="/api/players" element={<PlayerList />}></Route>
              <Route path="/add" element={<AddPlayer />}></Route>
              <Route path="/edit/:1" element={<EditPlayer />}></Route>
              <Route path="/search" element={<SearchPage />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;