import React from "react";
import { connect } from "react-redux";

class Room extends React.Component {
  render() {
    const { state, toggleSwitch } = this.props;
    const lightedness = state.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button
          onClick={() => {
            toggleSwitch();
          }}
        >
          flip
        </button>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return { state: state };
};

const mapDispatchToProp = {
  toggleSwitch() {
    return { type: "TOGGLE" };
  }
};

const ConnectedRoom = connect(mapStateToProp, mapDispatchToProp)(Room);
export default ConnectedRoom;
