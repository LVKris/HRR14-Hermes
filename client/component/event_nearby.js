import React from 'react';
import EventNearbyEntryView from './event_nearby_entryview';

const EventNearby = (props) => {
  let items = props.events.map((event) => {
    let temp = 'nearby' + event;
    return (
      <EventNearbyEntryView key={temp} event={event} onEventSelect = { props.onEventSelect } onIncrement = { props.onIncrement }/>
      );
  });
  return (
    <ul>
      {items}
    </ul>
  );
};

export default EventNearby;
