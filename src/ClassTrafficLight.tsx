import { Component } from "react";

type LightState = "red" | "yellow" | "green";

interface State {
  lightState: LightState;
}

class ClassTrafficLight extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      lightState: "red"
    };
  }

  getNextLightState(currentLightState: LightState): LightState {
    switch (currentLightState) {
      case "red":
        return "green";
      case "green":
        return "yellow";
      case "yellow":
        return "red";
      default:
        return "red";
    }
  }

  render() {
    const { lightState } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={`circle ${lightState === "red" ? "red" : "black"}`}
            id="red-light"
          ></div>
          <div
            className={`circle ${lightState === "yellow" ? "yellow" : "black"}`}
            id="yellow-light"
          ></div>
          <div
            className={`circle ${lightState === "green" ? "green" : "black"}`}
            id="green-light"
          ></div>
        </div>
        <button className="next-state-button" onClick={() => this.setState({ lightState: this.getNextLightState(lightState) })}>
          Next State
        </button>
      </div>
    );
  }
}

export default ClassTrafficLight;
