import React, {Component,Text, View, AsyncStorage} from 'react-native';

import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.getComments = this.getComments.bind(this);
  }

  componentDidMount() {
    this.getComments();
    setInterval(this.getComments, 2000);
  }
  
  getComments() {
    var _this = this;
    AsyncStorage.getItem('comments', (err, result) => {
      comments = JSON.parse(result);
      _this.state = {data: comments};
    });
  }
  
  handleCommentSubmit(comment_data) {
    var comments = this.state.data;
    comments.push(comment_data);
    AsyncStorage.setItem("comments", JSON.stringify(comments));
  }
  
  render() {
    return(
        <View>
        <Text>Comment It</Text>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </View>
    );
  }
}
