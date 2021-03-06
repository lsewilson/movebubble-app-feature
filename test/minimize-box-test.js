import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import mockery from "mockery";
import MinimizeBox from '../src/components/minimize-box'

mockery.enable();
mockery.registerMock('../img/arrow.png', 0)

describe('MinimizeBox Component', function() {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MinimizeBox />);
  });

  it ('should have a class named minimize-box', function() {
    expect(wrapper.is('.minimize-box')).to.equal(true);
  });

  it ('should have one child element', function() {
    expect(wrapper.children().length).to.equal(1);
  });

  it ('should have a child element which is an image', function() {
    const image = wrapper.find('img');
    expect(wrapper.find('img')).to.exist;
  });

  it ('is a clickable button', function(){
    const handleClick = sinon.spy()
    const mount_wrapper = mount(<MinimizeBox onClick={handleClick}/>)
    mount_wrapper.find('.minimize-box').simulate('click');
    expect(handleClick).to.have.property('callCount', 1);
  })

});
