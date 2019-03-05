import React from 'react';

class Counter extends React.Component {
  // This is the newer way of setting up state in a class component.
  // The older way
  // (without https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
  // was to use a constructor and set this.state in the constructor 🤢
  state = {
    count: 0
  };

  // Similar to setting up state, to properly bind `this` to these, we use
  // the class properties proposal, but we would have to manually bind these
  // in the constructor otherwise.
  //
  // decrement, increment, and reset take advantage of the fact that React
  // does shallow merges of the existing state and the object returned from setState
  // One one hand, this allows only updating certain pieces of state
  // One the other hand, all the state is in the same `state` object
  // and it can be difficult and often verbose to work with.
  // Similar to Hooks, setState allows a callback and plain value form
  decrement = () => this.setState(state => ({ count: state.count - 1 }));

  increment = () => this.setState(state => ({ count: state.count + 1 }));

  reset = () => this.setState({ count: 0 });

  render() {
    // A common pattern is to destructure state (and props) at the top of a
    // class' render function for brevity
    const { count } = this.state;

    return (
      <div>
        {/* With Hooks, there is no `this` to worry about, so the linter can
         * catch typos like `incremnt` or something, because the function
         * has to be in scope.
         *
         * With `this`, something could potentially set properties at run-time,
         * so the linter can't catch typos.
         */}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <p>{count}</p>
      </div>
    );
  }
}

export default Counter;
