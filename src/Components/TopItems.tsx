import { Artist, Track } from "../types/SpotifyEntities";
import { Term } from "../pages/ProfilePage";

type Props = {
  tracks: Track[];
  artists: Artist[];
  currentTerm: Term;
};
export function TopItems(props: Props) {
  const { tracks, artists, currentTerm } = props;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-spotifyGreen text-2xl ">
        {`20 top tracks and artists for the ${currentTerm?.label} - data provided by Spotify`}
      </h1>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
        <section className="lg:w-1/2">
          <div className="text-2xl underline">Tracks</div>
          <div className="text-center text-spotifyText">
            {tracks.map((track: Track, i: number) => (
              <p key={i}>{track.name}</p>
            ))}
          </div>
        </section>
        <section className="lg:w-1/2">
          <div className="text-2xl underline">Artists</div>
          <div className="text-center text-spotifyText">
            {artists?.map((artist: Artist, i: number) => (
              <p key={i}>{artist.name}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
