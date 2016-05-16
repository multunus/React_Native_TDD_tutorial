import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentList from '../CommentList.js';

describe('<CommentList />', () => {
  
  it('should render 1 view components', () => {
    const wrapper = shallow(<CommentList />);
    expect(wrapper.find(View)).to.have.length(1);
  });
});
