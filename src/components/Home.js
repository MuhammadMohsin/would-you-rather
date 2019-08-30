import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from './Tabs';
import PollCard from './PollCard';
import { saveSelectedQuestion } from '../actions/questions';
import '../css/home.css';

class Home extends Component {

    handleSelectPoll = (poll, authorDetails) => {
        this.props.dispatch(saveSelectedQuestion({poll, authorDetails}));
        this.props.history.push(`/question/${poll.id}`);
    }

    render() {
        const { unansweredQuestions, answeredQuestions, users } = this.props;
        return (
            <div className="home-container container-spec">
                <Tabs>
                    <div label="Unanswered Questions">
                        {unansweredQuestions.map(question =>
                            <PollCard
                                key={question.id}
                                poll={question}
                                author={users[question.author]} 
                                handleSelectPoll={(poll)=>this.handleSelectPoll(poll,users[question.author])}/>
                        )}
                    </div>
                    <div label="Answered Questions">
                    {answeredQuestions.map(question =>
                        <PollCard
                            key={question.id}
                            poll={question}
                            author={users[question.author]} 
                            handleSelectPoll={(poll)=>this.handleSelectPoll(poll,users[question.author])}/>
                        )}
                    </div>
                </Tabs>
            </div>
        )
    }
}
function mapStateToProps({ questions, authUser, users }) {
    const questionsList = Object.values(questions.allQuestions)
    const userAnswers = authUser && authUser.answers ? Object.keys(authUser.answers) : [];
    return {
        users,
        answeredQuestions: questionsList.filter((question) => userAnswers.includes(question.id))
            .sort((a, b) => b.timestamp - a.timestamp),
        unansweredQuestions: questionsList.filter((question) => !userAnswers.includes(question.id))
            .sort((a, b) => b.timestamp - a.timestamp)
    }
}
export default connect(mapStateToProps)(Home);