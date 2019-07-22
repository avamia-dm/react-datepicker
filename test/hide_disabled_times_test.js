import React from "react";
import { mount } from "enzyme";
import * as utils from "../src/date_utils";
import DatePicker from "../src/index.jsx";

describe("DatePicker", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should hide times that are disabled", () => {
    var now = utils.newDate();
    var datePicker = mount(
      <DatePicker
        showTimeSelect
        hideDisabledTimes
        selected={now}
        onChange={() => null}
        minTime={utils.setTime(now, { hours: 10, minutes: 0 })}
        maxTime={utils.setTime(now, { hours: 20, minutes: 30 })}
        excludeTimes={[
          utils.setTime(now, { hours: 12, minutes: 0 }),
          utils.setTime(now, { hours: 15, minutes: 30 }),
          utils.setTime(now, { hours: 17, minutes: 30 })
        ]}
      />
    );

    var hiddenTimes = datePicker.find(
      "li.react-datepicker__time-list-item--hidden"
    );
    expect(hiddenTimes).to.exist;
  });
});
