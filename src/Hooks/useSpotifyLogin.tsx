import { useQuery } from "@tanstack/react-query";
import { Login } from "../Components/Login/utils";
import { UserProfile } from "../types/UserProfile";

export const useSpotifyLogin = (code: string): UserProfile | undefined => {
  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: () => Login(code),
  });
  return data;
};
