import React, { View, TouchableNativeFeedback, TextInput, Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentForm from '../CommentForm.js';

describe('<CommentForm />', () => {
  
  it('should be a view component', () => {
    const wrapper = shallow(<CommentForm />);
    expect(wrapper.type()).to.equal(View);
  });

  it('should have an initial state', () => {
    const wrapper = shallow(<CommentForm />);
    expect(wrapper.state('name')).to.equal("");
    expect(wrapper.state('comment')).to.equal("");
  });

  it('should have 2 text input components', () => {
    const wrapper = shallow(<CommentForm />);
    expect(wrapper.find(TextInput)).to.have.length(2);
  });

   it('should have a submit button', () => {
    const wrapper = shallow(<CommentForm />);
    expect(wrapper.find(TouchableNativeFeedback)).to.have.length(1);
    expect(wrapper.find(TouchableNativeFeedback).containsMatchingElement(<Text>Submit</Text>)).to.equal(true);
  });

  it('the author input component value should be dependent on state', () => {
    const wrapper = shallow(<CommentForm />);
    wrapper.setState({name: 'JK'});
    expect(wrapper.find(TextInput).first().props().value).to.equal('JK');
  });

  it('the comment input component value should be dependent on state', () => {
    const wrapper = shallow(<CommentForm />);
    wrapper.setState({comment: 'An awesome comment'});
    expect(wrapper.find(TextInput).at(1).props().value).to.equal('An awesome comment');
  });

  it('the author input component should change state when text changes', () => {
    const wrapper = shallow(<CommentForm />);
    const authorInputComponent = wrapper.find('TextInput').first();
    authorInputComponent.simulate('ChangeText','arsenal');
    expect(wrapper.state('name')).to.equal('arsenal');
  });

  it('the comment input component should change state when text changes', () => {
    const wrapper = shallow(<CommentForm />);
    const commentInputComponent = wrapper.find('TextInput').at(1);
    commentInputComponent.simulate('ChangeText','arsenal');
    expect(wrapper.state('comment')).to.equal('arsenal');
  });
});
