import "./App.css";
import { connect } from "react-redux";
import { addStep, resetStep } from "./store/actions";

function App(props ) {
  const { state, addStep, resetStep} = props;
  return (
    <div className="App">
      <div>
        <h2>You have walked {state.steps} Steps today</h2> 
      </div>
      <div className="buttonSpace">
        <button className="addStep" onClick={addStep}>Add a Step</button>
        <button className="resetStep"onClick={resetStep}>Reset Steps</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = {
  addStep,
  resetStep,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
