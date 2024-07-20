import { Button } from "@headlessui/react";
import {
  useFetchProfile,
  useSpotifyLogin,
  useTopArtists,
  useTopTracks,
  useTracksAnalysis,
} from "../Hooks/hooks";
import { useMemo, useState } from "react";
import { getAnalysisData } from "./utils";
import { Knob } from "./Knob";

const buttonStyle =
  "rounded-full self-center bg-spotifyGreen text-spotifyBlack data-[hover]:bg-spotifyBlack data-[hover]:text-spotifyGreen transition ease-in-out duration-500 px-4 py-2";
type TermLength = "short_term" | "medium_term" | "long_term";
type Term = { name: TermLength; label: string };
const shortTerm: Term = { name: "short_term", label: "last 4 weeks" };
const mediumTerm: Term = { name: "medium_term", label: "last 6 months" };
const longTerm: Term = { name: "long_term", label: "last year" };

export function Profile() {
  const [term, setTerm] = useState<Term>();
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const token = useSpotifyLogin(code ?? "");
  const userProfile = useFetchProfile(token);
  const topTracks = useTopTracks(term?.name, token);
  const topArtists = useTopArtists(term?.name, token);
  const tracksAnalysis = useTracksAnalysis(
    topTracks?.items.map((track: SpotifyApi.TrackObjectFull) => track.id),
    token
  );
  const analysisData = useMemo(
    () => getAnalysisData(tracksAnalysis),
    [tracksAnalysis]
  );
  return (
    <div className="flex flex-row lg:gap-32">
      <section className="self-center lg:flex flex-col gap-16 hidden">
        <div className="text-spotifyGreen">
          <Knob
            value={analysisData?.avgDanceability}
            label="Danceability"
            tooltip="Describes how suitable a track is for dancing.  Values range for 0 being not danceable at all to 100 being most danceable"
          />
        </div>
        <div className="text-spotifyGreen">
          <Knob
            value={analysisData?.avgEnergy}
            label="Energy"
            tooltip="Describes a perceptual measure of intensity and activity.  For example, death metal has high energy, while a Bach prelude scores low on the scale."
          />
        </div>
        <div className="text-spotifyGreen">
          <Knob
            value={analysisData?.avgInstrumentalness}
            label="Instrumentalness"
            tooltip="Confidence value between 0 and 100 that the track is fully instrumental.  Anything above 50 is meant to represent an instrumental track, but confidence is higher as it approaches 100."
          />
        </div>
      </section>
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
          {topTracks && topArtists && (
            <div className="flex flex-col gap-4">
              <h1 className="text-spotifyGreen text-2xl ">
                {`20 top tracks and artists for the ${term?.label} - data provided by Spotify`}
              </h1>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between">
                <section className="lg:w-1/2">
                  <div className="text-2xl underline">Tracks</div>
                  <div className="text-center text-spotifyText">
                    {topTracks?.items?.map(
                      (track: SpotifyApi.TrackObjectSimplified, i: number) => (
                        <p key={i}>{track.name}</p>
                      )
                    )}
                  </div>
                </section>
                <section className="lg:w-1/2">
                  <div className="text-2xl underline">Artists</div>
                  <div className="text-center text-spotifyText">
                    {topArtists?.items?.map(
                      (
                        artist: SpotifyApi.ArtistObjectSimplified,
                        i: number
                      ) => (
                        <p key={i}>{artist.name}</p>
                      )
                    )}
                  </div>
                </section>
              </div>
            </div>
          )}
        </section>
      </div>
      <section className="self-center lg:flex flex-col gap-16 hidden">
        <div className="text-spotifyGreen">
          <Knob
            value={analysisData?.avgLiveness}
            label="Liveness"
            tooltip="Confidence that track is live - higher liveness means a high likelihood that this is a live track."
          />
        </div>
        <div className="text-spotifyGreen">
          <Knob
            value={analysisData?.avgLoudness}
            label="Loudness"
            tooltip="Average loudness of the track in dB."
          />
        </div>
        <div className="text-spotifyGreen">
          <Knob
            value={analysisData?.avgSpeechiness}
            label="Speechiness"
            tooltip="Confidence in the track have spoken word.  In an exclusive spoken word track (like a podcast), the value is closer to 1, while going down to zero is an instrumental track."
          />
        </div>
      </section>
    </div>
  );
}
