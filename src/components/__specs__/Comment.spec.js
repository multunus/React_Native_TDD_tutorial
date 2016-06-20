import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Comment from '../Comment.js';

describe('<Comment />', () => {

  it('should have default props', () => {
    const wrapper = shallow(<Comment></Comment>);
    expect(wrapper.instance().props.author).to.equal("");
    expect(wrapper.instance().props.children).to.equal("");
  });
  
  it('should be a view component', () => {
    const wrapper = shallow(<Comment></Comment>);
    expect(wrapper.type()).to.equal(View);
  });

  it('should define its propTypes', () => {
    expect(Comment.propTypes.author).to.be.an('function');
    expect(Comment.propTypes.children).to.be.an('function');
  });

  it('should render 2 text components', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper.find(Text)).to.have.length(2);
  });

  it('should render comment text', () => {
    const wrapper = shallow(<Comment> This is a comment </Comment>);
    expect(wrapper.contains(<Text> This is a comment </Text>)).to.equal(true);
  });

  it('should render author name', () => {
    const wrapper = shallow(<Comment author="Author"></Comment>);
    expect(wrapper.contains(<Text>Author</Text>)).to.equal(true);
  });

});
