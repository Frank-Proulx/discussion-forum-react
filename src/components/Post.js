import React from 'react';
import ReadHideButton from './ReadHideButton';
import VoteButtons from './VoteButtons';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detailMode: false
    }
  }
  
  toggleDetailMode = () => {
    this.setState(prevState => ({
      detailMode: !prevState.detailMode
    }));
  }
  
  render() {

    const postStyle = {
      border: "1px solid grey",
      h2: {
        display: "inline"
      },
      p: {
        display: "inline",
        marginRight: "2em"
      }
    };

    const timestamp = `${this.props.post.timestamp.toDateString()} ${this.props.post.timestamp.getHours()}:${this.props.post.timestamp.getMinutes()}:${this.props.post.timestamp.getSeconds()}`;

    const content = (this.state.detailMode) ? <div><hr/><p>{this.props.post.content}</p></div> : null;

    return(
      <React.Fragment>
        <div style={postStyle}>
          <VoteButtons postId={this.props.post.id}
            votes={this.props.post.votes} />
          <h2 style={postStyle.h2}>{this.props.post.title}</h2><p style={postStyle.p}> - <em>{timestamp}</em></p>
          <ReadHideButton detailsVisible={this.state.detailMode}
            clickFunc={this.toggleDetailMode} />
          {content}
        </div>
      </React.Fragment>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
