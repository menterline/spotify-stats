import { getAnalysisData } from "./utils";
import { expect, test } from "vitest";

const mockAudioFeaturesObject: SpotifyApi.AudioFeaturesObject = {
  acousticness: 0.5,
  analysis_url: "https://example.com/analysis",
  danceability: 0.7,
  duration_ms: 240000,
  energy: 0.8,
  id: "123abc",
  instrumentalness: 0.3,
  key: 5,
  liveness: 0.4,
  loudness: -6.2,
  mode: 1,
  speechiness: 0.6,
  tempo: 120,
  time_signature: 4,
  track_href: "https://example.com/track",
  type: "audio_features",
  uri: "spotify:track:123abc",
  valence: 0.9,
};
test("analysisData", () => {
  const analysisData = [
    { ...mockAudioFeaturesObject, danceability: 0.5 },
    { ...mockAudioFeaturesObject, danceability: 0.6 },
    { ...mockAudioFeaturesObject, danceability: 0.7 },
  ];
  const expected = 0.6;
  expect(getAnalysisData(analysisData)?.avgDanceability).toBe(expected);
});
