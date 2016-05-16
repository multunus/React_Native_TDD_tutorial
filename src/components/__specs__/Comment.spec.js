import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Comment from '../Comment.js';

describe('<Comment />', () => {
  
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
