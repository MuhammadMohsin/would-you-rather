import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handlePollAnswer } from '../actions/shared';
import '../css/questions.css';

class Questions extends Component {

    state = {
        option: null,
        selectedQuestion: {}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { option } = this.state;
        const { history, authUser } = this.props;
        const { selectedQuestion: { poll } } = this.state;
        this.props.dispatch(handlePollAnswer(authUser.id, poll.id, option, () => {
            history.push(`/result/${poll.id}`);
        }));
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