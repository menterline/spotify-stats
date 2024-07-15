import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import { Profile } from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/spotify-stats" element={<LandingPage />} />
          <Route path="/spotify-stats/profile" element={<Profile />} />h
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
