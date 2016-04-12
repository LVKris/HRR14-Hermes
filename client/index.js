import React from 'react';
import ReactDOM from 'react-dom';
import EventNearby from './component/event_nearby';
import EventSchedule from './component/event_schedule';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event_nearby: ['football', 'basketball', 'baseball', 'golf'],
      event_scheduled: ['baseball', 'golf'],
      counter: 0

    };

    // API Calls to database HERE
  }
  // helperEventSelect(event) {
  //   const temp = this.state.event_scheduled;
  //   temp.push(event);
  //   this.setState({ event_scheduled: temp });
  // }
        // <Board onSelectTile = { (tile) => this.setState({ selectedTile: tile }) } />

  render() {
    return (
      <div>
        this.state.counter
        <EventNearby
          onIncrement = { (number) => this.setState({counter:number})}
          onEventSelect = { (event) => {
            const temp = this.state.event_scheduled;
            temp.push(event);
            this.setState({ event_scheduled: temp });
          }}
          events = {this.state.event_nearby}
        />
        <EventSchedule events = {this.state.event_scheduled} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
