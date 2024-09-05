import { TrackAnalysisNode } from "../types/TracksAnalysisResponse";
import { Knob } from "./Knob";

type Props = {
  nodes: TrackAnalysisNode[];
};
export function Knobs(props: Props) {
  const { nodes } = props;
  return (
    <>
      {nodes.map((node) => (
        <div className="text-spotifyGreen">
          <Knob
            value={node.value}
            label={node.key}
            tooltip={node.description}
          />
        </div>
      ))}
    </>
  );
}
