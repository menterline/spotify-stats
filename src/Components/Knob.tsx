type Props = {
  value?: number;
  label: string;
  tooltip?: string;
};
export const Knob = (props: Props) => {
  const { value, label } = props;
  return (
    <div>
      {label && value ? (
        <div className="flex flex-col gap-2">
          <div className="text-3xl">{props.value}</div>
          <div className="text-xl">{props.label}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
