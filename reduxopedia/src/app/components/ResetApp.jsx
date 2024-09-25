import React from "react";
import { useDispatch } from "react-redux";
import { resetReduxOpedia } from "../../store/action/action.js";

function ResetApp() {
  const dispatch = useDispatch();

  const resetCounterAndDestination = () => {
    dispatch(resetReduxOpedia());
  };
  return (
    <div className="text-center">
      <button
        className="btn btn-warning"
        onClick={() => dispatch(resetCounterAndDestination)}
      >
        Reset App
      </button>
    </div>
  );
}

export default ResetApp;
