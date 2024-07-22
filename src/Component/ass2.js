import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);

    setTimeout(() => {
      clearInterval(this.timer);
      alert('Count stopped after 20 seconds');
    }, 20000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>Count: {count}</p>
      </div>
    );
  }
}

export default App;
