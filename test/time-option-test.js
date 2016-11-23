import React from 'react';
import { expect } from 'chai';
// import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import TimeOption from '../src/components/time-option'

describe('TimeOption Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <TimeOption
      text={"Morning"}
      currentDay={"Wednesday"}
      bookings={[]}/>
    );
  });

  it ('should contain text from prop', function() {
    expect(wrapper.contains("Morning")).to.equal(true);
  });

  describe('handleClick', function() {

    it ('should push booking data to bookings prop', function() {
      console.log(wrapper.instance().prop('text'))
      wrapper.instance().handleClick();
      expect(wrapper.prop('bookings')).to.equal([{date: "Wednesday", time:"Morning"}]);
    })

  })

})