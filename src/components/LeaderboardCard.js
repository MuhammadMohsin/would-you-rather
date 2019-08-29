import React from 'react';

const LeaderBoardCard = ({ user }) => {

    const getCount = (obj) => {
        return Object.values(obj).length;
    }
    return (
        <div className="leaderboard-card-container">
            <div className="img-container">
                <img src={user.avatarURL} alt={user.name} className="loaderboard-user-avatar" />
            </div>
            <div className="score-details-container">
                <h3>{user.name}</h3>
                <div>Answered Question:<span> {getCount(user.answers)}</span> </div>
                <div>Created Question: <span> {getCount(user.questions)} </span></div>
            </div>
            <div className="score-container">
                <h3>Score</h3>
                <label>{getCount(user.answers) + getCount(user.questions)}
                </label>
            </div>
        </div>
    )
}

export default LeaderBoardCard;
