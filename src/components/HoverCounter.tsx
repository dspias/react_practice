import withCounter from "./HOC/withCounter";

interface Counterprops {
  count: number;
  incrementCount: () => void;
}

const HoverCounter = ({ count, incrementCount }: Counterprops) => {
  return (
    <div>
      <h1 onMouseEnter={incrementCount}>Hovered {count} times</h1>
    </div>
  );
};

const WrapperCounter = withCounter(HoverCounter);

export default WrapperCounter;
