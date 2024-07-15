import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import { Profile } from "./Components/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <QueryClientProvider client={queryClient}>
            <Route path="/spotify-stats" element={<LandingPage />} />
            <Route path="/spotify-stats/profile" element={<Profile />} />h
          </QueryClientProvider>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
