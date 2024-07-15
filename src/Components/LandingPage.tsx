import { Button } from "@headlessui/react";
import { fetchProfile, getAccessToken, Login } from "./Login/utils";
import { useEffect, useState } from "react";
import { UserProfile } from "../types/UserProfile";

export default function LandingPage() {
  //TODO move this logic up to App, or refactor between App, LandingPage, and a new component for when the user is logged in
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const clientId = "13f6cc16e88b452db78769d2ca4487b3";
  const [userProfile, setUserProfile] = useState<UserProfile | undefined>();
  if (code && !userProfile) Login(code ?? undefined, setUserProfile);

  console.log("profile = ", userProfile);
  return (
    <div className="flex flex-col gap-16">
      <header className="text-4xl text-spotifyGreen">SPOTIFY - STATS</header>
      <section className="flex flex-col gap-4">
        <h3 className="text-xl text-spotifyGreen">
          What if you could see your spotify wrapped at any time?
        </h3>
        <h3 className="text-lg text-spotifyGreen">
          Think you know your listening habits? Or will you be surprised by a
          track you listened to on repeat?
        </h3>
      </section>
      <div className="flex flex-col items-center gap-4">
        <Button
          className="rounded-full self-center bg-spotifyGreen text-spotifyBlack data-[hover]:bg-spotifyBlack data-[hover]:text-spotifyGreen transition ease-in-out duration-500 px-4 py-2"
          onClick={() => Login(code ?? "", setUserProfile)}
        >
          Login to Spotify
        </Button>
        <p className="text-spotifyText max-w-[512px]">
          Please login to spotify so in order to fetch your listening data.
          Nothing is saved or persisted in any way
        </p>
      </div>
    </div>
  );
}
