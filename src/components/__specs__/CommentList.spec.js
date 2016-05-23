import React, { View, ListView } from 'react-native';
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

  it('should be a ListView component', () => {
    const wrapper = shallow(<CommentList data={data} />);
    expect(wrapper.type()).to.equal(ListView);
  });

  it('should have correct initial state datasource', () => {
    const wrapper = shallow(<CommentList data={data} />);
    expect(wrapper.state('dataSource')._dataBlob).to.equal(data);
  });

  it('should be a ListView component with correct props', () => {
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(data);
    const wrapper = shallow(<CommentList data={data} />);
    wrapper.setState({dataSource: dataSource});

    expect(wrapper.find(ListView).shallow().instance().props.dataSource).to.equal(dataSource);
  });
});
