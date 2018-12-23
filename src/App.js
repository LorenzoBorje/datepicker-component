import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';

class App extends Component {
  constructor(props) {
    super(props);
    
    // this.function = {
    //   renderCalendarInfo: function() {
    //     return (
    //       <div>
    //         <button id="submit">Select Dates</button>
    //         <a href='' id='clear'>Clear Dates</a>
    //       </div>
    //     );
    //   }
    // }

    this.state = {
      focusedInput: 'startDate',
      startDate: null, // set your initial start date here
      endDate: null, // set your initial end date here
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
          numberOfMonths = {1}
          endDateId="end-date"
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
            if (endDate) {
              let diff =  endDate.diff(startDate, 'days');
              document.getElementById('feedback').innerText = `${startDate.format('ddd D')} - ${endDate.format('ddd D')} (${diff} nights)`;
            } else {
              document.getElementById('feedback').innerText = `${startDate.format('ddd D')}`;
            }
          }}
          onClose = {({startDate, endDate}) => {
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => {
            if (!focusedInput) return; // doesn't update the focusedInput if it is trying to close the DRP
            this.setState({ focusedInput });
            }
          }
          // orientation="verticalScrollable"
          hideKeyboardShortcutsPanel = {true}
          calendarInfoPosition="bottom"
          // renderCalendarInfo={this.function.renderCalendarInfo}
          renderCalendarInfo = {(props) => {
            return (
              <div className="CalendarFooter">
                <div className="footer">
                  <p id="feedback"></p>
                  <button id="submit">Select Dates</button>
                  <a href='' id="reset" onClick={this.onClearDates }>reset</a>
                </div>
              </div>
            )
          }}
          withFullScreenPortal
          showClearDates
        />
      </div>
    );
  }
}

export default App;
