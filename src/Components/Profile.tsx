import { useState } from "react";
import { UserProfile } from "../types/UserProfile";
import { Login } from "./Login/utils";

export function Profile() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  // const clientId = "13f6cc16e88b452db78769d2ca4487b3";
  const [userProfile, setUserProfile] = useState<UserProfile | undefined>();
  if (code && !userProfile) Login(code ?? undefined, setUserProfile);
  return (
    <div className="text-spotifyGreen">
      <h1 className="text-spotifyGreen text-4xl">
        {userProfile?.display_name}
      </h1>
      <p className="text-spotifyGreen text-4xl">{userProfile?.email}</p>
    </div>
  );
}
