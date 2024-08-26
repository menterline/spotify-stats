import { SpotifyButton } from "./SpotifyButton";
import { Term } from "../pages/ProfilePage";

type Props = {
  terms: Term[];
  term?: string;
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
      <div className="self-center flex flex-row gap-8">
        {terms.map((term: Term) => (
          <SpotifyButton
            key={term.name}
            label={term.label}
            onClick={() => setTerm(term)}
          />
        ))}
      </div>
    </>
  );
}
