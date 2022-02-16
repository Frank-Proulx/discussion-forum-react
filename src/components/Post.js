import React from 'react';
import ReadHideButton from './ReadHideButton';
import VoteButtons from './VoteButtons';
import PropTypes from 'prop-types';

function Post(props) {

  const postStyle = {
    border: "2px solid grey",
    borderTop: ".1px solid grey",
    borderBottom: ".1px solid grey",
    h3: {
      display: "inline",
      marginBottom: "0"
    },
    timestamp: {
      display: "inline",
      marginRight: "2em",
      fontStyle: "italic",
      fontSize: ".7em",
      marginBottom: "0"
    },
    postBody: {
      padding: "0 1em 0 1em"
    },
    hr: {
      margin: "0"
    }
  };

  const timestamp = `${props.post.timestamp.toDateString()} ${props.post.timestamp.getHours()}:${props.post.timestamp.getMinutes()}:${props.post.timestamp.getSeconds()}`;

  const content = (props.detailMode) ? <div style={postStyle.postBody}><hr style={postStyle.hr}/><p>{props.post.content}</p></div> : null;

  return(
    <React.Fragment>
      <div style={postStyle}>
        <VoteButtons postId={props.post.id}
          votes={props.post.votes} />
        <h3 style={postStyle.h3}>{props.post.title}</h3>
        <p style={postStyle.timestamp}> {timestamp}</p>
        <ReadHideButton detailsVisible={props.detailMode}
          clickFunc={() => props.toggleDetailFunc(props.post.id)} />
        {content}
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  detailMode: PropTypes.bool,
  toggleDetailFunc: PropTypes.func
};

export default Post;
