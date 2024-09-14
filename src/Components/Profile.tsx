import { TopItems } from "./TopItems";
import {
  useFetchProfile,
  useGetTopItems,
  useTracksAnalysis,
} from "../Hooks/hooks";
import { Track } from "../types/SpotifyEntities";
import { TermSelector } from "./TermSelector";
import { Knobs } from "./Knobs";
import { useState } from "react";

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
  const [isLoadingTracksAnalysis, analysisData, tracksAnalysisError] =
    useTracksAnalysis(
      topItems?.tracks?.map((track: Track) => track.id),
      token
    );

  const isLoading =
    isLoadingProfile || isLoadingTopItems || isLoadingTracksAnalysis;

  if (isLoading) {
    return (
      <div className="flex flex-col gap-16">
        <div className="text-xl w-48 h-48 border-[16px] border-solid  border-spotifyText border-t-spotifyGreen rounded-[50%] animate-spin text-spotifyText"></div>
        <div className="text-spotifyText text-2xl">Loading...</div>
      </div>
    );
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

  const leftSideNodes = analysisData.filter((data) =>
    ["DANCEABILITY", "ENERGY", "INSTRUMENTALNESS"].includes(data.key)
  );
  const rightSideNodes = analysisData.filter((data) =>
    ["LIVENESS", "LOUDNESS", "SPEECHINESS"].includes(data.key)
  );
  return (
    <div className="flex flex-row lg:gap-32">
      <aside className="self-center lg:flex flex-col gap-16 hidden">
        <Knobs nodes={leftSideNodes} />
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
        <Knobs nodes={rightSideNodes} />
      </aside>
    </div>
  );
}
