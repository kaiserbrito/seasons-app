import React from "react";

const SeasonDisplay = (props) => {
  let returnDiv = null;

  if (props.error && !props.latitude) {
    returnDiv = <div>Error: {props.error}</div>;
    return returnDiv;
  }

  if (!props.error && props.latitude) {
    returnDiv = <div>Latitude: {props.latitude}</div>;
    return returnDiv;
  }

  returnDiv = <div>Loading...</div>;

  return returnDiv;
};

export default SeasonDisplay;
