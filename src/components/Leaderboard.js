import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderboardCard from './LeaderboardCard';
import '../css/leaderBoard.css';

class LeaderBoard extends Component {

  filterUsers = (users) => {
    if (users && users.length) {
      const leaderboardUsers = users.sort((a, b) => {
        const x = (Object.keys(a.answers)).length + a.questions.length
        const y = (Object.keys(b.answers)).length + b.questions.length
        return y - x;
      });
      return leaderboardUsers;
    }
    return [];
  }

  render() {
    const { users } = this.props;
    const orderedUsers = this.filterUsers(users)
    return (
      <div className="leaderboard-container container-spec">
        {orderedUsers.map(user =>
          <LeaderboardCard key={user.id} user={user} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  }
}
export default connect(mapStateToProps)(LeaderBoard)