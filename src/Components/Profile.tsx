import {
  useFetchProfile,
  useSpotifyLogin,
  useTopTracks,
} from "../Hooks/useSpotifyLogin";

// Need to add a folter src/profile/index.html to load this script
export function Profile() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const token = useSpotifyLogin(code ?? "");
  const userProfile = useFetchProfile(token ?? "");
  const topTracks = useTopTracks(token ?? "", "long_term");
  return (
    <div className="text-spotifyGreen flex flex-col gap-8">
      <section>
        <h1 className="text-spotifyGreen text-4xl">
          {userProfile?.display_name}
        </h1>

        <p className="text-spotifyGreen text-4xl">{userProfile?.email}</p>
      </section>
      <section>
        <div className="flex flex-col gap-4">
          <h1 className="text-spotifyGreen text-2xl underline">
            20 top tracks for the last year-ish. Data provided by Spotify
          </h1>
          <div className="text-start">
            {topTracks?.items?.map(
              (track: SpotifyApi.TrackObjectSimplified, i: number) => (
                <p key={i}>
                  {track.name} - {track.artists[0].name}
                </p>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
