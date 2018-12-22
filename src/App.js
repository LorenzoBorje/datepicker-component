import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.filter = {

    }

    this.state = {
      focusedInput: 'startDate',
      startDate: moment(), // set your initial start date here
      endDate: moment().add(3, 'days'), // set your initial end date here
    };
  }
  render() {
    return (
      <div>
        <h1>DatePicker</h1>
        <DateRangePicker
          startDate={this.state.startDate} 
          startDateId="start-date" 
          endDate={this.state.endDate}
          endDateId="end-date"
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate })
            }
          }
          onClose = {({startDate, endDate}) => {
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          orientation="vertical"
          withFullScreenPortal
        />
      </div>
    );
  }
}

export default App;
