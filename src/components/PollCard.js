import React from 'react';
import { Link } from 'react-router-dom';

const PollCard = ({ poll, author }) => {
    return (
        <div className="poll-card-container">
            <label>{author.name} asks:</label>
            <div className="poll-card-details">
                <img src={author.avatarURL} alt={author.name} className="poll-user-avatar" />
                <div className="poll-card-question">
                    <h4>
                        Would you rather
                    </h4>
                    <Link
                        to={`/questions/${poll.id}`}
                        className="poll-link">
                        View Poll
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default PollCard;