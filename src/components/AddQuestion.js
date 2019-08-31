import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewQuestion } from '../actions/shared';
import serializeForm from 'form-serialize';
import '../css/addQuestion.css';

class AddQuestion extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const options = serializeForm(e.target, { hash: true })
        this.props.dispatch(addNewQuestion(this.props.authUser.id, options, () => {
            this.props.history.push('/');
        }));
    }
    render() {
        return (
            <div className="add-ques-container container-spec">
                <div className="add-ques-card-container">
                    <h2>Create New Question</h2>
                    <hr />
                    <div className="add-ques-card-details">
                        <div className="add-ques-card-item">
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="optionOneText" required />
                                <p>OR</p>
                                <input type="text" name="optionTwoText" required />
                                <button className="add-ques-btn">Add Question</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps({ authUser }) {
    return {
        authUser
    }
}
export default connect(mapStateToProps)(AddQuestion);