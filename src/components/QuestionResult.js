import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveSelectedQuestion } from '../actions/questions';
import '../css/result.css';

class QuestionResult extends Component {

    getTotalCount = () => {
        const { selectedQuestion: { poll } } = this.props;
        return poll.optionOne.votes.length + poll.optionTwo.votes.length
    }

    render() {
        const { users, selectedQuestion, allQuestions, match, history } = this.props;
        if (!(selectedQuestion && selectedQuestion.poll && selectedQuestion.poll.id)) {
            if (match && match.params.id && allQuestions.length) {
                const questionId = match.params.id
                const poll = allQuestions.find(q => q.id === questionId)
                if (!(poll && poll.id)) {
                    history.push('/404-page');
                    return false;
                }
                else {
                    const authorDetails = users[poll.author]
                    this.props.dispatch(saveSelectedQuestion({ poll, authorDetails }));
                }
            }
        }
        return (
            selectedQuestion && selectedQuestion.authorDetails ?
                <div className="result-container container-spec">
                    <div className="result-card-container">
                        <label>{selectedQuestion.authorDetails.name} asks:</label>
                        <div className="result-card-details">
                            <img src={selectedQuestion.authorDetails.avatarURL} alt={selectedQuestion.authorDetails.name} className="result-user-avatar" />
                            <div className="result-card-item">
                                <h2> Results: </h2>
                                <div>
                                    <label>
                                        <span>
                                            {selectedQuestion.poll.optionOne.text}?
                                        </span>
                                        <span>
                                            {`${selectedQuestion.poll.optionOne.votes.length} 
                                                out of ${this.getTotalCount()}`}
                                        </span>
                                    </label>
                                    <hr />
                                    <label>
                                        <span>
                                            {selectedQuestion.poll.optionTwo.text}?
                                        </span>
                                        <span>
                                            {`${selectedQuestion.poll.optionTwo.votes.length} 
                                                out of ${this.getTotalCount()}`}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div > :
                <h4>Loading...</h4>
        )
    }
}

function mapStateToProps({ questions: { selectedQuestion, allQuestions }, users, authUser }) {
    return {
        allQuestions: Object.values(allQuestions),
        selectedQuestion,
        users,
        authUser
    }
}
export default connect(mapStateToProps)(QuestionResult);