import React from 'react';

const EventNearbyEntryView = (props) => {
  return (
    <li>
      {props.event}
      <button onclick = { props.onIncrement(5)}></button>
    </li>
  );
};
export default EventNearbyEntryView;
//onClick = { props.onEventSelect(props.event) }
