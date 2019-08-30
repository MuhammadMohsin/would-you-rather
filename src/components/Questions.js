import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveSelectedQuestion } from '../actions/questions';
import { handlePollAnswer } from '../actions/shared';
import '../css/questions.css';

class Questions extends Component {

    state = {
        option: null
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { option } = this.state;
        const { selectedQuestion: { poll}, history, authUser } = this.props;
        this.props.dispatch(handlePollAnswer(authUser.id, poll.id, option, ()=>{
            history.push(`/result/${poll.id}`);
        }));
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
                <div className="questions-container container-spec">
                    <div className="question-card-container">
                        <label>{selectedQuestion.authorDetails.name} asks:</label>
                        <div className="question-card-details">
                            <img src={selectedQuestion.authorDetails.avatarURL} alt={selectedQuestion.authorDetails.name} className="question-user-avatar" />
                            <div className="question-card-item">
                                <h4>
                                    Would You Rather ...
                                </h4>
                                <form>
                                    <label>
                                        <input
                                            type="radio"
                                            name="ans"
                                            value={'optionOne'}
                                            onChange={(e) => this.setState({ option: e.target.value })}
                                        /> {selectedQuestion.poll.optionOne.text}
                                    </label>
                                    <br />
                                    <label>
                                        <input
                                            type="radio"
                                            name="ans"
                                            value={'optionTwo'}
                                            onChange={(e) => this.setState({ option: e.target.value })}
                                        /> {selectedQuestion.poll.optionTwo.text}
                                    </label>
                                    <button
                                        type="submit"
                                        className="question-btn"
                                        disabled={!this.state.option}
                                        style={{
                                            cursor: this.state.option ? 'pointer' : 'not-allowed'
                                        }}
                                        onClick={this.handleSubmit}>
                                        Submit
                                    </button>
                                </form>
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
export default connect(mapStateToProps)(Questions);