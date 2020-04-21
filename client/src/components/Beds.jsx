// Beds component contains a Room component for each room with a bed

import React from 'react';
import Room from './Room.jsx';

const Beds = (props) => (
  <div className = "room-info">
    <h3>This is the Beds component.</h3>
    It renders a Room component for each room with a bed.
    <Room />
    <Room />
  </div>
);

export default Beds;