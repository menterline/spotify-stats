import { useMemo, useState } from "react";
import { Knob } from "./Knob";
import { TopItems } from "./TopItems";
import {
  useFetchProfile,
  useGetTopItems,
  useTracksAnalysis,
} from "../Hooks/hooks";
import { getAnalysisData } from "./utils";
import { Track } from "../types/SpotifyEntities";
import { TermSelector } from "./TermSelector";

type TermLength = "short_term" | "medium_term" | "long_term";
export type Term = { name: TermLength; label: string };
const shortTerm: Term = { name: "short_term", label: "last 4 weeks" };
const mediumTerm: Term = { name: "medium_term", label: "last 6 months" };
const longTerm: Term = { name: "long_term", label: "last year" };

type Props = {
  token: string;
};
export function Profile(props: Props) {
  const { token } = props;
  const [currentTerm, setCurrentTerm] = useState<Term>();

  const [isLoadingProfile, userProfile, loadingProfileError] =
    useFetchProfile(token);
  const [isLoadingTopItems, topItems, topItemsError] = useGetTopItems(
    currentTerm?.name,
    token
  );
  const [isLoadingTracksAnalysis, tracksAnalysis, tracksAnalysisError] =
    useTracksAnalysis(
      topItems?.tracks?.map((track: Track) => track.id),
      token
    );
  const analysisData = useMemo(
    () => getAnalysisData(tracksAnalysis),
    [tracksAnalysis]
  );

  const isLoading =
    isLoadingProfile || isLoadingTopItems || isLoadingTracksAnalysis;

  if (isLoading) {
    return <div className="text-xl text-spotifyText">Loading...</div>;
  }
  if (loadingProfileError) {
    return <h2 className="text-xl text-spotifyText">Error loading Profile</h2>;
  }
  if (topItemsError) {
    return (
      <h2 className="text-xl text-spotifyText">
        Error loading top tracks and artists
      </h2>
    );
  }
  if (tracksAnalysisError) {
    return (
      <h2 className="text-xl text-spotifyText">Error loading track analysis</h2>
    );
  }
  return (
    <div className="flex flex-row lg:gap-32">
      <aside className="self-center lg:flex flex-col gap-16 hidden">
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
      </aside>
      <main className="text-spotifyGreen flex flex-col gap-8">
        <section>
          <h1 className="text-spotifyGreen text-4xl">
            Hello, {userProfile?.display_name}
          </h1>
        </section>
        <section className="self-center flex flex-col gap-4">
          <TermSelector
            setTerm={setCurrentTerm}
            terms={[shortTerm, mediumTerm, longTerm]}
            term={currentTerm}
          />
        </section>
        <section>
          {topItems && (
            <TopItems tracks={topItems?.tracks} artists={topItems?.artists} />
          )}
        </section>
      </main>
      <aside className="self-center lg:flex flex-col gap-16 hidden">
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
      </aside>
    </div>
  );
}
