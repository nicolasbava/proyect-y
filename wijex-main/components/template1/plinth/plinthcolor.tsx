type PlinthProps = {
  color: string;
};

const PlinthColor = (props: PlinthProps) => {
  return (
    <div style={{ height: 60, width: '100%', backgroundColor: props.color }} />
  );
}

export { PlinthColor };