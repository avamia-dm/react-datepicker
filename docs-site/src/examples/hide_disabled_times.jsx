import React from "react";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

export default class HideDisabledTimes extends React.Component {
  state = {
    startDate: setHours(setMinutes(new Date(), 30), 17)
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {"<DatePicker"}
            <br />
            {"  selected={this.state.startDate}"}
            <br />
            {"  onChange={this.handleChange}"}
            <br />
            <strong>
              {"  showTimeSelect"}
              <br />
              {"  minTime={setHours(setMinutes(new Date(), 0), 10)}"}
              <br />
              {"  maxTime={setHours(setMinutes(new Date(), 30), 20)}"}
              <br />
              {
                "  excludeTimes={[setHours(setMinutes(new Date(), 0), 12), setHours(setMinutes(new Date(), 30), 15), setHours(setMinutes(new Date(), 30), 17)]}"
              }
              <br />
              {'  dateFormat="MMMM d, yyyy"'}
            </strong>
            <br />
            {"/>"}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            excludeTimes={[
              setHours(setMinutes(new Date(), 0), 12),
              setHours(setMinutes(new Date(), 30), 15),
              setHours(setMinutes(new Date(), 30), 17)
            ]}
            minTime={setHours(setMinutes(new Date(), 0), 10)}
            maxTime={setHours(setMinutes(new Date(), 30), 20)}
            hideDisabledTimes
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
      </div>
    );
  }
}
