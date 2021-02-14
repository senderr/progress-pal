import React, { Component } from 'react';
import UserSlider from './user-slider';

import Graph from './graph-component';

const GraphList = () => {
  const graphs = [];

  graphs.push(<UserSlider key={0} />);

  for (var i = 1; i < 8; i++) {
    graphs.push(<Graph key={i} />);
  }

  return <div className="graphs">{graphs}</div>;
};

export default GraphList;
