import withCounter from "./HOC/withCounter";

interface Counterprops {
  count: number;
  incrementCount: () => void;
}

const ClickCounter = ({ count, incrementCount }: Counterprops) => {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

const WrapperCounter = withCounter(ClickCounter);

export default WrapperCounter;
