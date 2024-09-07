import * as Tooltip from "@radix-ui/react-tooltip";

type Props = {
  value?: number;
  label: string;
  tooltip?: string;
};
export const Knob = (props: Props) => {
  const { value, label, tooltip } = props;
  return (
    <div>
      {value ? (
        <div className="flex flex-col gap-2">
          <div className="text-3xl">{props.value?.toFixed(0)}</div>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className="text-xl">{label}</div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="text-spotifyText "
                  sideOffset={5}
                  side="bottom"
                >
                  <div className="bg-spotifyBlack rounded-full px-4 py-2 flex-wrap">
                    {tooltip}
                  </div>
                  <Tooltip.Arrow className="fill-spotifyBlack" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
