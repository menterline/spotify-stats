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
  const [term, setTerm] = useState<Term>();

  const [isLoadingProfile, userProfile, loadingProfileError] =
    useFetchProfile(token);
  const [isLoadingTopItems, topItems, topItemsError] = useGetTopItems(
    term?.name,
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
          <TermSelector
            setTerm={setTerm}
            terms={[shortTerm, mediumTerm, longTerm]}
            term={term?.name}
          />
        </section>
        <section>
          {topItems?.tracks && topItems?.artists && (
            <TopItems
              tracks={topItems?.tracks}
              artists={topItems?.artists}
              currentTerm={term}
            />
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
