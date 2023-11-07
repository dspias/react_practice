interface State {
  count: number;
  incrementCount: () => void;
}

const HoverCounter = ({ count, incrementCount }: State) => {
  return (
    <div>
      <h1 onMouseEnter={incrementCount}>Hovered {count} times</h1>
    </div>
  );
};

export default HoverCounter;
