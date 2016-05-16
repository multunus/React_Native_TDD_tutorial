import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentForm from '../CommentForm.js';

describe('<CommentForm />', () => {
  
  it('should render 1 view components', () => {
    const wrapper = shallow(<CommentForm />);
    expect(wrapper.find(View)).to.have.length(1);
  });
});
