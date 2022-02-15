import React from 'react';
import ReadHideButton from './ReadHideButton';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detailMode: false
    }
  }
  
  toggleDetailMode = () => {
    this.setState(prevState, () => {
      detailMode: !prevState.detailMode
    });
  }
  
  render() {
    const timestamp = `${props.post.timestamp.toDateString()} ${props.post.timestamp.getHours()}:${props.post.timestamp.getMinutes()}:${props.post.timestamp.getSeconds()}`;

    return(
      <React.Fragment>
        <div>
          {/* button(s?) to upvote or downvote */}
          <h2>{props.post.votes} {props.post.title}</h2><p> - <em>{timestamp}</em></p>
          <ReadHideButton detailsVisible={this.state.detailMode}
            clickFunc={this.toggleDetailMode}/>
        </div>
      </React.Fragment>
    )
  }
}

Post.proptypes = {
  id: PropTypes.string,
  timestamp: PropTypes.object,
  title: PropTypes.string,
  votes: PropTypes.number,
  content: PropTypes.string
}

export default Post;
