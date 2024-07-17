import { useQuery } from "@tanstack/react-query";
import { FetchProfile, Login } from "../Components/Login/utils";
import { UserProfile } from "../types/UserProfile";

export const useSpotifyLogin = (code: string): string | undefined => {
  const { data } = useQuery({
    queryKey: ["login"],
    queryFn: () => Login(code),
    enabled: !!code,
  });
  return data;
};

export const useFetchProfile = (token: string): UserProfile | undefined => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => FetchProfile(token),
    enabled: !!token,
  });
  return data;
};

export const useTopTracks = (token: string) => {
  const { data } = useQuery({
    queryKey: ["topTracks"],
    queryFn: () => {
      const params = new URLSearchParams();
      params.append("type", "tracks");
      params.append("time_range", "short_term");
      params.append("limit", "20");
      const url = `https://api.spotify.com/v1/me/top/tracks?${params}`;
      return fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => res.json());
    },
    enabled: !!token,
  });
  return data;
};
