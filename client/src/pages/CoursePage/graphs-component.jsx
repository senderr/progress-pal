import React, { Component } from 'react';
import UserSlider from './user-slider';

import Graph from './graph-component';

const GraphList = ({ user, users }) => {
  const graphs = [];
  //graphs.push();

  return (
    <div className="graphs">
      {user ? <UserSlider key={user._id} /> : null}
      {users.map((user) => (
        <Graph
          name={user._id.name}
          key={user._id._id}
          progress={user.progress}
        />
      ))}
    </div>
  );
};

export default GraphList;
