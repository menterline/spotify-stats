type Props = {
  label: string;
  onClick: () => void;
};
export function SpotifyButton(props: Props) {
  return (
    <button
      className="rounded-full self-center bg-spotifyGreen text-spotifyBlack data-[hover]:bg-spotifyBlack data-[hover]:text-spotifyGreen transition ease-in-out duration-500 px-4 py-2"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
