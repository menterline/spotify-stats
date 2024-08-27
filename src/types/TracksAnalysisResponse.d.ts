export type TrackAnalysisNode = {
  value: number;
  key:
    | "DANCEABILITY"
    | "ENERGY"
    | "LOUDNESS"
    | "SPEECHINESS"
    | "INSTRUMENTALNESS"
    | "LIVENESS";
  description: string;
};
