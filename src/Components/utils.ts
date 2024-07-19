export const getAnalysisData = (
  analysisData: Array<SpotifyApi.AudioFeaturesObject>
): {
  avgDanceability: number;
  avgEnergy: number;
  avgLoudness: number;
  avgSpeechiness: number;
  avgAcousticness: number;
  avgInstrumentalness: number;
  avgLiveness: number;
} | null => {
  if (!analysisData) return null;
  const avgDanceability = +(
    +(100 * analysisData.reduce((sum, item) => sum + item.danceability, 0)) /
    analysisData.length
  ).toFixed(2);
  const avgEnergy = +(
    +(100 * analysisData.reduce((sum, item) => sum + item.energy, 0)) /
    analysisData.length
  ).toFixed(2);
  const avgLoudness = +(
    +analysisData.reduce((sum, item) => sum + item.loudness, 0) /
    analysisData.length
  ).toFixed(2);
  const avgSpeechiness = +(
    +(100 * analysisData.reduce((sum, item) => sum + item.speechiness, 0)) /
    analysisData.length
  ).toFixed(2);
  const avgAcousticness = +(
    +(100 * analysisData.reduce((sum, item) => sum + item.acousticness, 0)) /
    analysisData.length
  ).toFixed(2);
  const avgInstrumentalness = +(
    +(
      100 * analysisData.reduce((sum, item) => sum + item.instrumentalness, 0)
    ) / analysisData.length
  ).toFixed(2);
  const avgLiveness = +(
    +(100 * analysisData.reduce((sum, item) => sum + item.liveness, 0)) /
    analysisData.length
  ).toFixed(2);
  return {
    avgDanceability,
    avgEnergy,
    avgLoudness,
    avgSpeechiness,
    avgAcousticness,
    avgInstrumentalness,
    avgLiveness,
  };
};
