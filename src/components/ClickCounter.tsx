interface State {
  count: number;
  incrementCount: () => void;
}

const ClickCounter = ({ count, incrementCount }: State) => {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default ClickCounter;
