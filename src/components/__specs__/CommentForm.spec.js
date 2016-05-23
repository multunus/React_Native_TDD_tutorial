import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentForm from '../CommentForm.js';

describe('<CommentForm />', () => {
  
  it('should be a view component', () => {
    const wrapper = shallow(<CommentForm />);
    expect(wrapper.type()).to.equal(View);
  });
});
