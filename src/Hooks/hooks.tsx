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

export const useFetchProfile = (token: string): UserProfile | undefined => {
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
  token: string,
  timeRange: "short_term" | "medium_term" | "long_term"
) => {
  const { data } = useQuery({
    queryKey: [`${type}-${timeRange}`],
    queryFn: () => {
      const params = new URLSearchParams();
      params.append("type", type);
      params.append("time_range", timeRange);
      params.append("limit", "20");
      const url = `https://api.spotify.com/v1/me/top/${type}?${params}`;
      return fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.json());
    },
    enabled: !!token,
    staleTime: Infinity,
  });
  return data;
};

export const useTopTracks = (
  token: string,
  timeRange: "short_term" | "medium_term" | "long_term"
) => {
  return useGetTopItems("tracks", token, timeRange);
};

export const useTopArtists = (
  token: string,
  timeRange: "short_term" | "medium_term" | "long_term"
) => {
  return useGetTopItems("artists", token, timeRange);
};
