import React from "react";

interface State {
  count: number;
}

const withCounter = <P extends object>(
  OriginalComponent: React.ComponentType<P>
) => {
  class NewComponent extends React.Component<React.ComponentType<P>> {
    state: State = {
      count: 0,
    };

    incrementCount = () => {
      this.setState((prevState: State) => ({ count: prevState.count + 1 }));
    };

    render(): React.ReactNode {
      const props = {
        count: this.state.count,
        incrementCount: this.incrementCount,
      };
      return <OriginalComponent {...(props as P)} />;
    }
  }
  return NewComponent;
};

export default withCounter;
