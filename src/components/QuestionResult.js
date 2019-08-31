import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/result.css';

class QuestionResult extends Component {

    state = {
        selectedQuestion: {}
    }
    getTotalCount = () => {
        const { selectedQuestion: { poll } } = this.state;
        return poll.optionOne.votes.length + poll.optionTwo.votes.length
    }

    static getDerivedStateFromProps(props, state) {
        if (props.allQuestions && props.allQuestions.length) {
            if (state.selectedQuestion.poll)
                return null;
            const { users, selectedQuestion, allQuestions, match, history } = props;

            if (!(selectedQuestion && selectedQuestion.poll && selectedQuestion.poll.id)) {
                if (match && match.params.id && allQuestions.length) {
                    const questionId = match.params.id
                    const poll = allQuestions.find(q => q.id === questionId)
                    if (!(poll && poll.id)) {
                        history.push('/404-page');
                        return null;
                    }
                    else {
                        const authorDetails = users[poll.author]
                        return { selectedQuestion: { poll, authorDetails } };
                    }
                }
            }
            else {
                let question = { ...selectedQuestion };
                const isValidQuestion = allQuestions.find(q => q.id === question.poll.id)
                if (isValidQuestion) {
                    question.poll = isValidQuestion;
                    return { selectedQuestion: question }
                }
                else {
                    props.history.push('/404-page');
                }
            }
            return null;
        }
        return null;
    }

    render() {
        const { selectedQuestion } = this.state;

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