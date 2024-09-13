import { useSpotifyLogin } from "../Hooks/hooks";
import { Profile } from "../Components/Profile";
import { SpotifyButton } from "../Components/SpotifyButton";
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const token = useSpotifyLogin(code ?? "");
  const navigate = useNavigate();
  if (!token) {
    return (
      <div className="flex flex-col gap-16">
        <div className="text-3xl text-spotifyText">Not logged in</div>
        <SpotifyButton label="Login" onClick={() => navigate("/")} />
      </div>
    );
  }
  return <Profile token={token} />;
}
