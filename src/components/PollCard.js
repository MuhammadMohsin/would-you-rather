import React from 'react';

const PollCard = ({ poll, author, handleSelectPoll }) => {
    return (
        <div className="poll-card-container">
            <label>{author.name} asks:</label>
            <div className="poll-card-details">
                <img src={author.avatarURL} alt={author.name} className="poll-user-avatar" />
                <div className="poll-card-question">
                    <h4>
                        Would you rather
                    </h4>
                    <button
                        onClick={()=>handleSelectPoll(poll)}
                        className="poll-btn">
                        View Poll
                    </button>
                </div>
            </div>
        </div>
    );
}
export default PollCard;