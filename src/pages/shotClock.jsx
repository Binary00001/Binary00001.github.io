import React from "react";
import Button from "react-bootstrap/Button";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 className="text-center">
        {this.props.count < 1
          ? ""
          : this.props.chance === true
          ? `It's Shot O'clock!`
          : `Not yet, drink some water`}
      </h1>
    );
  }
}

class ShotorNot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(props) {
    this.setState({
      counter: (this.state.counter += 1),
    });
  }
  render() {
    const chance = Math.random() >= 0.5;
    return (
      <div className="text-center" style={{ marginTop: 50 }}>
        <Button variant="info" onClick={this.handleClick}>
          Is it time?
        </Button>

        <Results chance={chance} count={this.state.counter} />

        {/* <p>{"Turn: " + this.state.counter}</p> */}
      </div>
    );
  }
}

export default ShotorNot;
