import { Button } from "@headlessui/react";
import { Login } from "./Login/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LandingPage() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const navigate = useNavigate();
  useEffect(() => {
    if (code) navigate(`/spotify-stats/profile?code=${code}`);
  }, [code, navigate]);

  return (
    <div className="flex flex-col gap-16">
      <header className="text-4xl text-spotifyGreen">AudioInsights</header>
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
          onClick={() => Login(code ?? "")}
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
