import { SpotifyButton } from "./SpotifyButton";
import { Term } from "./Profile";

type Props = {
  terms: Term[];
  term?: Term;
  setTerm: (term: Term) => void;
};
export function TermSelector(props: Props) {
  const { terms, term, setTerm } = props;
  return (
    <>
      <h5>
        Please select a 'term' option below for a time span from which to fetch
        data
      </h5>
      <div className="self-center flex flex-col gap-8">
        <div className="self-center flex flex-row gap-8">
          {terms.map((term: Term) => (
            <SpotifyButton
              key={term.name}
              label={term.label}
              onClick={() => setTerm(term)}
            />
          ))}
        </div>
        {term && (
          <h1 className="text-spotifyGreen text-2xl ">
            {`20 top tracks and artists for the ${term?.label} - data provided by Spotify`}
          </h1>
        )}
      </div>
    </>
  );
}
