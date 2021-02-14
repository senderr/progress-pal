import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

import Graph from './graph-component';

class GraphList extends Component {
  render() {
    return (
      <div className="graphs">
        <Graph />
        <Graph />
        <Graph />
        <Graph />
        <Graph />
        <Graph />
        <Graph />
      </div>
    );
  }
}

export default GraphList;
