import { useQuery } from "@tanstack/react-query";
import { FetchProfile, Login } from "../Components/Login/utils";
import { UserProfile } from "../types/UserProfile";

export const useSpotifyLogin = (code: string): string | undefined => {
  const { data } = useQuery({
    queryKey: ["login"],
    queryFn: () => Login(code),
    enabled: !!code,
    staleTime: Infinity,
  });
  return data;
};

export const useFetchProfile = (token?: string): UserProfile | undefined => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => FetchProfile(token),
    enabled: !!token,
    staleTime: Infinity,
  });
  return data;
};

const useGetTopItems = (
  type: "tracks" | "artists",
  timeRange: "short_term" | "medium_term" | "long_term" | undefined,
  token?: string
) => {
  const { data } = useQuery({
    queryKey: [`${type}-${timeRange}`],
    queryFn: () => {
      const params = new URLSearchParams();
      params.append("type", type);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - this function is only called if timeRange is defined
      params.append("time_range", timeRange);
      params.append("limit", "20");
      const url = `https://api.spotify.com/v1/me/top/${type}?${params}`;
      return fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.json());
    },
    enabled: !!token && !!timeRange,
    staleTime: Infinity,
  });
  return data;
};

export const useTopTracks = (
  timeRange: "short_term" | "medium_term" | "long_term" | undefined,
  token?: string
) => {
  return useGetTopItems("tracks", timeRange, token);
};

export const useTopArtists = (
  timeRange: "short_term" | "medium_term" | "long_term" | undefined,
  token?: string
) => {
  return useGetTopItems("artists", timeRange, token);
};

export const useTracksAnalysis = (trackIds?: string[], token?: string) => {
  const trackIdString = trackIds?.join(",");
  const params = new URLSearchParams();
  params.append("ids", trackIdString ?? "");
  const { data } = useQuery({
    queryKey: ["tracks-analysis"],
    queryFn: () => {
      const url = `https://api.spotify.com/v1/audio-features?${params}`;
      return fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.json());
    },
    enabled: !!token && (trackIds?.length ?? 0) > 0,
    staleTime: Infinity,
  });
  return data?.audio_features;
};
