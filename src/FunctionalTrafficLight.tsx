import { useState } from "react";

type LightState = "red" | "yellow" | "green";

const FunctionalTrafficLight = () => {
  const [lightState, setLightState] = useState<LightState>("red");

  const getNextLightState = (currentLightState: LightState): LightState => {
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
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
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

      <button className="next-state-button" onClick={() => setLightState(getNextLightState(lightState))}>
        Next State
      </button>
    </div>
  );
};

export default FunctionalTrafficLight;
