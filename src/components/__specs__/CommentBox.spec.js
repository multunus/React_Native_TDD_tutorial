import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentBox from '../CommentBox.js';
import CommentList from '../CommentList.js';
import CommentForm from '../CommentForm.js';


describe('<CommentBox />', () => {

  it('should render 1 view components', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.find(View)).to.have.length(1);
  });

  it('should render have a title Comment It', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.contains(<Text>Comment It</Text>)).to.equal(true);
  });

  it('should render comment list component', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.find(CommentList)).to.have.length(1);
  });

  it('should render comment form component', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.find(CommentForm)).to.have.length(1);
  });
});
