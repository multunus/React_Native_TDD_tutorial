import React, { View, Text, AsyncStorage } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CommentBox from '../CommentBox.js';
import CommentList from '../CommentList.js';
import CommentForm from '../CommentForm.js';


describe('<CommentBox />', () => {
  beforeEach(function() {
     wrapper = shallow(<CommentBox asyncStorageKey={'comments'} />);
  });
  it('should be a view component', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should render have a title Comment It', () => {
    expect(wrapper.contains(<Text>Comment It</Text>)).to.equal(true);
  });

  it('should render comment list component', () => {
    expect(wrapper.find(CommentList)).to.have.length(1);
  });

  it('should render comment form component', () => {
    expect(wrapper.find(CommentForm)).to.have.length(1);
  });
  
  it('should have an initial state', () => {
    expect(wrapper.state('data').length).to.equal(0);
  });

  it('should pass its state data as props to commentlist component', () => {
    expect(wrapper.find(CommentList).props().data).to.eql(wrapper.state('data'));
  });
  
  xit('should pass its handleCommentSubmit method as props to Commentform component', () => {    
    expect(wrapper.find(CommentForm).props().onCommentSubmit).to.eql(CommentBox.prototype.handleCommentSubmit);
  });

  describe('getComments', () => {
    it('stores comment data using asyncstorage on comment submit', () => {
      var wrapper = shallow(<CommentBox asyncStorageKey={'comments'} />);
      wrapper.setState({data: [{author: 'Sulaiman', text: 'Hey'}]});
      var commentData = {author: "Sony", text: "La dolce vita"};
      wrapper.find(CommentForm).props().onCommentSubmit(commentData);
      var fetchedData = [];
      var expectedData = [];
      AsyncStorage.getItem('comments', (err, result) => {
        fetchedData = JSON.parse(result);
        expectedData = [{author: 'Sulaimannnn', text: 'Hey'}, {author: "Sony", text: "La dolce vita"}];
      });
      expect(fetchedData[0].author).not.to.equal(expectedData[0].author);   
    });
  });
});
