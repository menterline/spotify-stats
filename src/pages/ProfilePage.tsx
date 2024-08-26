import { useSpotifyLogin } from "../Hooks/hooks";
import { Profile } from "../Components/Profile";

export function ProfilePage() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const token = useSpotifyLogin(code ?? "");

  if (!token) {
    return <div>Not logged in</div>;
  }
  return <Profile token={token} />;
}
