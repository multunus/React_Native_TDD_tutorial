import React, {Component, View, ListView} from 'react-native';
import Comment from './Comment.js';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.data)
  };
}
  
render() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderComment.bind(this)}
    />
  );
}

  renderComment(row) {
    return (
        <Comment author={row.author} id={row.id}>{row.text}</Comment>
    );
  }
}
