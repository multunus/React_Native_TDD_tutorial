import React from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentBox from '../components/CommentBox.js';
import App from '../app.js';

describe('<App />', () => {
  it('should render a commentBox component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(CommentBox)).to.have.length(1);
  });

  it('should pass data as props on rendering CommentBox component', () => {
    var data = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is a super comment"},
      {id: 3, author: "Jordan Walkerr", text: "This is an ordinary comment"}
    ];

    const wrapper = shallow(<App/>);
    expect(wrapper.find(CommentBox).props().data).to.eql(data);
  });

});
