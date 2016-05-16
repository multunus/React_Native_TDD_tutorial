import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentBox from '../CommentBox.js';


describe('<CommentBox />', () => {

  it('should render 1 view components', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.find(View)).to.have.length(1);
  });

});
