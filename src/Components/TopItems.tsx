import { Artist, Track } from "../types/SpotifyEntities";

type Props = {
  tracks: Track[];
  artists: Artist[];
};
export function TopItems(props: Props) {
  const { tracks, artists } = props;
  return (
    <div className="flex flex-col gap-4">
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
