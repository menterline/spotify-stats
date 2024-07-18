import { Button } from "@headlessui/react";
import {
  useFetchProfile,
  useSpotifyLogin,
  useTopArtists,
  useTopTracks,
} from "../Hooks/hooks";
import { useState } from "react";

const buttonStyle =
  "rounded-full self-center bg-spotifyGreen text-spotifyBlack data-[hover]:bg-spotifyBlack data-[hover]:text-spotifyGreen transition ease-in-out duration-500 px-4 py-2";
type TermLength = "short_term" | "medium_term" | "long_term";
type Term = { name: TermLength; label: string };
const shortTerm: Term = { name: "short_term", label: "last 4 weeks" };
const mediumTerm: Term = { name: "medium_term", label: "last 6 months" };
const longTerm: Term = { name: "long_term", label: "last year" };

export function Profile() {
  const [term, setTerm] = useState<Term>(longTerm);
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const token = useSpotifyLogin(code ?? "");
  const userProfile = useFetchProfile(token ?? "");
  const topTracks = useTopTracks(token ?? "", term.name);
  const topArtists = useTopArtists(token ?? "", term.name);
  return (
    <div className="text-spotifyGreen flex flex-col gap-8">
      <section>
        <h1 className="text-spotifyGreen text-4xl">
          Hello, {userProfile?.display_name}
        </h1>
      </section>
      <section className="self-center flex flex-col gap-4">
        <h5>
          Please select a 'term' option below for a time span from which to
          fetch data
        </h5>
        <div className="self-center flex flex-row gap-8">
          <Button className={buttonStyle} onClick={() => setTerm(shortTerm)}>
            Short term
          </Button>
          <Button className={buttonStyle} onClick={() => setTerm(mediumTerm)}>
            Medium term
          </Button>
          <Button className={buttonStyle} onClick={() => setTerm(longTerm)}>
            Long term
          </Button>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-4">
          <h1 className="text-spotifyGreen text-2xl ">
            {`20 top tracks and artists for the ${term.label} Data provided by Spotify`}
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
            <section>
              <div className="text-2xl underline">Tracks</div>
              <div className="text-start text-spotifyText">
                {topTracks?.items?.map(
                  (track: SpotifyApi.TrackObjectSimplified, i: number) => (
                    <p key={i}>{track.name}</p>
                  )
                )}
              </div>
            </section>
            <section>
              <div className="text-2xl underline">Artists</div>
              <div className="text-start text-spotifyText">
                {topArtists?.items?.map(
                  (artist: SpotifyApi.ArtistObjectSimplified, i: number) => (
                    <p key={i}>{artist.name}</p>
                  )
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
