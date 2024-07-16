import { useSpotifyLogin } from "../Hooks/useSpotifyLogin";

export function Profile() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  // const clientId = "13f6cc16e88b452db78769d2ca4487b3";
  const userProfile = useSpotifyLogin(code ?? "");
  return (
    <div className="text-spotifyGreen">
      <h1 className="text-spotifyGreen text-4xl">
        {userProfile?.display_name}
      </h1>
      <p className="text-spotifyGreen text-4xl">{userProfile?.email}</p>
    </div>
  );
}
