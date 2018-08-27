import React from 'react';
import { render } from 'react-dom';
import Scheduler from '../src/scheduler';
import RangeDate from '../src/range_date';
import DateRange from '../src/date_range';
import { whyDidYouUpdate } from 'why-did-you-update';

// Uncomment this to examine where you can get performance boosts
whyDidYouUpdate(React);

var resources = [{name:"1012",id:"TnVtYmVyOjEy"}, {name:"2022",id:"TnVtYmVyOjE1"},{name:"2224",id:"TnVtYmVyOjE4"},{name:"2225",id:"14"},{name:"6227",id:"17"},{name:"2232",id:"19"}],
    today = new RangeDate(new Date()),
    events = [
      {
        id: 'foobar',
        title: 'Do this',
        startDate: today.advance('days', 1).toRef(),
        duration: 5,
        resource: "TnVtYmVyOjEy"
      },
      {
        id: 'barfoo',
        title: 'Do that',
        startDate: today.advance('days', 3).toRef(),
        duration: 4,
        resource: "TnVtYmVyOjE1"
      },
      {
        id: 'barfoobaz',
        title: 'I am disabled',
        startDate: today.advance('days', 2).toRef(),
        duration: 7,
        resource: 15,
        disabled: true
      },
      {
        id: 'foobah',
        title: 'Do another thing',
        startDate: today.advance('days', 6).toRef(),
        duration: 14,
        resource: 14
      },
      {
        id: 'foobaz',
        title: 'Do another thing next month',
        startDate: today.advance('days', 36).toRef(),
        duration: 14,
        resource:17
      }
    ]

class Basic extends React.Component {
  constructor(props) {
    super(props)
    let from = new RangeDate()
    let to = from.advance('weeks', 2)

    this.state = {
      events: props.events,
      range: new DateRange(from, to)
    }
  }

  eventChanged(props) {
    const index = this.state.events.findIndex(event => event.id === props.id)
    const newEvents = this.state.events
    newEvents[index] = props
    this.setState({ ...props, events: newEvents })
  }

  eventResized(props) {
    const index = this.state.events.findIndex(event => event.id === props.id)
    const newEvents = this.state.events
    newEvents[index] = props
    this.setState({ ...props, events: newEvents })
  }

  eventClicked(props) {
    alert(`${props.title} clicked!`)
    console.log(props)
  }

  cellClicked(resource, date) {
    alert(`You clicked on ${resource} - ${date}`)
    console.log(resource, date)
  }

  rangeChanged(range) {
    this.setState({ range: range })
  }
    onResourceClick(resource) {
      console.log(resource)
  }

  render() {
    const { events, range, title, startDate, duration, resource } = this.state,
          { from, to } = range

    return (
      <div>
        <Scheduler
          from={from}
          to={to}
          resources={resources}
          events={events}
          width={1000}
          onEventChanged={::this.eventChanged}
          onEventResized={::this.eventResized}
          onEventClicked={::this.eventClicked}
          onCellClicked={::this.cellClicked}
          onRangeChanged={::this.rangeChanged}
          onResourceClicked={::this.onResourceClick}
        />
      </div>
    )
  }
}

render(<Basic resources={resources} events={events} />, document.getElementById('react'))
