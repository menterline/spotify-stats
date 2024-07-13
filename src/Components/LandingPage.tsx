import { Button } from "@headlessui/react";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-4xl text-spotifyGreen">SPOTIFY - STATS</h1>
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
        <Button className="rounded-full self-center bg-spotifyGreen text-spotifyBlack data-[hover]:bg-spotifyBlack data-[hover]:text-spotifyGreen transition ease-in-out duration-500 px-4 py-2">
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
