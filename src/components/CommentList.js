import React, {Component, View} from 'react-native';
import Comment from './Comment.js';

export default class CommentList extends React.Component {

  render() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
          <Comment author={comment.author} id={comment.id}>
           {comment.text}
        </Comment>
      );
    });

    return(
        <View>
         {commentNodes}
        </View>
    );
  }
}
