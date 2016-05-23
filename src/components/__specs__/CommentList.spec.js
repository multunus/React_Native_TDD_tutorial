import React, { View } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentList from '../CommentList.js';
import Comment from '../Comment.js';

describe('<CommentList />', () => {
  beforeEach(function() {
    data = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is a super comment"},
      {id: 3, author: "Jordan Walkerr", text: "This is an ordinary comment"}
    ];
  });

  it('should be a view component', () => {
    const wrapper = shallow(<CommentList data={data} />);
    expect(wrapper.type()).to.equal(View);
  });

  it('should render comment components with correct comment text', () => {
    const wrapper = shallow(<CommentList data={data}/>);
    for(var index in data) {
      comment = data[index];
      expect(wrapper.contains(comment.text)).to.equal(true);
    }
  });

  it('should render comment components with correct props for each entry in data array', () => {
    const wrapper = shallow(<CommentList data={data} />);
    expect(wrapper.find(Comment)).to.have.length(3);
    for(var index in data) {
      comment = data[index];
      expect(wrapper.find({author: comment.author})).to.have.length(1);
      expect(wrapper.find({id: comment.id})).to.have.length(1);
    }
  });
});
