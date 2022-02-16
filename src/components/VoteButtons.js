import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import upArrow from '../img/upArrow.png';
import downArrow from '../img/downArrow.png';
import * as a from './../actions';

function VoteButtons(props) {

  const voteIncrementer = (direction) => {
    const { dispatch } = props;
    const action = a.vote(direction, props.postId);
    dispatch(action)
  };

  const voteButtonsStyles = {
    upvote: {
      display: "inline"
    },
    downvote: {
      display: "inline",
      marginRight: "1em"
    },
    votes: {
      display: "inline",
      position: "relative",
      top: "7px",
      fontSize: "2em",
      margin: "auto"
    },
    img: {
      margin: ".5em",
      height: "25px",
      width: "25px",
      border: "2px solid grey"
    }
  };

  return(
    <React.Fragment>
      <div style={voteButtonsStyles.upvote} onClick={() => voteIncrementer("up")}>
        <img style={voteButtonsStyles.img} src={upArrow} alt="vote up" />
      </div>
      <p style={voteButtonsStyles.votes}>{props.votes}</p>
      <div style={voteButtonsStyles.downvote} onClick={() => voteIncrementer("down")}>
      <img style={voteButtonsStyles.img} src={downArrow} alt="vote up" />
      </div>
    </React.Fragment>
  )
}

VoteButtons = connect()(VoteButtons);

VoteButtons.propTypes = {
  postId: PropTypes.string,
  votes: PropTypes.number
};

export default VoteButtons;