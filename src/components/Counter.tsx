import React from "react";

interface MyState {
  count: number;
}

interface Props {
  render: (count: number, incrementCount: () => void) => React.ReactNode;
}

export default class Counter extends React.Component<Props> {
  state: MyState = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState: MyState) => ({ count: prevState.count + 1 }));
  };
  render(): React.ReactNode {
    const { render } = this.props;
    const { count } = this.state;
    return render(count, this.incrementCount);
  }
}
