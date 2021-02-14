import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import Graph from './graph-component';

const GraphList = () => {
  const graphs = [];

  for (var i = 0; i < 7; i++) {
    graphs.push(<Graph />);
  }

  return <div className="graphs">{graphs}</div>;
};

export default GraphList;
